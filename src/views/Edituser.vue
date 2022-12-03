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
            <router-link :to="{ name: 'EdituserNext', params: { id: Employee.Emp_ID } }" class="btn btn-warning">
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
const API_URL = "http://192.168.1.43:3000/employee"
// const route = useRoute()

export default {
  data() {
    return {
      posts: [],
      Employee: {
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
          alert('ลบผู้ใช้สำเร็จ ID : ' + Emp_ID)
        })
        .catch((error) => {
          console.log("ERRRR:: ", error.response.data);
        });
    },
  }
};

</script>
