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
              token:'',
              pwd:'',
              Emp_nationality:'',
              Emp_race:'',
              Emp_Scanpic:'',
              Emp_religion:'',
              Emp_Addressnow:''
            }
        }
    },
    mounted(){
    
    },
    methods:{
        async addUser(){
            await axios.post('http://localhost:3000/user',this.Employee).then(function(response){
                alert('insert successfully! : '+response)
            })
        }
    }
}
</script>
<template>
<div class="container">
      <div class="row">
        <div >
          <form
            name="register"
            action=""
            method="POST"
            id="register"
            class="form-horizontal"
          >
            <div class="form-group">
              <div class="col-Lg-4"></div>
              <div class="col-Lg-4" align="center">
                <br />
                <h4 style="font-family:kanit;" >สมัครสมาชิก</h4>
              </div>
              <input
                name="Admin_level"
                type="hidden"
                id="Admin_level"
                value="2"
              />
            </div>
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2 " align="center">รหัสพนักงาน :</div>
              <div style="font-family:kanit" class="col-Lg-5" align="center">
                <input 
                  name="Emp_ID" 
                  type="text"
                  style="width:500px;"
                  required
                  class="form-control"
                  id="Emp_ID"
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
                  name="LPassword"
                  type="password"
                  required
                  class="form-control"
                  id="LPassword"
                  placeholder="password"
                  pattern="^[a-zA-Z0-9]+$"
                  minlength="2"
                />
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เพศ :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  name="Emp_Sex"
                  type="text"
                  required
                  class="form-control"
                  id="Emp_Sex"
                  placeholder="ชื่อ-สกุล"
                />
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">ชื่อ-สกุล :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  name="Emp_Name"
                  type="text"
                  required
                  class="form-control"
                  id="Emp_Name"
                  placeholder="ชื่อ-สกุล"
                />
              </div>
            </div>
            <div style="font-family:kanit" class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เลขประจำตัวประชาชน :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  name="Emp_Identity_ID"
                  type="text"
                  required
                  class="form-control"
                  id="Emp_Identity_ID"
                  placeholder="เลขประจำตัวประชาชน"
                />
              </div>
            </div>

            <div style="font-family:kanit" class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">วัน/เดือน/ปี เกิด :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  name="Emp_Birthday"
                  type  ="date"
                  class="form-control"
                  id="Emp_Birthday"
                  placeholder="วัน/เดือน/ปี เกิด"
                />
              </div>
            </div>

            <div style="font-family:kanit" class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">วันที่เข้าทำงานวันแรก :</div>
              <div style="font-family:kanit" class="col-Lg-7" align="center">
                <input
                  style="width:500px;"
                  name="Emp_IssueDate"
                  type  ="date"
                  class="form-control"
                  id="Emp_IssueDate"
                  placeholder="วันที่เข้าทำงานวันแรก"
                />
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">อายุ :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                style="width:500px;"
                name="Emp_Age"
                  type="text"
                  class="form-control"
                  id="Emp_Age"
                  placeholder="อายุ"
                />
              </div>
            </div>

            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">กรุ๊ปเลือด :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  name="Emp_bloodtype"
                  type="text"  
                  class="form-control"
                  id="Emp_bloodtype"
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
                  name="Emp_religion"
                  type="text"
                  class="form-control"
                  id="Emp_religion"
                  placeholder="ศาสนา"
                />
              </div>
            </div>
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เชื้อชาติ :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  name="Emp_nationality"
                  type="text"
                  class="form-control"
                  id="Emp_nationality"
                  placeholder="เชื้อชาติ"
                />
              </div>
            </div>
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">สัญชาติ :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  name="Emp_race"
                  type="text"
                  class="form-control"
                  id="Emp_race"
                  placeholder="สัญชาติ"
                />
              </div>
            </div>
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">โรคประจำตัว :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  name="Emp_sick"
                  type="text"
                  class="form-control"
                  id="Emp_sick"
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
                  name="Emp_Mail"
                  type="email"
                  class="form-control"
                  id="Emp_Mail"
                  placeholder="อีเมล์"
                />
              </div>
            </div>
            
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">เบอร์โทร :</div>
              <div style="font-family:kanit" class="col-Lg-6" align="center">
                <input
                  style="width:500px;"
                  name="Emp_Phone"
                  type="text"
                  class="form-control"
                  id="Emp_Phone"
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
                  name="Emp_Addresshome" 
                  style="width:500px;"
                  class="form-control"></textarea>
              </div>
            </div>
            
            <div class="form-group">
              <div style="font-family:kanit" class="col-Lg-2" align="center">ที่อยู่ปัจจุบัน :</div>
              <div class="col-Lg-6" align="center">
               <textarea 
                  name="Emp_Addressnow" 
                  style="width:500px;"
                  class="form-control"></textarea>
              </div>
            </div>
            <div class="form-group">  
                <div class="col-Lg-4" align="center">
                <div class="col-Lg-2">
                <div class="col-Lg-6">
                <button style="font-family:kanit;" 
                        type="submit" 
                        class="btn btn-primary" 
                        id="btn">
                        บันทึก
                </button>
                </div>
                </div>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
