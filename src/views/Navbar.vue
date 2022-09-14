<template>
  <nav class="navbar navbar-light bg-white" >
    <div class="container-fluid">
      <div>
        <a class="navbar-brand" href="#">
          <img src="/img/Logonavbar.png" alt=""   class="Logonavbar">
        </a>
      </div>
      <div class="d-flex">
        <img src="/img/Home.png" class="nav-icon1" href="/Mainadmin" type="button">
        <img src="/img/User.png" class="nav-icon2" href="#">
        <img src="/img/Alert.png" class="nav-icon3" href="#">
        <img src="/img/Setting.png" class="nav-icon4" href="#">
      </div>
    </div>
  </nav>
  </template>
  
  <script>
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