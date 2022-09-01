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
            await axios.post('http://localhost:3000/employee',this.Employee).then(function(response){
                alert('insert successfully! : '+response)
            })
        },
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
              <div style="font-family:kanit" class="col-Lg-2 " align="center">รหัสพนักงาน :</div>
              <div style="font-family:kanit" class="col-Lg-5" align="center">
                <input 
                  v-model="this.Employee.Emp_ID" 
                  type="text"
                  style="width:500px;"
                  required
                  class="form-control"
                  placeholder="username"
                  pattern="^[a-zA-Z0-9]+$"
                  title="ภาษาอังกฤษหรือตัวเลขเท่านั้น"
                  minlength="5"
                  
                />
              </div>
            </div>
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">รหัสผ่าน :</div>
              <div style="font-family:kanit" class="col-Lg-5" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.pwd"
                  type="password"
                  required
                  class="form-control"
                  placeholder="password"
                  pattern="^[a-zA-Z0-9]+$"
                  minlength="2"
                  
                />
                <!-- @change="test()" -->
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เพศ :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <select v-model="this.Employee.Emp_Sex" style="width:500px;" >
                  <option value="man">ชาย</option>
                  <option value="mele">หญิง</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">ชื่อ-สกุล :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Name"
                  type="text"
                  required
                  class="form-control"
                  placeholder="ชื่อ-สกุล"
                />
                <!-- @change="test()" -->
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">รูปภาพ :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  name="Emp_Pic"
                  type="file"
                  class="form-control"
                  accept="image/*"
                />
              </div>
            </div>

            <div style="font-family:kanit" class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เลขประจำตัวประชาชน :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Identity_ID"
                  type="text"
                  required
                  class="form-control"
                  placeholder="เลขประจำตัวประชาชน"
                />
              </div>
            </div>

            <div style="font-family:kanit" class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">วัน/เดือน/ปี เกิด :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Birthday"
                  type ="date"
                  class="form-control"
                  placeholder="วัน/เดือน/ปี เกิด"
                />
              </div>
            </div>

            <div style="font-family:kanit" class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">วันที่เข้าทำงานวันแรก :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
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
              <div style="font-family:kanit" class="col-Lg-2" align="center">อายุ :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Age"
                  type="text"
                  class="form-control"
                  placeholder="อายุ"
                />
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">กรุ๊ปเลือด :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_bloodtype"
                  type="text"  
                  class="form-control"
                  pattern="^[A-Z]+$"
                  placeholder="กรุ๊ปเลือด"
                />
              </div>
            </div>
            
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">ศาสนา :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_religion"
                  type="text"
                  class="form-control"
                  placeholder="ศาสนา"
                />
              </div>
            </div>
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เชื้อชาติ :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
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
              <div style="font-family:kanit" class="col-Lg-2" align="center">สัญชาติ :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_race"
                  type="text"
                  class="form-control"
                  placeholder="สัญชาติ"
                />
              </div>
            </div>
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">โรคประจำตัว :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_sick"
                  type="text"
                  class="form-control"
                  placeholder="โรคประจำตัว"
                />
              </div>
            </div>


            <div class="col-Lg-4" align="center">
              <br />
              <h4 style="font-family:kanit;" >ข้อมูลติดต่อ</h4>
            </div>
            
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">อีเมล์ :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Mail"
                  type="email"
                  class="form-control"
                  placeholder="อีเมล์"
                />
              </div>
            </div>
            
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เบอร์โทร :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  v-model="this.Employee.Emp_Phone"
                  type="text"
                  class="form-control"
                  placeholder="เบอร์โทร"
                />
              </div>
            </div>


            <div class="col-Lg-4" align="center">
              <br />
              <h4 style="font-family:kanit;" >ที่อยู่</h4>
            </div>
            

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">ที่อยู่ตามทะเบียนบ้าน :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <textarea 
                  v-model="this.Employee.Emp_Addresshome" 
                  style="width:500px;"
                  class="form-control"></textarea>
              </div>
            </div>
            
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">ที่อยู่ปัจจุบัน :</div>
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
                <button style="font-family:kanit;" 
                        @click="this.addEmployee()" 
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
