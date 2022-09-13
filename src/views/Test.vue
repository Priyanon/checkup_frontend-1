<template>
  <div class="container">
    <h1>ข้อมูลสมาชิก</h1>
    <Datatable class="display">
      <thead>
        <tr class="table-info">
          <th scope="col">รหัสพนักงาน</th>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="Employee in posts" :key="Employee.id">
          <td>{{Employee.Emp_ID}}</td>
          <td>{{Employee.Emp_Name}}</td>
          <td>{{Employee.Emp_Identity_ID}}</td>
          <td>{{Employee.Emp_Sex}}</td>
          <td>{{Employee.Emp_Birthday}}</td>
          <td>{{Employee.Emp_bloodtype}}</td>
          <td>{{Employee.Emp_nationality}}</td>
          <td>{{Employee.Emp_race}}</td>
          <td>{{Employee.Emp_sick}}</td>
          <td>{{Employee.Emp_Mail}}</td>
          <td>{{Employee.Emp_Phone}}</td>
          <td>{{Employee.Emp_Address}}</td>
          <td>{{Employee.Emp_Addressnow}}</td>
          <td>{{Employee.Emp_IssueDate}}</td>
        </tr>
      </tbody>
    </Datatable>
    <p>Total:{{}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import DataTable from 'datatables.net-vue3';
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
      .catch((error) => console.log(response.error))
    }
    
  }

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
        <div class="row">
            <h1>test text</h1>
            <div class="col-12">
                <table class="table table-bordered">
                    <thead>
                        <tr class="table-info" v-for="Employee in posts" :key="Employee.id">
                            <th scope="col">Emp_ID</th>
                            <th scope="col">Emp_Name</th>
                            <th scope="col">Emp_Identity_ID</th>
                            <th scope="col">Emp_Sex</th>
                            <th scope="col">Emp_Birthday</th>
                            <th scope="col">Emp_bloodtype</th>
                            <th scope="col">Emp_nationality</th>
                            <th scope="col">Emp_race</th>
                            <th scope="col">Emp_sick</th>
                            <th scope="col">Emp_mail</th>
                            <th scope="col">Emp_Phone</th>
                            <th scope="col">Emp_Address</th>
                            <th scope="col">Emp_Addressnow</th>
                            <th scope="col">Emp_IssueDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in Employee" :key="index">
                            <td>{{item.Emp_ID}}</td>
                            <td>{{item.Emp_Name}}</td>
                            <td>{{item.Emp_Identity_ID}}</td>
                            <td>{{item.Emp_Sex}}</td>
                            <td>{{item.Emp_Birthday}}</td>
                            <td>{{item.Emp_bloodtype}}</td>
                            <td>{{item.Emp_nationality}}</td>
                            <td>{{item.Emp_race}}</td>
                            <td>{{item.Emp_sick}}</td>
                            <td>{{item.Emp_Mail}}</td>
                            <td>{{item.Emp_Phone}}</td>
                            <td>{{item.Emp_Address}}</td>
                            <td>{{item.Emp_Addressnow}}</td>
                            <td>{{item.Emp_IssueDate}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Total:{{}}</p>
                {{ this.Employee }}
            </div>
        </div>
    </div> -->
    