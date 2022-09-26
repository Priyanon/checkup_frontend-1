<script>
import axios from 'axios';
export default {
    data(){
        return {
            Employee:{
              Emp_ID:'',
              Emp_Identity_ID:'',
              Emp_Name:'',
              Emp_Birthday:'',
              Emp_Sex:'',
              Emp_IssueDate:'',
              Emp_Addresshome:'',
              Emp_Phone:'',
              Emp_Mail:'',
              Emp_Age:'',
              Emp_bloodtype:'',
              Emp_sick:'',
              pwd:'',
              Emp_nationality:'',
              Emp_race:'',
              Emp_Scanpic:'',
              Emp_religion:'',
              Emp_Addressnow:'',
              Emp_Pic:'',
              Role:''
            }
        }
    },
    mounted(){
    
    },
    methods:{
        async addEmployee(){
            await axios.post('http://10.99.178.208:3000/employee',this.Employee)
            .then(function(response){
              alert('insert successfully! : ' + response)
            })
        },
        // เพิ่ม error
        test(){
          console.log(this.Employee)
        }
    }
}
</script>
<!-- เพิ่มสิทธิตอนสร้าง user -->
<template>
<div class="body" style="margin-left:300px !important;">
  <h4 style="font-family:kanit; margin-left:200px">เพิ่มข้อมูลผู้ใช้งาน</h4>
  <div class="col-md-8">
     <label for="exampleFormControlInput1" class="form-label">รหัสพนักงาน</label>
    <input 
      type="email" 
      class="form-control" 
      id="exampleFormControlInput1" 
      placeholder=""
      v-model="this.Employee.Emp_ID">
  </div>
  <div class="col-md-8" >
     <label for="exampleFormControlInput1" class="form-label" >รหัสผ่าน</label>
    <input 
      type="email" 
      class="form-control" 
      id="exampleFormControlInput1" 
      placeholder=""
      v-model="this.Employee.pwd">
  </div>
  
<br>

  <h5 style="font-family:kanit;">ข้อมูลส่วนตัว</h5>

  <div class="col-md-8">
     <label for="exampleFormControlInput1" class="form-label">ชื่อ-นามสกุล</label>
    <input type="email" 
      class="form-control" 
      id="exampleFormControlInput1" 
      placeholder=""
      v-model="this.Employee.Emp_Name" >
  </div>
  <div class="col-md-8">
    <label for="firstName" class="form-label">เลขบัตรประจำตัวประชาชน</label>
    <input  
      type="text" 
      class="form-control" 
      placeholder="" 
      required
      v-model="this.Employee.Emp_Identity_ID">
  </div>
  <!-- <form class="row g-3"> -->
  <!-- <div class="col-md-4">
    <label for="inputEmail4" class="form-label">ชื่อ-นามสกุล</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div> -->

  <!-- <div class="col-md-4">
    <label for="firstName" class="form-label">เลขบัตรประจำตัวประชาชน</label>
    <input  type="text" class="form-control" placeholder="" required>
  </div>
</form> -->
  <div class="col-md-8">
    <label for="firstName" class="form-label">วัน/เดือน/ปี เกิด</label>
    <input  
      type="date" 
      class="form-control" 
      placeholder="" 
      required
      v-model="this.Employee.Emp_Birthday">
  </div> 

  <br>
  <form class="row g-3">
  <div class="col-md-2">
    <label for="input gender1" class="form-label">เพศ</label>
    <select id="input gender" class="form-select" v-model="this.Employee.Emp_Sex">
      <option value="man">ชาย</option>
      <option value="mele">หญิง</option>
    </select>
  </div> 
  <div class="col-md-3">
    <label for="input gender1" class="form-label">กรุ๊ปเลือด</label>
    <select id="input gender" class="form-select" v-model="this.Employee.Emp_bloodtype">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="AB">AB</option>
      <option value="O">O</option>
    </select>
    </div> 
