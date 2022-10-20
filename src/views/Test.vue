<template>
<div>
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
            <a class="nav-link">
              <router-link to="/Main_admin">
                <img src="/img/Home.png" class="nav-icon1"  type="button">
              </router-link>
              <span class="Home-icon">Home</span>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/User">
              <img src="/img/User.png" class="nav-icon2" >
            </router-link>
            <span class="Home-icon">Personal information</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/Alert">
              <img src="/img/Alert.png" class="nav-icon3" >
            </router-link>
            <span class="Home-icon">Notify</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <router-link to="/Setting">
              <img src="/img/Setting.png" class="nav-icon4">
            </router-link>
            <span class="Home-icon">Setting</span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li>
              <a class="dropdown-item" href="#">
                <router-link to="/">
                  <span>ออกจากระบบ</span>
                </router-link>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="M">
  <div class="my-border">
    <div class="row">
      <div class="col-sm-4 col-6">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      
      <div class="col-sm-4 col-6">
        <label for="exampleInputEmail1" class="form-label">Password</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>

      <div class="col-sm-4">
        <label for="exampleInputEmail1" class="form-label">Full Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
    </div>
  </div>
</div>
</div>
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
        /* background-color: blueviolet; */
    }   
    
    .my-border{
      border: solid green 3px;
      border-radius: 12px;
      background-color: gray;
      padding: 40px;
      margin: 30px;
      /* margin-left: auto;
      margin-right: auto; */
      max-width: 600px;
    }

    .M{
      display: flex;
      justify-content: center;
      align-items: center;
      /* height: 100vh; */
    }
@media (min-width: 576px) { 
  .Home-icon{
      display: none;
    }  }

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
  .Home-icon{
      display: none;
    } 
 }

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .Home-icon{
      display: none;
    }  }
/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  .Home-icon{
      display: none;
    } 
 }

/* // XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {  }
</style>