<template>
    <div class="body">
    <div align="center">
        <h4>วีรภัทร เอี๊ยบกงไซ</h4>
        <!-- <div class="d-flex justify-content-between " style="height: 30px;">
            <router-link to="/Main_admin"><img src="/img/ArrowLeft.png" class="arrow"  type="button"></router-link>
            <router-link to="/Checkin"><img src="/img/ArrowR.png" class="arrow"  type="button"></router-link>
        </div> -->
        <div class="year" align="center" >
            <label for="leave" style="width: 20px; height: 30px;">ปี</label>
            <select  name="year" required style="width: 72px; height: 22px;" @change="test()">
                <option value="2022">2022</option>
                <option value="2022">2023</option>
                <option value="2022">2024</option>
            </select>
        </div>

        <table class="table table-bordered" >
            <thead>
                <tr  bgcolor="#A6E0FA" align="center">
                    <th scope="col" rowspan="2" style="padding-bottom:25px;">เดือน</th>
                    <th scope="col" colspan="3">วันทำงาน</th>
                    <th scope="col" colspan="2">วันหยุด</th>
                    <th scope="col" colspan="3">วันลา</th>
                    <th scope="col" rowspan="2" style="padding-bottom:25px;">มาสาย</th>
                    <th scope="col" rowspan="2" style="padding-bottom:25px;">ขาด</th>  
                </tr>
                <tr  bgcolor="#A6E0FA" align="center" border="3" >
                        <td>ปกติ</td>
                        <td>OT</td>
                        <td>อื่นๆ</td>
                        <td>ปกติ</td>
                        <td>นักขัตฤกษ์</td>
                        <td>ลากิจ</td>
                        <td>ลาป่วย</td>
                        <td>อื่นๆ</td>
                </tr>
               
                    <tr align="center">
                        <th>มกราคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>กุมภาพันธ์</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>มีนาคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>เมษายน</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>พฤษภาคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>มิถุนายน</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>กรกฏาคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>สิงหาคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>กันยายน</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>ตุลาคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>พฤศจิกายน</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr align="center">
                        <th>ธันวาคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    
            </thead>
            <tbody>
                <tr v-for="(data, index) in ListCheckIn" :key="index">
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
                    <td></td>
                </tr>
            </tbody>
        </table>
        <p>{{}}</p>
    </div>
</div>
</template>
    
<script>
// import axios from 'axios'
// export default {
//     name: 'app',
//     data() {
//         return {
//             ListCheckIn: []
//         }
//     },
//     mounted(){
//         axios.get('http://192.168.1.37:3000/employee',this.Employee)
//         .then(function(response){
//             console.log(response)
//         })
//         console.log(this.Employee)
//     },
//     methods: {
//         showMyText: function (e) {
//             var keyword = e.target.value
//             var result = this.ListCheckIn.filter(obj => obj.fname.includes(keyword));
//             console.log('test', result)
//             this.ListCheckIn = result
//         }
//     }
// }
</script>

<style scoped> 
.year {
    height: 30px; 
    width: 300px;
    font-family:kanit;
}
.body {    
    padding-top: 30px;
    margin-left: 100px;
    margin-right: 100px;
    font-family:kanit;
}
.arrow{
    width: 40px;
    height: 30px;
    padding-right: 10px;
    margin-top: 10px;
}   
</style>
