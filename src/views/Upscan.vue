<template>
  <div class="body">
    <div class="Upscan-border">
    <div class="row">
          <div class align="center">
              <h5>ข้อมูลใบหน้า</h5>
              <!-- <div class="d-flex justify-content-between">
                   <router-link to="/Main_admin"><img src="/img/ArrowLeft.png" class="nav-icon1"  type="button"></router-link>
              </div> -->
          </div>
  
          <div class="col-6">
            <div class="price-box2">
              <div class="ribbon-large">
                <img src="/img/face-id.png" class="face-id" >
              </div>
            </div>
          </div> 
  
          <div class align="center" >
          <h4 >วิธีตั้งค่า Face ID</h4>
          <p class="Face ID" align="center" >กดอัปโหลดไฟท์รูปภาพของคุณเพื่อแสดงใบหน้าของคุณให้ระบบจดจำใบหน้า</p>
          </div> 
  
          <div class="col-md-6"  > 
              <div class="form-group">
                  <input 
                    name="Emp_Pic"
                    type="file" 
                    class="form-control" 
                    accept="image/"
                    >
                    <!-- v-model="this.Employee.Emp_Pic" -->
                </div>
          </div>
  
          <div class="btn1">
              <button class="w-30 btn btn btn-primary  col-4" type="submit"><span>บันทึก</span></button>
          </div>
        </div>
      </div>
  </div> 
  </template>
  
  
  
      <script>
      export default {
  
      }
      </script>
  
      <style scoped>
  
      /* .face-id{
        width: 200px !important;
        height: 200px !important;
        margin-left: 540px !important;
        /*margin-right: 450px !important; 
      } */
      .body{
      /* font-family:kanit; */
      display: flex;
      justify-content: center;
      align-items: center;
      }
      /* .btn1{
      margin-left: 520px !important;
      margin-top: 20px;
      } */
      .Upscan-border {
  border: solid rgb(0, 0, 0) 3px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  padding: 40px;
  margin: 30px;
  /* margin-left: auto;
      margin-right: auto; */
  max-width: 600px;
}
      </style>