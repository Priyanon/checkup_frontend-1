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
              Emp_Pic:''
            }
        }
    },
    mounted(){
    
    },
    methods:{
        async addEmployee(){
            await axios.post('http://192.168.1.37:3000/employee',this.Employee)
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
<template>
<div class="container">
      <div class="row">
        <div >
            <div class="form-group">
              <div class="col-Lg-4"></div>
              <div class="col-Lg-4" align="center">
                <br />
                <h4 style="font-family:kanit;" >สมัครสมาชิก</h4>
              </div>
              <!-- <input
                name="Admin_level"
                type="hidden"
                id="Admin_level"
                value="2"
              /> -->
            </div>
            <div class="form-group">
              <div class="col-Lg-2 " align="center">รหัสพนักงาน : </div>
              <div class="col-Lg-5" align="center">
                <!-- style="font-family:kanit" -->
                <input 
                  v-model="this.Employee.Emp_ID" 
                  type="text"
                  style="width:500px;"
                  required
                  class="form-control"
                  placeholder="Username"
                  pattern="^[a-zA-Z0-9]+$"
                  title="ภาษาอังกฤษหรือตัวเลขเท่านั้น"
                  />
                  <!--กรอกข้อมูลผิดส่งไม่ได้-->
              </div>
            </div>
            <div class="form-group">
              <div class="col-Lg-2" align="center">รหัสผ่าน :</div>
              <div class="col-Lg-5" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.pwd"
                  type="password"
                  required
                  class="form-control"
                  placeholder="password"
                  pattern="^[a-zA-Z0-9]+$"
                />
                <!-- @change="test()" -->
              </div>
            </div>

            <div class="form-group">
              <div class="col-Lg-2" align="center">เพศ :</div>
              <div class="col-Lg-7" align="center">
                <select v-model="this.Employee.Emp_Sex" style="width:500px;" required>
                  <option value="man">ชาย</option>
                  <option value="mele">หญิง</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <div class="col-Lg-2" align="center">ชื่อ-สกุล :</div>
              <div class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Name"
                  type="text"
                  required
                  class="form-control"
                  placeholder="name-surname"
                  pattern="^[a-zA-Z]+$"
                />
                <span class="validity"></span>
                <!-- @change="test()" -->
                <!-- ใส่เกินมีแจ้งเตือน -->
              </div>
            </div>

            <div class="form-group">
              <div class="col-Lg-2" align="center">รูปภาพ :</div>
              <div class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  name="Emp_Pic"
                  type="file"
                  class="form-control"
                  accept="image/*"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-Lg-2" align="center">เลขประจำตัวประชาชน :</div>
              <div class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Identity_ID"
                  type="text"
                  required
                  class="form-control"
                  placeholder="เลขประจำตัวประชาชน"
                  pattern="[0-9]{13}"
                />
                <!-- ใส่ได้เฉพาะตัวเลข -->
              </div>
            </div>

            <div class="form-group">
              <div class="col-Lg-2" align="center">วัน/เดือน/ปี เกิด :</div>
              <div class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Birthday"
                  type ="date"
                  class="form-control"
                  placeholder="วัน/เดือน/ปี เกิด"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-Lg-2" align="center">วันที่เข้าทำงานวันแรก :</div>
              <div class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_IssueDate"
                  type  ="date"
                  class="form-control"
                  placeholder="วันที่เข้าทำงานวันแรก"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-Lg-2" align="center">กรุ๊ปเลือด :</div>
              <div class="col-Lg-6" align="center">
                <select v-model="this.Employee.Emp_bloodtype" style="width:500px;" required>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <div class="col-Lg-2" align="center">ศาสนา :</div>
              <div class="col-Lg-6" align="center">
                <select v-model="this.Employee.Emp_religion" style="width:500px;" required>
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
              </div>
            </div>
            
            <div class="form-group">
              <div class="col-Lg-2" align="center">เชื้อชาติ :</div>
              <div class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_nationality"
                  type="text"
                  class="form-control"
                  placeholder="เชื้อชาติ"
                />
              </div>
            </div>
            
            <div class="form-group">
              <div class="col-Lg-2" align="center">สัญชาติ :</div>
              <div class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_race"
                  type="text"
                  class="form-control"
                  placeholder="สัญชาติ"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-Lg-2" align="center">โรคประจำตัว :</div>
              <div class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_sick"
                  type="text"
                  class="form-control"
                  placeholder="โรคประจำตัว"
                  required
                />
              </div>
            </div>


            <div class="col-Lg-4" align="center">
              <br />
              <h4 style="font-family:kanit;" >ข้อมูลติดต่อ</h4>
            </div>
            
            <div class="form-group">
              <div class="col-Lg-2" align="center">อีเมล์ :</div>
              <div class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Mail"
                  type="email"
                  class="form-control"
                  placeholder="อีเมล์"
                  required
                />
              </div>
            </div>
            
            <div class="form-group">
              <div class="col-Lg-2" align="center">เบอร์โทร :</div>
              <div class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Phone"
                  type="text"
                  class="form-control"
                  placeholder="เบอร์โทร"
                  required
                />
              </div>
            </div>


            <div class="col-Lg-4" align="center">
              <br />
              <h4 style="font-family:kanit;" >ที่อยู่</h4>
            </div>
            

            <div class="form-group">
              <div class="col-Lg-2" align="center">ที่อยู่ตามทะเบียนบ้าน :</div>
              <div class="col-Lg-6" align="center">
                <textarea 
                  v-model="this.Employee.Emp_Address" 
                  style="width:500px;"
                  class="form-control"></textarea>
              </div>
            </div>
            
            <div class="form-group">
              <div class="col-Lg-2" align="center">ที่อยู่ปัจจุบัน :</div>
              <div class="col-Lg-6" align="center">
               <textarea 
                  v-model="this.Employee.Emp_Addressnow" 
                  style="width:500px;"
                  class="form-control"></textarea>
              </div>
            </div>
            <div class="form-group">  
                <div class="col-Lg-4" align="center">
                <div class="col-Lg-2">
                <div class="col-Lg-6">
                <button @click="this.addEmployee()" 
                        class="btn btn-primary" 
                        >
                        บันทึก
                </button>
                </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
