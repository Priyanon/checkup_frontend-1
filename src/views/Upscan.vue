<template>
    <div class="body">
        <div class align="center">
            <h5>ข้อมูลใบหน้า</h5>
            <div class="d-flex justify-content-between">
                 <router-link to="/Mainadmin">&#8249;</router-link>
            </div>

        </div>
    
        <div class="justify-content-center"   >
                  <div class="price-box2">
                    <div class="ribbon-large">
                      <img src="/img/face-id.png" class="face-id"    href="#">
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
    
    <style>
    
    .face-id{
      width: 200px;
      height: 200px;
      margin-left: 540px;
      margin-right: 460px;
    }
    .body{
    font-family:kanit;
    }
    .btn1{
    margin-left: 540px;
    
    }
    </style>