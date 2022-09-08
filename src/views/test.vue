<template>
    <!-- <h1 class="text-canter my-text" id="my-h1">LOLOLOLOL</h1>   -->
    <div class="my-container bg-white text-back">
        <!-- <input type="text" placeholder="search..." v-on:keyup="showMyText"> -->
        <h1>test text</h1>
        <table class="table table-bordered">
            <thead>
                <tr class="table-info">
                    <th scope="col">ชื่อ-สกุล</th>
                    <th scope="col">เลขประจำตัวประชาชน</th>
                    <th scope="col">เพศ</th>
                    <th scope="col">เบอร์โทรศัพท์</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">วัน/เดือน/ปี เกิด</th>
                    <th scope="col">กรุ๊ปเลือด</th>
                    <th scope="col">โรคประจำตัว</th>
                    <th scope="col">เชื้อชาติ</th>
                    <th scope="col">สัญชาติ</th>
                    <th scope="col">ที่อยู่ตามทะเบียนบ้าน</th>
                    <th scope="col">ที่อยู่ปัจจุบัน</th>
                    <th scope="col">วันที่เข้าทำงานวันแรก</th>
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
        <p>Total:{{}}</p>
        <!-- {{ this.ListCheckIn }} -->
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
<!-- <th scope="col">รหัสพนักงาน</th>
<th scope="col">ชื่อ-สกุล</th>
<th scope="col">เลขประจำตัวประชาชน</th>
<th scope="col">เพศ</th>
<th scope="col">เบอร์โทรศัพท์</th>
<th scope="col">E-mail</th>
<th scope="col">วัน/เดือน/ปี เกิด</th>
<th scope="col">กรุ๊ปเลือด</th>
<th scope="col">โรคประจำตัว</th>
<th scope="col">เชื้อชาติ</th>
<th scope="col">สัญชาติ</th>
<th scope="col">ที่อยู่ตามทะเบียนบ้าน</th>
<th scope="col">ที่อยู่ปัจจุบัน</th>
<th scope="col">วันที่เข้าทำงานวันแรก</th> -->