<script>
import axios from "axios";
export default {
  data() {
    return {
      Leaves: {
        Leave_type: "",
        Leave_timetype: "",
        Leave_Inform: "",
        Leave_day: "",
        Leave_dayend: "",
        Emp_ID: "",
        Emp_Name: ""
      },
    };
  },
  mounted() { },

  methods: {
    async addLeaves() {
      await axios
        .post("http://192.168.1.43:3000/add/leaves", this.Leaves)
        .then(function (response) {
          alert("ส่งไปลาสำเร็จ : ");
        });
    },
    // เพิ่ม error
    test() {
      console.log(this.Leaves);
      // @change="test()"
    },
  },
};

  // createEditableSelect(document.forms[0].myText);
</script>
    
<template>
  <!-- <div class="M_Leave">
    <div class="Leave-border">
      <div class="row"> -->
        <div class="container">
          <from @submit.prevent="addLeaves" :validation-schema="schema">
              <h4 class="text-center" style="font-family: kanit">ใบลาอิเล็กทรอนิกส์</h4>
              
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">รหัสพนักงาน</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="รหัสพนักงาน" v-model="Leaves.Emp_ID">
              </div>

              <div class="form-group col-sm-12">
                <label for="exampleFormControlInput1" class="form-label">ชื่อ-นามสกุล</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ชื่อ-นามสกุล"
                  v-model="Leaves.Emp_Name" required>
              </div>


              <div form-group style="font-family: kanit">
                <label for="country" class="col-3">ประเภทการลา</label>
                <select class="form-select" v-model="this.Leaves.Leave_type" required>
                  <option value="ลาป่วย">ลาป่วย</option>
                  <option value="ลากิจ">ลากิจ</option>
                  <option value="ลากิจพิเศษเพื่อสมรส">ลากิจพิเศษเพื่อสมรส</option>
                  <option value="ลากิจเพื่อจัดงานศพ">ลากิจเพื่อจัดงานศพ</option>
                  <option value="ลาเพื่อฝึกอบรม">ลาเพื่อฝึกอบรม</option>
                  <option value="ลาพักร้อน">ลาพักร้อน</option>
                  <option value="ลาชดเชยการทำงานในวันหยุด">ลาชดเชยการทำงานในวันหยุด</option>
                  <option value="ลาคลอด">ลาคลอด</option>
                  <option value="ลาเพื่อทำมัน">ลาเพื่อทำมัน</option>
                  <option value="ลารับราชการทหาร">ลารับราชการทหาร</option>
                  <option value="ลาอุปสมบท">ลาอุปสมบท</option>
                  <option value="ลาเพื่อประกบพิธีการทางศาสนา">ลาเพื่อประกบพิธีการทางศาสนา</option>
                </select>
              </div>

              <br>
              <!--ประเภทของเวลา-->
              <div form-group style="font-family: kanit">
                <label for="country" class="col-3">ประเภทของเวลา</label>
                <select class="form-select" v-model="this.Leaves.Leave_timetype" required>
                  <option value="ลาเต็มวัน">ลาเต็มวัน</option>
                  <option value="ลาครึ่งวัน">ลาครึ่งวัน</option>
                </select>
              </div>

              <br>
              <div class="row gy-3">
                
                <div class="form-group col-sm-6">
                  <label for="firstName" class="form-label">วันที่เริ่มลา</label>
                  <input v-model="this.Leaves.Leave_day" type="date" class="form-control" placeholder="" required />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                
                <div class="form-group col-sm-6">
                  <label for="lastName" class="form-label">วันที่สิ้นสุดการลา</label>
                  <input v-model="this.Leaves.Leave_dayend" type="date" class="form-control" placeholder="" required />
                  <div class="invalid-feedback">Valid last name is required.</div>
                </div>


                <h5>หมายเหตุ</h5>
                <div class="form-group">
                  <div class="col-Lg-2">
                    <textarea v-model="this.Leaves.Leave_Inform" style="width: 100%" class="form-control"
                      @change="test()">
                    </textarea>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="form-group col-md-6">
                    <button style="width: 100%; font-family: kanit !important" class="btn btn-primary"
                      @click="this.addLeaves">
                      ยืนยัน
                    </button>
                  </div>
                  <div class="form-group col-md-6">
                    <button style="width: 100%; font-family: kanit !important" class="btn btn-secondary" type="reset">
                      ยกเลิก
                    </button>
                  </div>

                </div>
            </div>
          </from>
        </div>
      <!-- </div>
    </div>
  </div> -->
</template>
    
<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.container {
  font-family: kanit;
}

.Leave-border {
  border: solid rgb(0, 0, 0) 3px;
  border-radius: 12px;
  background-color: rgb(197, 197, 197);
  padding: 40px;
  margin: 30px;
  /* margin-left: auto;
      margin-right: auto; */
  max-width: 600px;
}

.save {
  margin-left: 220px;
  margin-right: 220px;
  margin-top: 15px;
}

.M_Leave {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}
</style>
  
                  
                    
            <!-- ..................popup...................... -->
            <!-- <input type="reset" value="ยกเลิก"/>
          <div class="container">
            <button id="open">ยืนยัน</button>
          </div>
          <div class="model-container">
            <div class="model">
              <i class="fas fa-heart"></i>
              <h3>ตรวจสอบข้อมูลอีกครั้ง</h3>
              <img src="" alt="">
              <textarea>
                
              </textarea>
              <button>ยืนยัน</button>
              <button>ยกเลิก</button>
            </div>
          </div> -->
