<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from 'axios';
import * as yup from "yup";
// import { useRouter } from 'vue-router';
// // import { error } from 'jquery';
// const router = useRouter()
// const route = useRouter()
// ตัวแปร ดัก Error

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      pwd: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      Role: yup
        .string()
        .required("Role is required!"),
      userID: yup
        .number()
        .required("userID is required!"),
      identityID: yup
        .number()
        .required("identityID is required!")
        .min(13, "Must be at least 13 characters!")
        .max(13, "Must be maximum 13 characters!"),
      // Birthday: yup
      //   .required("identityID is required!"),
      Sex: yup
        .string()
        .required("Sex is required!"),
      bloodtype: yup
        .string()
        .required("bloodtype is required!"),
      sick: yup
        .string()
        .required("sick is required!"),
      religion: yup
        .string()
        .required("religion is required!"),
      nationality: yup
        .string()
        .required("nationality is required!"),
      race: yup
        .string()
        .required("race is required!"),
      Phone: yup
        .number()
        .required("Phone is required!")
        .min(10, "Must be at least 10 characters!")
        .max(10, "Must be maximum 10 characters!"),
      Home: yup
        .string()
        .required("กรอกข้อมูลที่อยู่ตามทะเบียนบ้าน"),
      Address: yup
        .string()
        .required("กรอกข้อมูลที่อยู่ปัจจุบัน"),
    });
    return {
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
      Emp_Age: '',
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
      schema,
    }
  },
  created() {
    this.getEmployeeById();
  },
  methods: {
    // async updateEmployee() {
    //   await axios.post('http://192.168.1.43:3000/employee', this.Employee)
    //     .then(function (response) {
    //       alert('เพิ่มข้อมูลสำเร็จ')
    //       // this.$router.push('/edituser');
    //     })
    //     .catch((error) => {
    //       console.log("ERRRR:: ", error.response.data);
    //     });
    // },
    async getEmployeeById() {
      let url = `http://192.168.1.43:3000/employee/${this.$route.params.id}`;
      await axios.get(url).then(response => {
        console.log(response.data);
        this.Employee = response.data;
      });
    }
  },
  mounted: function () {
    console.log('Edit')
  }
}
</script>
<!-- เพิ่มสิทธิตอนสร้าง user -->
<template>
  <div class="container">
    <form>
      <h4>เพิ่มข้อมูลผู้ใช้งาน</h4>
      <!-- font-family:kanit;  -->

      <div class="form-group ">
        <label for="exampleFormControlInput1">รหัสพนักงาน</label>
        <input name="userID" type="number" id="userID" placeholder="" required v-model="this.Employee.Emp_ID">
        <ErrorMessage name="userID" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">รหัสผ่าน</label>
        <input name="pwd" type="password" id="pwd" placeholder="" required v-model="this.Employee.pwd">
        <ErrorMessage name="pwd" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">ชื่อ-นามสกุล</label>
        <input name="username" type="text" id="username" placeholder="กรอกชื่อ-นามสกุล" required
          v-model="this.Employee.Emp_Name">
        <ErrorMessage name="username" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="firstName">เลขบัตรประจำตัวประชาชน</label>
        <input name="identityID" type="" id="identityID" placeholder="กรอกเลขประจำตัวประชาชนให้ครบ 13 ตัว"
          pattern="[0-9]{13}" required v-model="this.Employee.Emp_Identity_ID">
        <ErrorMessage name="identityID" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="firstName">วัน/เดือน/ปี เกิด</label>
        <input name="Birthday" type="date" id="Birthday" placeholder="" required max="2004-12-01"
          v-model="this.Employee.Emp_Birthday">
        <ErrorMessage name="Birthday" class="error-feedback" />
      </div>

      <br>
      <div class="form-group">
        <label for="input gender1">เพศ</label>
        <select name="Sex" id="Sex" class="form-select" required v-model="this.Employee.Emp_Sex">
          <option value="man">ชาย</option>
          <option value="mele">หญิง</option>
        </select>
        <ErrorMessage name="Sex" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="input gender1">กรุ๊ปเลือด</label>
        <select name="bloodtype" id="bloodtype" class="form-select" required v-model="this.Employee.Emp_bloodtype">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="AB">AB</option>
          <option value="O">O</option>
        </select>
        <ErrorMessage name="bloodtype" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="firstName">โรคประจำตัว</label>
        <input name="sick" type="text" placeholder="" id="sick" v-model="this.Employee.Emp_sick">
        <ErrorMessage name="sick" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="input gender1">ศาสนา</label>
        <select name="religion" id="religion" class="form-select" required v-model="this.Employee.Emp_religion">
          <option value="ศาสนาพุทธ">ศาสนาพุทธ</option>
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
        <ErrorMessage name="religion" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="firstName">เชื้อชาติ</label>
        <input name="nationality" type="text" placeholder="" id="nationality" required
          v-model="this.Employee.Emp_nationality">
        <ErrorMessage name="nationality" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="firstName">สัญชาติ</label>
        <input name="race" type="text" placeholder="" id="race" required v-model="this.Employee.Emp_race">
        <ErrorMessage name="race" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">เบอร์โทรศัพท์</label>
        <input name="Phone" type="Phone" id="Phone" placeholder="กรอกเบอร์โทรศัพท์ 10 หลัก ตัวอย่าง 092365412365"
          pattern="[0-9]{10}" required v-model="this.Employee.Emp_Phone">
        <ErrorMessage name="Phone" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">E-mail</label>
        <input name="email" type="email" id="email" placeholder="" required v-model="this.Employee.Emp_Mail">
        <ErrorMessage name="email" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">ที่อยู่ตามทะเบียนบ้าน</label>
        <input name="Home" type="text" placeholder="" required v-model="this.Employee.Emp_Address">
        <ErrorMessage name="Home" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">ที่อยู่ปัจจุบัน</label>
        <input name="Address" type="text" id="Address" placeholder="" required v-model="this.Employee.Emp_Addressnow">
        <ErrorMessage name="Address" class="error-feedback" />
      </div>

      <!-- <div class="form-group">
        <label for="exampleFormControlInput1">รูปภาพ</label>
        <input name="Emp_Pic" type="file" accept="image/*" v-on:change="onChangeFileUpload">
      </div> -->
      <br>

      <div class="form-group">
        <label for="input gender1">สิทธ์การเข้าถึง</label>
        <select id="Role" class="form-select" required v-model="this.Employee.Role">
          <option value="Employee">Employee</option>
          <option value="Admin">Admin</option>
          <option value="Executive">Executive</option>
        </select>
        <ErrorMessage name="Role" class="error-feedback" />
      </div>

      <div class="form-group ">
        <button class="btn btn-primary " style="margin-top: 5px;">บันทึก</button>
        <!-- @click="addEmployee" -->
      </div>
    </form>
  </div>
</template>
<style scoped>
* {
  /* font-family: 'Kanit', sans-serif; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #747373;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

h4 {
  text-align: center;
  margin: 0 0 0 20px;
}

.form-control {
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 20px;
}

.form-control label {
  color: rgb(16, 16, 16);
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 14px;
}

.form-control input:focus {
  outline: 0;
  border-color: #777;
}

.form-control.error input {
  border-color: red;
}

.form-control.success input {
  border-color: green;
}

.form-group small {
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}

.form-group.error small {
  visibility: visible;
}

.container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 600px;
}

.form {
  padding: 30px 40px;
}
</style>