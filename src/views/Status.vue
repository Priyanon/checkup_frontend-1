<template>
  <div class="container">
      <div class="text-center">
        <h4>สถานะการเข้าทำงาน</h4>
        <!-- <div class="d-flex">
          <router-link to="/Main_admin"><img src="/img/ArrowLeft.png" class="nav-icon1"  type="button"></router-link>
        </div>      -->
        
      </div>
      <div style="margin-top:20px;"  class="text-center">
          <table class="table tabel-striped table-bordered">
            <thead class="thead-dark" style="">  
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ-นามสกุล </th>
                <th>แผนก</th>
                <th>สถานะ</th>
                <th>เวลาเข้าทำงาน</th>
              </tr>

              <tr v-for="(Employee,index) in Employee" v-bind:key="Employee.Emp_ID">
                <td>{{(index+1)}}</td>
                <td>{{Employee.Emp_Name}}</td>
                <td>{{Employee.Emp_Address}}</td>
                <td></td>
                <td></td>
              </tr>

            
            </thead>
          </table>
      </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name:'EdituserNext',
data(){
  return{
    Employee: [],
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
        Role: '',
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
      let API_URL = 'http://192.168.1.43:3000/employee'
      axios.get(`${API_URL}`)
        .then((response) => {
          this.Employee = response.data
          // console.log(response)
        })
        .catch((error) => console.log(error.response))
    },
  }
}
</script>

<style scoped>
a {
text-decoration: none;
display: inline-block;
padding: 8px 16px;
}

a:hover {
background-color: #ddd;
color: black;
}

.previous {
background-color: #f1f1f1;
color: black;
}

.next {
background-color: #04AA6D;
color: white;
}

.round {
border-radius: 50%;
}
</style>