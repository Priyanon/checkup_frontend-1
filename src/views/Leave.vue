<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        Leaves: {
          Leave_Num: '',
          Leave_type: '',
          Leave_timetype: '',
          Leave_Inform: '',
          Leave_day: '',
          Leave_dayend: '',
          Leave_Send: '',
          Approve_Date: '',
          Leave_Status: '',
          Leave_approve: ''
        }
      }
    },
    mounted() {
  
    },
  
    methods: {
      async addLeaves() {
        await axios.post('http://localhost:3000/leaves', this.Leaves).then(function (response) {
          alert('insert successfully! : ' + response)
        })
      },
      // เพิ่ม error
      test() {
        console.log(this.Leaves)
        // @change="test()"
      }
    }
  }
  
    // createEditableSelect(document.forms[0].myText);
  </script>
  
  <template>
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <h4 style="font-family:kanit;">ใบลาอิเล็กทรอนิกส์</h4>
        </div>
  
        <div>
            <div style="font-family:kanit;">
              <label for="country" class="form-label">ประเภทการลา</label>
              <select class="form-select" id="country" required>
                <option value="ลากิจ">ลากิจ</option>
                <option value="ลาป่วย">ลาป่วย</option>
                <option value="ลาบวช">ลาบวช</option>
                <option value="ลาคลอดบุตร">ลาคลอดบุตร</option>
                <option value="ลาอบรม">ลาอบรม</option>
                <option value="ลาพักร้อน">ลาพักร้อน</option>
              </select>
          </div>
        
          <div class="row mt-3">
          <label class="col-mt-3">ประเภทของเวลา</label>
          <div class="my-3 row gy-3 ">
            <div class="form-check col-sm-6">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
              <label class="form-check-label" for="credit">ลาเต็มวัน
              </label>
            </div>
            <div class="form-check col-sm-6">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="debit">ลาครึ่งวัน
              </label>
            </div>
          </div> 
            <div class="row gy-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">เริ่ม</label>
                <input type="date" class="form-control" id="firstName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="form-label">สิ้นสุด</label>
                <input type="date" class="form-control" id="lastName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
  
              <div>
                <h7>หมายเหตุ</h7>
                <div class="form-group">
                  <div class="col-Lg-2">
                    <textarea v-model="this.Leaves.Leave_Inform" style="width:100%;" class="form-control"
                      @change="test()">
                        </textarea>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-6">
                  <button style="width:100%; 
                   font-family:kanit!important; " class="btn btn-primary" @click="this.addLeaves()">ยืนยัน</button>
                </div>
                <div class="col-md-6">
                  <button style="width:100%; font-family:kanit!important;" class="btn btn-secondary">ยกเลิก</button>
                </div>
              </div>
            </div>
          </div>
              
                  
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
        </div>
      </main>
    </div>
  </template>
  
  <style>
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
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }
  
  .b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
  }
  
  .bi {
    vertical-align: -.125em;
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