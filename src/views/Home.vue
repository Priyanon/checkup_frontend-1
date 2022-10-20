<template>
  <div class="container">
    <main class="justify-content-center">
      <div class="text-center">
        <div class="row" style=" margin-top: 10px; margin-bottom: 10px !important;">  
            <div class="col-md-6 bg-white border rounded-3" >
                <div class="ribbon-large1">
                  <img src="/img/User.png" class="User">
                  <h5  style="margin-right:0px;" >พนักงาน</h5>
                  <router-link to="/login_employee" class="btn btn-light button1 ">Employee</router-link>
                </div>
            </div> 
            <div class="col-md-6 bg-white border rounded-3">   
              <div class="ribbon-large2" >
                  <img src="/img/id-card.png" class="id-card">
                  <h5  style="margin-right:0px;" >เจ้าหน้าที่</h5>
                  <router-link to="/login_admin" class="btn btn-light button2 ">Admin</router-link>
              </div> 
            </div>

            <div class="col-md-6 bg-white border rounded-3">
              <div class="ribbon-large3">
                  <img src="/img/chart.png"  class="chart">
                  <h5 style="margin-left:0px; margin-bottom:10px; margin-top:10px;">ผู้บริหาร</h5>
                  <router-link to="/login_executves" class="btn btn-light button3">Executives</router-link>
                  </div>
            </div>


            <div class="col-md-6 bg-white border rounded-3">   
              <div class="ribbon-large4">
                  <img src="/img/face-id.png" class="faceid">
                  <h5 style="margin-right:0px ; margin-bottom:10px;">จดจำใบหน้า</h5>
                  <router-link to="/upscan" class="btn btn-light button4">Face ID</router-link>
              </div>   
            </div>     
        </div>  
      </div>
    </main>
  </div>
</template>

<style scoped>


  /* .back{
    background-color: salmon;
  } */
  
  /* ปุ่มที่ 1 */
  .User {
    width: 90px;
    height: 90px;
    margin-left: 0px;
    margin-bottom: 20px;
   
  
  }

  .button1{
    border-radius: 12px;
    background-color: #FF9F2F !important;
    color: white !important;
    margin-left: 0px;
    margin-top: 0px;
    width: 180px;
    height: 40px;
    font-size: 15px;
    margin-bottom: 20px;
    
    
  }

  .ribbon-large1{
    margin-left: 0px;
    padding-right: 0px;
    align-content: center;
    /* font-family: kanit; */
    margin-top: 100px;
    
  }


  /* ปุ่มที่ 2 */
  
  .id-card{
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
   
  }

  .button2{
    border-radius: 12px;
    background-color:#1CBE66 !important;
    color: white;
    margin-top: 0px;
    width: 180px;
    height: 40px;
    font-size: 15px;
    margin-bottom: 20px;
  }
  
  .ribbon-large2{
    margin-top: 100px;
    margin-left: 0px;
    margin-right: 0px !important;
    /* font-family: kanit; */
    align-content: center !important;
  }

  /* ปุ่มที่ 3 */
  
  .chart{
    width: 90px;
    height: 90px;
    margin-left: 0px !important;
    margin-bottom: 10px;
   
  }

  .button3{
    border-radius: 12px;
    background-color:#A41BBA !important;
    color: white;
    margin-left: 0px;
    width: 150px;
    height: 40px;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .ribbon-large3{
    margin-top: 100px !important;
    /* font-family: kanit; */

  }
 
  
  /* ปุ่มที่ 4 */
  .faceid {
    width: 110px;
    height: 110px;
    margin-right:0px;
  }   

  .button4{
    border-radius: 12px;
    background-color: #4fc3f7 !important;
    color: white !important;
    margin-right:0px;
    width: 150px !important;
    height: 40px;
    font-size: 15px;
    margin-bottom: 20px;
  
   
  }

  .ribbon-large4{
    align-content: center;
    /* font-family: kanit; */
    margin-top: 100px;
    
  } 
.idc{
  width: 180px !important;
  width: 200px; 
  margin-left: 180px;
  margin-right: 0px; 
  margin-bottom: 10px;
}
</style>