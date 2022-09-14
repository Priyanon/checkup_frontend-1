<template>
    <div align="center">
        <h5>วีรภัทร เอี๊ยบกงไซ</h5>
        <div class="d-flex justify-content-between">
                    <a href="#" class="previous round">&#8249;</a>
                    <a href="#" class="next round">&#8250;</a>
    </div>
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
                <tr class="table-info" align="center">
                    <th scope="col" rowspan="2" style="padding-bottom:25px;">เดือน</th>
                    <th scope="col" colspan="3">วันทำงาน</th>
                    <th scope="col" colspan="2">วันหยุด</th>
                    <th scope="col" colspan="3">วันลา</th>
                    <th scope="col" rowspan="2" style="padding-bottom:25px;">มาสาย</th>
                    <th scope="col" rowspan="2" style="padding-bottom:25px;">ขาด</th>  
                </tr>
                <tr align="center" border="3" class="table-info">
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
</template>
    
<script>
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

<style> 
.year {
    height: 30px; 
    width: 300px;
}
</style>
