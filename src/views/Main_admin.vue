<template>
  <div class="container">
    <main class="justify-content-center">
      <form>
        <img src="/img/Profile.png" class="Profile justify-content-center">
        <div class="row">
          <div col-6>
            
            <!-- <button  class="w-40 btn btn-outline-dark btn1 col-3" @click="addtoCheckiny">
              <i  class="bi bi-calendar2-check"></i> 
              <span>บันทึกการเข้า-ออก</span>
            </button> -->

            <button class="w-40 btn btn-outline-dark btn2 col-3" @click="addtoStatus">
              <i class="bi bi-clock"></i>
              <span>สถานะการเข้างาน</span>
            </button>
          </div>
          
          <div>
            <button class="w-40 btn btn-outline-dark btn3 col-3" @click="addtoLeave">
              <i class="bi bi-envelope"></i>
              <span>ใบลาอิเล็กทรอนิกส์</span>
            </button>

            <button class="w-40 btn btn-outline-dark btn4 col-3" @click="addtoCalendar">
              <i class="bi bi-calendar-day"></i>
              <span>ปฏิทิน</span>
            </button>

          </div>
          <div>
            <button class="w-40 btn btn-outline-dark btn5 col-3" @click="addtoEdituser">
              <i class="bi bi-person-plus"></i>
              <span>เพิ่มข้อมูลผู้ใช้งาน</span>
            </button>

            <button class="w-40 btn btn-outline-dark btn6 col-3" @click="addtoUpscan">
              <i class="bi bi-fullscreen"></i>
              <span>เพิ่มข้อมูลใบหน้า</span>
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
      this.$router.push({name:'Edituser'})
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
.container{
  font-family:kanit;
}
.bi-calendar2-check{
  padding-right: 10px;
}
.bi-clock{
  padding-right: 10px;
}
.bi-envelope{
  padding-right: 10px;
}
.bi-calendar-day{
  padding-right: 10px;
}
.bi-person-plus{
  padding-right: 10px;
}
.bi-fullscreen{
  padding-right: 10px;
}
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

.btn5 {

  height: 50px;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 15px !important;
  border-radius: 12px !important;
}

.btn6 {

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