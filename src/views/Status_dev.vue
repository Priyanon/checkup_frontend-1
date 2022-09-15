<template>
    <div>
        <div style="margin-top: 50px;"  class="text-center">
            <h1>สถานะการเข้าทำงาน</h1>
        </div>
        <router-link to="/Status">&#8249;</router-link>
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
                  <td>Pongsakorn Phophool</td>
                  <td>Senior Software Developer</td>
                  <td></td>
                  <td></td>

                </tr>

                <tr>
                  <td>2</td>
                  <td>Chachai Netson</td>
                  <td>Software Developer</td>
                  <td></td>
                  <td></td>

                </tr>

                <tr>
                  <td>3</td>
                  <td>Suppanath Sattayarath</td>
                  <td>Software Developer</td>
                  <td></td>
                  <td></td>

                </tr>

                <tr>
                  <td>4</td>
                  <td>Wiruyut Purathaka</td>
                  <td>Software Developer</td>
                  <td></td>
                  <td></td>

                </tr>

                <tr>
                  <td>5</td>
                  <td>Theerasak Putklang</td>
                  <td>Software Developer</td>
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

<style>
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