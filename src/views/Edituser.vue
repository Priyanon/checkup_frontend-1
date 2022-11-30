<template>
  <div Style="margin-top:30px;" class="container table-responsive text-center">

    <h1>ข้อมูลสมาชิก</h1>
    <br>
    <div class="btn-group" role="group" aria-label="Default button group">
      <button type="button" class="btn btn-outline-dark">
        <router-link class="btn" to="/regist">เพิ่ม</router-link>
      </button>
    </div>
    <br><br>
    <table class="table table-bordered container table-responsive text-center">
      <thead>
        <tr class="table-info">
          <th scope="col">รหัสพนักงาน</th>
          <th scope="col">ชื่อ-สกุล</th>
          <th scope="col">เลขประจำตัวประชาชน</th>
          <!-- <th scope="col">เพศ</th> -->
          <th scope="col">เบอร์โทรศัพท์</th>
          <th scope="col">E-mail</th>
          <th scope="col">ดำเนินการ</th>
          <!-- <th scope="col">วัน/เดือน/ปี เกิด</th>
            <th scope="col">กรุ๊ปเลือด</th>
            <th scope="col">โรคประจำตัว</th>
            <th scope="col">เชื้อชาติ</th>
            <th scope="col">สัญชาติ</th>
            <th scope="col">ที่อยู่ตามทะเบียนบ้าน</th>
            <th scope="col">ที่อยู่ปัจจุบัน</th>
            <th scope="col">วันที่เข้าทำงานวันแรก</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="Employee in posts" :key="Employee.Emp_ID">
          <!-- v-for="(Employee,key)" of posts :key="Employee.id" -->
          <td>{{ Employee.Emp_ID }}</td>
          <td>{{ Employee.Emp_Name }}</td>
          <td>{{ Employee.Emp_Identity_ID }}</td>
          <!-- <td>{{Employee.Emp_Sex}}</td> -->
          <!-- <td>{{Employee.Emp_Birthday}}</td>
          <td>{{Employee.Emp_bloodtype}}</td>
          <td>{{Employee.Emp_nationality}}</td>
          <td>{{Employee.Emp_race}}</td>
          <td>{{Employee.Emp_sick}}</td> -->
          <td>{{ Employee.Emp_Phone }}</td>
          <td>{{ Employee.Emp_Mail }}</td>
          <!-- v-if="index !== editIndex" -->
          <td>
            <button color="danger" class="btn btn-danger " @click="deleteUser(Employee.Emp_ID)" > ลบ</button> l
            <router-link :to="{ name: 'EdituserNext', params: { id: EmployeeInfo.Emp_ID } }" class="btn btn-warning">
              แก้ไข
            </router-link>
            <!-- params: { id : posts.Emp_ID } , showDeleteModal = true, deleteUser(Employee.Emp_ID) , getEmployeeInfo(Employee.Emp_ID)"-->
          </td>
        </tr>
      </tbody>
    </table>

    <!--delete Modal -->
    <div class="myModal" v-if="showDeleteModal">
      <div class="modalContainer">
        <div class="deleteHeader">
          <span class="headerTitle">Delete Member</span>
          <button class="closeDelBtn pull-right" @click="showDeleteModal = false">×</button>
        </div>
        <div class="modalBody">
          <h5 class="text-center">Are you sure you want to Delete</h5>
          <h2 class="text-center">{{ Employee.Emp_Name }} // {{ Employee.Emp_ID }}</h2>
        </div>
        <hr>
        <div class="modalFooter">
          <div class="footerBtn pull-right">
            <button class="btn btn-default" ><span
                class="glyphicon glyphicon-remove"></span> Cancel</button> <button class="btn btn-danger"
              @click="showDeleteModal = false, deleteUser(Emp_ID)">
              Yes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END  -->
  </div>
</template>
  
<script >
import axios from 'axios';
// import { useRouter, useRoute } from 'vue-router';
// // import { error } from 'jquery';
// import { reactive } from 'vue';
// const router = useRouter()
// const route = useRoute()
const API_URL = "http://192.168.1.167:3000/employee"
// const route = useRoute()

