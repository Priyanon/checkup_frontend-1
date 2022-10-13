<template>
    <div class="body" align="center">
        <div class="name">
            <!-- <label for="country" align="center"><a>ชื่อ-นามสกุล</a></label>
            <select class="form-select" name="name" required style="width: 100px; height: 35px;" @change="test()"> -->
            <label style="width: 90px; height: 30px;">ชื่อ-นามสกุล</label>
            <select name="name" required style="width: 200px; height: 30px;" @change="test()">
                    <option value=""></option>
                    <option value="Thanawat Temchitaree">Thanawat Temchitaree</option>
                    <option value="Wichai Shinnarong">Wichai Shinnarong</option>
                    <option value="Pongsakorn Phophool">Pongsakorn Phophool</option>
                    <option value="Suppanath Sattayarath">Suppanath Sattayarath</option>
                    <option value="Wiruyut Purathaka">Wiruyut Purathaka</option>
                    <option value="Theerasak Putklang">Theerasak Putklang</option>
                    <option value="Jirarat Kaenamkaew">Jirarat Kaenamkaew</option>
                    <option value="Anucha Thonglor">Anucha Thonglor</option>
                    <option value="Sirikarnjana Sukkasem">Sirikarnjana Sukkasem</option>
                    <option value="Sitar Na Talang">Sitar Na Talang</option>
                    <option value="Sukanya Wongtho">Sukanya Wongtho</option>
                    <option value="Natthanicha Piansmer">Natthanicha Piansmer</option>
                    <option value="Ratchadaporn Seehawat">Ratchadaporn Seehawat</option>
                    <option value="Phatcharee Puadchoo">Phatcharee Puadchoo</option>
                </select>
        </div>
            
        <!-- <div class="d-flex justify-content-between">
                <router-link to="/Checkinyear"><img src="/img/ArrowLeft.png" class="nav-icon1"  type="button"></router-link>
                <router-link to="/Checkout"><img src="/img/ArrowR.png" class="nav-icon1"  type="button"></router-link>
        </div>
         -->
         <div class="month">   <!-- width ความยาวของ text เยอะต้องเพิ่มความยาว -->
                <label for="leave" align="center" style="width: 90px; height: 30px;">เดือน</label> 
                <select name="year" required style="width: 200px; height: 30px; margin-top:10px ; " @change="test()">
                    <option value=""></option>
                    <option value="มกราคม">มกราคม</option>
                    <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                    <option value="มีนาคม">มีนาคม</option>
                    <option value="เมษายน">เมษายน</option>
                    <option value="พฤษภาคม">พฤษภาคม</option>
                    <option value="มิถุนายน">มิถุนายน</option>
                    <option value="กรกกฎาคม">กรกกฎาคม</option>
                    <option value="สิงหาคม">สิงหาคม</option>
                    <option value="กันยายน">กันยายน</option>
                    <option value="ตุลาคม">ตุลาคม</option>
                    <option value="พฤศจิกายน">พฤศจิกายน</option>
                    <option value="ธันวาคม">ธันวาคม</option>
                </select>
        </div>
    
        <div>
            <table class="table table-bordered" >
                <thead>
                    <tr  bgcolor="#A6E0FA" align="center" >
                        <th scope="col">วันที่</th>
                        <th scope="col">ชื่อ-นามสกุล</th>
                        <th scope="col">เวลาเข้าทำงาน</th>
                        <th scope="col">สถานะเข้างาน</th>
                    </tr>
    
                        <tr align="center">
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>6</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>7</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>8</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>9</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>10</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>11</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <tr align="center">
                            <td>12</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>13</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>14</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>16</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>17</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>18</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>21</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>22</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>23</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>24</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>25</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>26</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>27</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>28</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>29</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr align="center">
                            <td>31</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
            </thead>
            <tbody>
                  <tr>
                <!-- <tr v-for="(data, index) in ListCheckIn" :key="index">
                    <td>{{data.day}}</td>
                    <td>{{data.fname + " " + data.lname}}</td>
                    <td>{{data.time}}</td>
                    <td>{{data.status}}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> -->
                </tr>
            </tbody>
        </table>
        <p>{{}}</p>
    </div>
  </div>  
  </template>
    
  <script >
  import axios from 'axios'
  export default {
    name: 'app',
    data() {
        return {
            ListCheckIn: []
        }
    },
    mounted(){
        axios.get('http://192.168.1.37:3000/employee',this.Employee)
        .then(function(response){
            console.log(response)
        })
        console.log(this.Employee)
    },
    methods: {
        showMyText: function (e) {
            var keyword = e.target.value
            var result = this.ListCheckIn.filter(obj => obj.fname.includes(keyword));
            console.log('test', result)
            this.ListCheckIn = result
        }
    }
  }
  </script>
  <style scoped>
  .body {
      margin-left: 100px;
      margin-right: 100px;
      font-family: kanit;
  }

  .month {
      height: 30px; 
      width: 300px;
      margin-bottom: 20px;
     
      border-radius: 12px;
  }
 
 

  
  </style>
  
