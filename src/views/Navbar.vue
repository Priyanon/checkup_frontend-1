<template>
  <nav class="navbar navbar-light bg-white" >
    <div class="container-fluid" >

      <div>
        
        <a class="navbar-brand">
          <img src="/img/Logonavbar.png" class="Logonavbar">
        </a>
      </div>
      <div class="d-flex">

        <div class="nav-icon1">
          <router-link to="/main_admin" class="btn nav-icon4"><i class="bi bi-house"></i> </router-link>
          
        </div>
    
        <!-- <div  class="nav-icon2">
          <router-link to="/User" class="btn nav-icon4"><i class="bi bi-person"></i> </router-link>
          
        </div>

        <div  class="nav-icon3">
          <router-link to="/Alert" class="btn nav-icon4"><i class="bi bi-bell"></i> </router-link>
        
        </div> -->


      <div  class="dropdown nav-icon4">
        <button  class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-gear"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item"><router-link to="/" class="btn nav-icon4">Login</router-link></a></li>
          <li><a class="dropdown-item"><router-link to="/" class="btn nav-icon4">Logout</router-link></a></li>
        </ul>
        <!-- <router-link to="/" class="btn nav-icon4"><i class="bi bi-gear"></i></router-link>  -->
      </div>

    </div>
    </div>
  </nav>
  </template>

  <script scoped>
  export default {

  }
  </script>

  <style scoped>
 .container-fluid{
  height: 40px;
 }
  .Logonavbar{
    position: absolute;
    width: 40px;
    height: 50px;
    left: 40px;
    top: 3px;
  }
  .nav-icon1{
    width: 40px;
    height: 30px;
    padding-right: 10px;
  }
  .nav-icon2{
    width: 50px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .nav-icon3{
    width: 50px;
    height: 30px;
    margin-right: 0px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .nav-icon4{
    width: 50px;
    height: 30px;
    margin-right: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  </style>