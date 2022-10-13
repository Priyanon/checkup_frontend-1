<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">
        <img src="/img/Logonavbar.png" class="Logonavbar">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link"><img src="/img/Home.png" class="nav-icon1">
                <span class="Home-icon">Home</span>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img src="/img/User.png" class="nav-icon2"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img src="/img/Alert.png" class="nav-icon3"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " ><img src="/img/Setting.png" class="nav-icon4"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
    .Logonavbar{
      width: 40px;
      height: 50px;
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
    .Home-icon{
        background-color: blueviolet;
    }    
@media (min-width: 576px) { 
    .Home-icon{
        background-color: crimson;
        /* display: none; */
    }
 }


@media (min-width: 768px) { 
    .Home-icon{
        background-color: blue;
    }
    
 }


@media (min-width: 992px) {  }

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  }

/* // XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {  }
</style>