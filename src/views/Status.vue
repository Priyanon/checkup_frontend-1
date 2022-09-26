<template>
  <div class="container">
      <div class="text-center">
          <h4>สถานะการเข้าทำงาน</h4>
          
          <div class="d-flex">
          <router-link to="/Mainadmin"><img src="/img/ArrowLeft.png" class="nav-icon1"  type="button"></router-link>
          </div>     
        
      </div>
      <div style="margin-top:20px;"  class="text-center">
          <table class="table tabel-striped table-bordered">
            <thead class="thead-dark" style="">  
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ-นามสกุล </th>
                <th>แผนก</th>
                <th>สถานะ</th>
                <th>เวลา</th>
              </tr>

              <tr>
                <td>1</td>
                <td>Thanawat Temchitaree</td>
                <td>Founder & Managing Director</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>2</td>
                <td>Wichai Shinnarong</td>
                <td>Founder & Chief Operating Officer</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>3</td>
                <td>Pongsakorn Phophool</td>
                <td>Software Developer</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>4</td>
                <td>Chachai Netso</td>
                <td>Software Developer</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>5</td>
                <td>Suppanath Sattayarath</td>
                <td>Software Developer</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>6</td>
                <td>Wiruyut Purathaka</td>
                <td>Software Developer</td>
                <td></td>
                <td></td>

              </tr>

              <tr>
                <td>7</td>
                <td>Theerasak Putklang</td>
                <td>Software Developer</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>8</td>
                <td>Jirarat Kaenamkaew</td>
                <td>Markting</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>9</td>
                <td>Anucha Thonglor</td>
                <td>Markting</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>10</td>
                <td>Sirikarnjana Sukkasem</td>
                <td>Markting</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>11</td>
                <td>Sitar Na Talang</td>
                <td>Markting</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>12</td>
                <td>Sukanya Wongtho</td>
                <td>Customer Service</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>13</td>
                <td>Natthanicha Piansmer</td>
                <td>Customer Service</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>14</td>
                <td>Ratchadaporn Seehawat</td>
                <td>Customer Service</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>15</td>
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
import axios from 'axios'
export default {
data(){
  return{
    User: []
  }
},
//   created(){
//     let PPP = '';
//     axios.get{apiURL}.then(res =>{
//       this.User = res.data
//     }).catch(error => {
//         console.log(error)
//     })
//   }
}
</script>

<style scoped>
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