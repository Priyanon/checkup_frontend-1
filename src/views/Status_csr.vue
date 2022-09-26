<template>
  <div class="container">
      <div class="text-center status">
          <h1>สถานะการเข้าทำงาน</h1>
      </div>
      <router-link to="/Mainadmin"><img src="/img/ArrowLeft.png" class="nav-icon1"  type="button"></router-link>
      <div class="text-center">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ-นามสกุล</th>
                <th>ตำแหน่ง</th>
                <th>สถานะ</th>
                <th>เวลา</th>
              </tr>

              <tr>
                <td>1</td>
                <td>Sukanya Wongtho</td>
                <td>Customer Service</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>2</td>
                <td>Natthanicha Piansmer</td>
                <td>Customer Service</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>3</td>
                <td>Ratchadaporn Seehawat</td>
                <td>Customer Service</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>4</td>
                <td>Phatcharee Puadchoo</td>
                <td>Customer Service</td>
                <td></td>
                <td></td>
              </tr>

            </thead>
          </table>
      </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
 .text-center{
  font-family:kanit;
}
a {
text-decoration: none;
display: inline-block;
padding: 8px 16px;
}
a:hover {
background-color: #ddd;
color: black;
}
.previous {
background-color: #f1f1f1;
color: black;
}
.next {
background-color: #04AA6D;
color: white;
}
.round {
border-radius: 50%;
}
</style>