<div class="col-md-3">
    <label for="firstName" class="form-label">โรคประจำตัว</label>
    <input  type="text" 
      class="form-control" 
      placeholder="" 
      required
      v-model="this.Employee.Emp_sick">
  </div>
  
  </form>
<br>
  <form class="row g-3">
  
  <div class="col-md-4">
    <label for="input gender1" class="form-label">ศาสนา</label>
    <select id="input gender" class="form-select" v-model="this.Employee.Emp_religion">
      <option value="ศาสนาพุทธ" >ศาสนาพุทธ</option>
      <option value="ศาสนาอิสลาม">ศาสนาอิสลาม</option>
      <option value="ศาสนาคริสต์">ศาสนาคริสต์</option>
      <option value="ศาสนาพราหมณ์-ฮินดู">ศาสนาพราหมณ์-ฮินดู</option>
      <option value="ศาสนาซิกข์">ศาสนาซิกข์</option>
      <option value="ศาสนายิว">ศาสนายิว</option>
      <option value="ศาสนาเชน">ศาสนาเชน</option>
      <option value="ศาสนาโซโรอัสเตอร์">ศาสนาโซโรอัสเตอร์</option>
      <option value="ศาสนาบาไฮ">ศาสนาบาไฮ</option>
      <option value="ไม่นับถือศาสนา">ไม่นับถือศาสนา</option>
    </select>
  </div> 

  <div class="col-md-2">
    <label for="firstName" class="form-label">เชื้อชาติ</label>
    <input  
      type="text" 
      class="form-control" 
      placeholder="" 
      required
      v-model="this.Employee.Emp_nationality">
  </div>

  <div class="col-md-2">
    <label for="firstName" class="form-label">สัญชาติ</label>
    <input  
      type="text" 
      class="form-control" 
      placeholder="" 
      required
      v-model="this.Employee.Emp_race">
  </div>
</form>
<br>
<h5 style="font-family:kanit;" >ข้อมูลติดต่อ</h5>
<div class="col-md-8">
  <label for="exampleFormControlInput1" class="form-label">เบอร์โทรศัพท์</label>
  <input 
    type="Phone" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder=""
    v-model="this.Employee.Emp_Phone">
</div>
<div class="col-md-8">
  <label for="exampleFormControlInput1" class="form-label">E-mail</label>
  <input 
    type="email" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder=""
    v-model="this.Employee.Emp_Mail">
</div>

<br>
<h5 style="font-family:kanit;" >ที่อยู่ตามทะเบียนบ้าน</h5>
<div class="col-md-8">
  <input 
    type="Phone" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder=""
    v-model="this.Employee.Emp_Addresshome">
</div>
<br>
<h5 style="font-family:kanit;" >ที่อยู่ปัจจุบัน</h5>
<div class="col-md-8">
  <input 
    type="email" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder=""
    v-model="this.Employee.Emp_Addressnow">
</div>
<br>
<div class="col-md-8"> 
            <div class="form-group">
             <label for="exampleFormControlInput1" class="form-label">รูปภาพ</label>
                <input 
                  name="Emp_Pic"
                  type="file" 
                  class="form-control" 
                  accept="image/*"
                  >
                  <!-- v-model="this.Employee.Emp_Pic" -->
              </div>
 </div>             
<br>
<div class="col-md-8">            
  <div class=" form-group">
    <label for="input gender1" class="form-label">สิทธ์การเข้าถึง</label>
    <select id="input gender" class="form-select" v-model="this.Employee.Role">
      <option value="สิทธ์การเข้าถึง">สิทธ์การเข้าถึง</option>
      <option value="Employee">Employee</option>
      <option value="Admin">Admin</option>
      <option value="Executive">Executive</option>
    </select>
  </div>  
</div> 

  <br>                 
<div class="md-8" >
  <button class="btn btn-primary" type="submit" 
  style="font-family:kanit;width:580px; 
  margin-bottom: 30px;" >บันทึก</button>
</div>


</div>
</template>
