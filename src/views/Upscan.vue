<template>
    <div class="body">
        <div class align="center">
            <h5>ข้อมูลใบหน้า</h5>
            <div class="d-flex justify-content-between">
                 <router-link to="/Main_admin"><img src="/img/ArrowLeft.png" class="nav-icon1"  type="button"></router-link>
            </div>

        </div>
    
        <div class="justify-content-center">
          <div class="price-box2">
            <div class="ribbon-large">
              <img src="/img/face-id.png" class="face-id" >
            </div>
          </div>
        </div> 
    
        <div class align="center" >
        <h4 >วิธีตั้งค่า Face ID</h4>
        <p class="Face ID" align="center" >ขั้นแรกนำใบหน้าของคุณเข้ามาอยู่ในกรอบของกล้องเพื่อแสดงใบหน้าของคุณให้ระบบจดจำใบหน้า</p>
        </div> 
    
        <div class="btn1">
            <button class="w-30 btn btn btn-primary  col-3" ><span>เริ่ม!</span></button>
        </div>
    </div> 
    
     
    </template>
    
    
    
    <script>
    export default {
    
    }
    </script>
    
    <style scoped>
    
    .face-id{
      width: 200px !important;
      height: 200px !important;
      margin-left: 440px !important;
      margin-right: 450px !important;
    }
    .body{
    font-family:kanit;
    }
    .btn1{
    margin-left: 460px !important;
    
    }
    </style>