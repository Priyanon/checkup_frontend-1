<template>
  <div class="container">
      <div style="margin-top: 50px;" class="text-center">
          <h1>สถานะการเข้าทำงาน</h1>
          
          <div class="d-flex justify-content-between">
          <router-link to="/Mainadmin">&#8249;</router-link>
          </div>     
        
      </div>
      <div>
          <table class="table tabel-striped table-bordered">
            <thead class="thead-dark">  
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อแผนก</th>
                <th>จำนวน</th>
                <th>หมายเหตุ</th>
              </tr>

              <tr>
                <th>1</th>
                <th><router-link to="/Status_md">Founder & Managing Director</router-link> </th>
                <th>1</th>
                <th></th>
              </tr>

              <tr>
                <th>2</th>
                <th><router-link to="/Status_coo">Founder & Chief Operating Officer</router-link></th>
                <th>1</th>
                <th></th>
              </tr>

              <tr>
                <th>3</th>
                <th><router-link to="/Status_dev">Software Developer</router-link></th>
                <th>5</th>
                <th></th>
              </tr>

              <tr>
                <th>4</th>
                <th><router-link to="/Status_mkt">Markting</router-link></th>
                <th>4</th>
                <th></th>
              </tr>

              <tr>
                <th>5</th>
                <th><router-link to="/Status_csr">Customer Service</router-link></th>
                <th>4</th>
                <th></th>
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