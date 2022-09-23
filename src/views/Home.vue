<template>
  <div class="row g-5">
        <div class="col-md-6">
          
        
          <div class="ribbon-large1" >
              <img src="/img/User.png" class="User" href="#">
              <h5>พนักงาน</h5>
              <div class="spacer spacer-t20 spacer-b20"></div>
                  <a class="btn btn-warning" href=""
                    role="button">Employee</a>
              </div>
  
              <div class="section theme-purple">
                  <div class="ribbon-large2">
                    <img src="/img/chart.png" class="chart" href="#">
            
  
                  <h5>ผู้บริหาร</h5>
                  <a class="btn btn-warning " id="button3"
                     role="button">Executives</a>
                  <div class="spacer spacer-t20 spacer-b20"></div>
                </div>
              </div>
          </div>
        
       
        <div class="col-md-6">
          <div class="section theme-green ">
                <div class="price-box2">
                  <div class="ribbon-large3">
                    <img src="/img/id-card.png" class="id-card" href="#">
                  
                  <h5>เจ้าหน้าที่ </h5>
                  <div class="spacer spacer-t20 spacer-b20"></div>
                  <router-link to="/login" class="btn btn-info">Admin</router-link>
                 <br>
                 <div class="ribbon-large4" >
                  <img src="/img/face-id.png" class="face-id2" href="#">
                
                  <h5 > จดจำใบหน้า </h5>
                  <div class="spacer spacer-t20 spacer-b20"></div>
                  <a class="btn btn-warning" 
                    role="button">Face ID</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>    
      </div>
  
  </template>
  
  <style>
    .User {
  width: 50px;
  height: 50px;
}

.id-card {
  width: 60px;
  height: 60px;
}

.chart {
  width: 50px;
  height: 50px;

}

.face-id2 {
  width: 60px !important;
  height: 60px !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
  .ribbon-large1{
    margin-left: 300px;
    font-family: kanit;
  }
  .ribbon-large2{
    margin-left: 300px;
    font-family: kanit;
  }
  .ribbon-large3{
    font-family: kanit;
  }
  .ribbon-large4{
   font-family: kanit;
  }
  </style>