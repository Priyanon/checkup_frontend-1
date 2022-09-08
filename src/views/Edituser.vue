<!-- <script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import axios from 'axios';
    const columns = [
      { data: 'รหัสพนักงาน' },
      { data: 'ชื่อ-สกุล' },
      { data: 'เลขประจำตัวประชาชน' },
      { data: 'เพศ' },
      { data: 'เบอร์โทรศัพท์' },
      { data: 'E-mail' },
      { data: 'วัน/เดือน/ปี เกิด' },
      { data: 'กรุ๊ปเลือด' },
      { data: 'โรคประจำตัว' },
      { data: 'เชื้อชาติ' },
      { data: 'สัญชาติ' },
      { data: 'ที่อยู่ตามทะเบียนบ้าน' },
      { data: 'ที่อยู่ปัจจุบัน' },
      { data: 'วันที่เข้าทำงานวันแรก' },
    ];
    
    </script> -->

<template>
 <DataTable class="display">
    <thead>
        <tr>
            <th>First</th>
            <th>Second</th>
        </tr>
    </thead>
</DataTable>
</template>

<script>
// import DataTable from 'datatables.net-vue3';
// import axios from 'axios';
// import $ from "jquery"
// export default {
//     data(){
//         return {
//             Employee:[]
//         }
//     },
//     methods:{
//         async getEmployee(){
//             await axios.get('http://192.168.43.120:3000/employee',this.Employee)
//             .then((response) => {
//                 // console.log(response)
//                 $('#Employeetable').DataTable( {
//                 data:response.data,
//                 columns: [
//                     { data: "Emp_ID" },
//                     { data: "Emp_Name" },
//                     { data: "Emp_Identity_ID" },
//                     { data: "Emp_Birthday" },
//                     { data: "Emp_Sex" },
//                     { data: "Emp_Phone" },
//                     { data: "E-mail" },
//                     { data: "Emp_bloodtype" },
//                     { data: "Emp_sick" },
//                     { data: "Emp_nationality" },
//                     { data: "Emp_race" },
//                     { data: "Emp_religion" },
//                     { data: "Emp_Addresshome" },
//                     { data: "Emp_Addressnow" },
//                     { data: "Emp_IssueDate" },
//                     { data: "pwd" },
//                 ]
//         } );
//             })
//             .catch(error => console.log(error.response))
//         },
//     }
// }

</script>

<style>
/* @import 'datatables.net-dt';
@import 'datatables.net-bs5'; */
</style>