<template>
    <div class="container">
      <main class="justify-content-center">
        <form>
          <img src="/img/Profile2.png" class="Profile justify-content-center">
          <div class="row">
            <div col-6>
              <button style="font-family:kanit; margin-left: 30px !important;"
                class="w-40 btn btn-outline-dark btn1 col-3"
                @click="addtoCheckiny">
                <img src="/img/save.png" width="20" height="20" style="margin-right:30px;">
                <span>บันทึกการเข้า-ออก</span>
  
              </button>
  
              <button style="font-family:kanit; margin-left: 30px !important;" 
                      class="w-40 btn btn-outline-dark btn2 col-3"
                      @click="addtoStatus">
                <img src="/img/user-time.png" width="20" height="20" style="margin-right:30px;">
                <span>สถานะการเข้างาน</span>
              </button>
            </div>
            <div>
              <button style="font-family:kanit;" 
                      class="w-40 btn btn-outline-dark btn2 col-3"
                      @click="addtoLeave">
                <img src="/img/Leave.png" width="20" height="20" style="margin-right:30px;">
                <span>ใบลาอิเล็กทรอนิกส์</span>
              </button>
  
              <button style="font-family:kanit;" 
                      class="w-40 btn btn-outline-dark btn2 col-3"
                      @click="addtoCalendar">
                <img src="/img/Calendar.png" width="20" height="20" style="margin-right:30px;">
                <span>ปฏิทิน</span>
              </button>
  
            </div>
          </div>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      addtoCheckiny() {
        this.$router.replace({path:'/checkinyear'})
      },
      addtoStatus() {
        this.$router.replace({path:'/status'})
      },
      addtoLeave() {
        this.$router.push({path:'/leave'})
      },
      addtoEdituser() {
        this.$router.push({path:'/edituser'})
      },
      addtoUpscan() {
        this.$router.push({path:'/upscan'})
      },
      addtoCalendar() {
        this.$router.push({path:'/calendar'})
      }
    }
  }
  </script>
  
  <style scoped>
  
  .btn1 {
  
    height: 50px;
    margin-top: 30px !important;
    margin-bottom: 10px;
    font-size: 15px !important;
    border-radius: 12px !important;
  
  }
  
  .btn2 {
  
    height: 50px;
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 10px;
    font-size: 15px !important;
    border-radius: 12px !important;
  
  }
  
  .btn3 {
  
    height: 50px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 15px !important;
    border-radius: 12px !important;
  }
  
  .btn4 {
  
    height: 50px;
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 10px;
    font-size: 15px !important;
    border-radius: 12px !important;
  }
  
  form {
    text-align: center;
  }
 
  .Profile {
    height: 250px !important;
    justify-content: center !important;
    margin-top: 50px;
  
  
  }
  </style>