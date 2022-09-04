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
        Leave_Send:'',
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
  <div>
    <h1>ใบลาอิเล็กทรอนิกส์</h1>
    <div>
      <h1>ประเภทของการลางาน</h1>
      <label for="leave">ประเภทของการลางาน:</label>
      <select v-model="this.Leaves.Leave_type" required @change="test()">
        <option value="ลากิจ">ลากิจ</option>
        <option value="ลาป่วย">ลาป่วย</option>
        <option value="ลาบวช">ลาบวช</option>
        <option value="ลาคลอดบุตร">ลาคลอดบุตร</option>
        <option value="ลาอบรม">ลาอบรม</option>
        <option value="ลาพักร้อน">ลาพักร้อน</option>
      </select>
    </div>

    <div>
      <h1>เลือกเวลาในการลางาน</h1>
      <div>
        <input type="radio" v-model="this.Leaves.Leave_timetype" value="fullday" @change="test()">ลาเต็มวัน<br>
        <input type="radio" v-model="this.Leaves.Leave_timetype" value="halfday" @change="test()">ลาครึ่งวัน
      </div>
    </div>

    <div>
      <label for="day">วันที่เริ่มลา : </label>
      <input type="date" id="birthday" v-model="this.Leaves.Leave_day" @change="test()">
      <label for="dayend">วันที่สิ้นสุดการลา :</label>
      <input type="date" id="birthday" v-model="this.Leaves.Leave_dayend" @change="test()">
    </div>
    <div>
      <h1>หมายเหตุ</h1>
      <div class="form-group">
        <div class="col-Lg-6" align="center">
          <textarea v-model="this.Leaves.Leave_Inform" style="width:500px;" class="form-control" @change="test()">
              </textarea>
        </div>
      </div>
    </div>
    <button @click="this.addLeaves()">ยืนยัน</button>
    <button>ยกเลิก</button>
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
</template>
<style>
</style>