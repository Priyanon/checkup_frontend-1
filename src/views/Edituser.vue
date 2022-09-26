<template>
  <div Style="margin-top:30px;" class="container table-responsive text-center">
    
    <h1>ข้อมูลสมาชิก</h1>
    <br>
    <div class="btn-group" role="group" aria-label="Default button group">
      <button type="button" class="btn btn-outline-dark">
        <router-link to="/Regist">เพิ่ม</router-link>
      </button>
    </div>
    <br><br>
    <Datatable class="table table-bordered container table-responsive text-center">
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
        <tr v-for="Employee in posts" :key="Employee.id">
          <td>{{Employee.Emp_ID}}</td>
          <td>{{Employee.Emp_Name}}</td>
          <td>{{Employee.Emp_Identity_ID}}</td>
          <!-- <td>{{Employee.Emp_Sex}}</td> -->
          <!-- <td>{{Employee.Emp_Birthday}}</td>
          <td>{{Employee.Emp_bloodtype}}</td>
          <td>{{Employee.Emp_nationality}}</td>
          <td>{{Employee.Emp_race}}</td>
          <td>{{Employee.Emp_sick}}</td> -->
          <td>{{Employee.Emp_Phone}}</td>
          <td>{{Employee.Emp_Mail}}</td>
          <!-- v-if="index !== editIndex" -->
          <td>
            <button
              type="button"
              class="btn btn-danger mr-2"
              v-on:click="deleteStudent(index,student._id)"
              >ลบ</button>
            <button
              type="button"
              class="btn btn-warning"
              v-on:click="openEdit(index,student)"
              >แก้ไข</button>
          </td>
          <!-- <td>{{Employee.Emp_Address}}</td>
          <td>{{Employee.Emp_Addressnow}}</td>
          <td>{{Employee.Emp_IssueDate}}</td> -->
        </tr>
      </tbody>
    </Datatable>
    <p>Total:{{}}</p>
  </div>
</template>
  
<script>
import axios from 'axios';
// import DataTable from 'datatables.net-vue3';

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios
      .get('http://192.168.1.37:3000/employee')
      .then((response) => {
        this.posts = response.data
        console.log(response)
      })
      .catch((error) => console.log(error.response))
  }
};

</script>
    
    
  <!-- <th scope="col">รหัสพนักงาน</th>
  <th scope="col">ชื่อ-สกุล</th>
  <th scope="col">เลขประจำตัวประชาชน</th>
  <th scope="col">เพศ</th>
  <th scope="col">เบอร์โทรศัพท์</th>
  <th scope="col">E-mail</th>
  <th scope="col">วัน/เดือน/ปี เกิด</th>
  <th scope="col">กรุ๊ปเลือด</th>
  <th scope="col">โรคประจำตัว</th>
  <th scope="col">เชื้อชาติ</th>
  <th scope="col">สัญชาติ</th>
  <th scope="col">ที่อยู่ตามทะเบียนบ้าน</th>
  <th scope="col">ที่อยู่ปัจจุบัน</th>
  <th scope="col">วันที่เข้าทำงานวันแรก</th> 
  
   <h1 class="text-canter my-text" id="my-h1">LOLOLOLOL</h1>  
      <div class="my-container bg-white text-back container" id="app" v-cloak>
          <input type="text" placeholder="search..." v-on:keyup="showMyText"> 
  

      -->