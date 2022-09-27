<template>
  <nav class="navbar navbar-light bg-white" >
    <div class="container-fluid">
      <div>
        <a class="navbar-brand">
          <img src="/img/Logonavbar.png" class="Logonavbar">
        </a>
      </div>
      <div class="d-flex">
        <router-link to="/Main_admin"><img src="/img/Home.png" class="nav-icon1"  type="button"></router-link>
        <router-link to="/User"><img src="/img/User.png" class="nav-icon2" ></router-link>
        <router-link to="/Alert"><img src="/img/Alert.png" class="nav-icon3" ></router-link>
        <router-link to="/Setting"><img src="/img/Setting.png" class="nav-icon4"></router-link>
      </div>
    </div>
  </nav>
  </template>
  
  <script scoped>
  export default {
  
  }
  </script>
  
  <style>
  .Logonavbar{
    position: absolute;
    width: 40px;
    height: 70px;
    left: 40px;
    top: 3px;
  }
  .nav-icon1{
    width: 40px;
    height: 30px;
    padding-right: 10px;
    margin-top: 10px;
  }
  .nav-icon2{
    width: 50px;
    height: 30px;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .nav-icon3{
    width: 50px;
    height: 30px;
    margin-right: 0px;
    padding-right: 10px;
    margin-top: 10px;
    padding-left: 10px;
  }
  .nav-icon4{
    width: 50px;
    height: 30px;
    margin-top: 10px;
    margin-right: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  </style>