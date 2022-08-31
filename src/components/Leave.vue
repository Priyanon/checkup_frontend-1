<template>
  <div>
    <form>
      <h1>ใบลาอิเล็กทรอนิกส์</h1>
      <div>
          <h1>ประเภทของการลางาน</h1>
          <label for="leave">ประเภทของการลางาน:</label>
          <select id="leave" name="leave">
            <option value="personalleave">ลากิจ</option>
            <option value="sickleave">ลาป่วย</option>
            <option value="ordinationleave">ลาบวช</option>
            <option value="maternityleave">ลาคลอดบุตร</option>
            <option value="trainingleave">ลาอบรม</option>
            <option value="takeannualleave">ลาพักร้อน</option>
          </select>
      </div>
      <div>
          <h1>เลือกเวลาในการลางาน</h1>
          <form>
            <input type="radio" name="like" value="like">ลาเต็มวัน<br>
            <input type="radio" name="like" value="don'tlike">ลาครึ่งวัน
          </form> 
      </div>
      <div>
          <label for="birthday">วันที่เริ่มลา :</label>
          <input type="date" id="birthday" name="birthday">
          <label for="birthday">วันที่สิ้นสุดการลา :</label>
          <input type="date" id="birthday" name="birthday">
      </div>
      <div>
        <h1>หมายเหตุ</h1>
          <div class="form-group">
            <div class="col-Lg-6" align="center">
              <textarea 
                name="Emp_Addressnow" 
                style="width:500px;"
                class="form-control">
              </textarea>
            </div>
          </div>
      </div>
      <!-- ..................popup...................... -->
      <input type="reset" value="ยกเลิก"/>
      <div class="container">
        <button id="open">ยืนยัน</button>
      </div>
      <div class="model-container">
        <div class="model">
          <i class="fas fa-heart"></i>
          <h3>ตรวจสอบข้อมูลอีกครั้ง</h3>
          <img src="" alt="">
          <textarea>
            {{}}
          </textarea>
          <button>ยืนยัน</button>
          <button>ยกเลิก</button>
        </div>

      </div>
      
    </form>
  </div>
</template>

<script>
// export default {
//     data() {
//         return {
//             user: []
//         }
//     },
//     mounted() {
        
//     },
//     methods: {
//         async getUser(){
//             await axios.get('http://localhost:3000/user').then(function(response){
//                 alert(response)
//             })
//         }
//     }
// }

// createEditableSelect(document.forms[0].myText);
</script>

<style>

</style>