export default {
  data() {
    return {
      posts: [],
      EmployeeInfo: {
        Emp_ID: '',
        Emp_Identity_ID: '',
        Emp_Name: '',
        Emp_Birthday: '',
        Emp_Sex: '',
        Emp_IssueDate: '',
        Emp_Address: '',
        Emp_Phone: '',
        Emp_Mail: '',
        Emp_bloodtype: '',
        Emp_sick: '',
        pwd: '',
        Emp_nationality: '',
        Emp_race: '',
        Emp_Scanpic: '',
        Emp_religion: '',
        Emp_Addressnow: '',
        Emp_Pic: '',
        Role: ''
      },
      showEditModal: false,
      showDeleteModal: false,
      clickUser: {}
    }
  },
  // setup(){
  //   const EmployeeInfo = reactive({
  //     Emp_ID: '',
  //       Emp_Identity_ID: '',
  //       Emp_Name: '',
  //       Emp_Birthday: '',
  //       Emp_Sex: '',
  //       Emp_IssueDate: '',
  //       Emp_Address: '',
  //       Emp_Phone: '',
  //       Emp_Mail: '',
  //       Emp_bloodtype: '',
  //       Emp_sick: '',
  //       pwd: '',
  //       Emp_nationality: '',
  //       Emp_race: '',
  //       Emp_Scanpic: '',
  //       Emp_religion: '',
  //       Emp_Addressnow: '',
  //       Emp_Pic: '',
  //       Role: ''
  //   })
  //   const router = useRouter()
  //   const route = useRoute()
  // },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get(`${API_URL}`)
        .then((response) => {
          this.posts = response.data
          // console.log(response)
        })
        .catch((error) => console.log(error.response))
    },
    deleteUser(Emp_ID) {
      axios.delete(`${API_URL}/` + Emp_ID)//+ result.Emp_ID,${this.EmployeeInfo.Emp_ID}
        .then(() => {
          this.getUser();
          // console.log(request);
          alert('ลบผู้ใช้สำเร็จ')
        })
        .catch((error) => {
          console.log("ERRRR:: ", error.response.data);
        });
    },
    getEmployeeInfo(Emp_ID) {
      axios
        .get(`${API_URL}/`+Emp_ID)
        .then((response) => {
          console.log('id: ',response)
          this.EmployeeInfo.Emp_ID = response.data.Emp_ID
          this.EmployeeInfo.Emp_Name = response.data.Emp_Name
          this.EmployeeInfo.Emp_Mail = response.data.Emp_Mail
          this.EmployeeInfo.pwd = response.data.pwd
          this.EmployeeInfo.Emp_Identity_ID = response.data.Emp_Identity_ID
          this.EmployeeInfo.Emp_Phone = response.data.Emp_Phone
          this.EmployeeInfo.Emp_Birthday = response.data.Emp_Birthday
          this.EmployeeInfo.Emp_Sex = response.data.Emp_Sex
          this.EmployeeInfo.Emp_Address = response.data.Emp_Address
          this.EmployeeInfo.Emp_bloodtype = response.data.Emp_bloodtype
          this.EmployeeInfo.Emp_sick = response.data.Emp_sick
          this.EmployeeInfo.Emp_nationality = response.data.Emp_nationality
          this.EmployeeInfo.Emp_race = response.data.Emp_race
          this.EmployeeInfo.Emp_religion = response.data.Emp_religion
          this.EmployeeInfo.Emp_Addressnow = response.data.Emp_Addressnow
          this.EmployeeInfo.Role = response.data.Role
        })
        .catch((error) => {
          console.log("ERRRR:: ", error.response.data);
        });
    },
    updateUser() {
      axios
        .put(`${API_URL}/${this.EmployeeInfo.Emp_ID}`, {
          Emp_ID: this.EmployeeInfo.Emp_ID,
          Emp_Identity_ID: this.EmployeeInfo.Emp_Identity_ID,
          Emp_Name: this.EmployeeInfo.Emp_Name,
          Emp_Birthday: this.EmployeeInfo.Emp_Birthday,
          Emp_Sex: this.EmployeeInfo.Emp_Sex,
          Emp_Address: this.EmployeeInfo.Emp_Address,
          Emp_Phone: this.EmployeeInfo.Emp_Phone,
          Emp_Mail: this.EmployeeInfo.Emp_Mail,
          Emp_bloodtype: this.EmployeeInfo.Emp_bloodtype,
          Emp_sick: this.EmployeeInfo.Emp_sick,
          pwd: this.EmployeeInfo.pwd,
          Emp_nationality: this.EmployeeInfo.Emp_nationality,
          Emp_race: this.EmployeeInfo.Emp_race,
          Emp_religion: this.EmployeeInfo.Emp_religion,
          Emp_Addressnow: this.EmployeeInfo.Emp_Addressnow,
          Role: this.EmployeeInfo.Role
        })
        .then((res) => {
          this.getUser();
        })
        .catch((error) => {
          console.log("ERRRR:: ", error.response.data);
        });
    },
    selectMember(posts) {
      this.clickUser = posts;
    }
  }
};

</script>
