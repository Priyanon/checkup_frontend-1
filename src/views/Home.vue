<template>
  <div class="smart-forms smart-container wrap-0">
    <form method="post" action="/" id="account2">
      <div class="form-body  theme-blue">
        <div class="frm-row">
          <div class="colm colm4">
            <div class="section theme-yellow">
              <div class="price-box1">
                <div class="ribbon-large">
                  <img src="/img/User.png" class="User" href="#">
                </div>

                <h5> พนักงาน </h5>
                <div class="spacer spacer-t20 spacer-b20"></div>
                <a class="btn btn-warning" href=""
                  role="button">Employee</a>
              </div>
            </div>
          </div>

          <div class="colm colm4">
            <div class="section theme-green ">
              <div class="price-box2">
                <div class="ribbon-large">
                  <img src="/img/id-card.png" class="id-card" href="#">
                </div>
                <h5>เจ้าหน้าที่ </h5>
                <div class="spacer spacer-t20 spacer-b20"></div>
                <router-link to="/login" class="btn btn-info">Admin</router-link>
                  
              </div>
            </div>
          </div>

          <div class="colm colm4">
            <div class="section theme-purple">
              <div class="price-box3 ">
                <div class="ribbon-large">
                  <img src="/img/chart.png" class="chart" href="#">
                </div>
                <h5>ผู้บริหาร</h5>
                <a class="btn btn-warning " id="button3"
                   role="button">Executives</a>
                <div class="spacer spacer-t20 spacer-b20"></div>
              </div>
            </div>
          </div>

          <div class="colm colm4">
            <div class="section theme-blue">
              <div class="price-box4 ">
                <div class="ribbon-large">
                  <img src="/img/face-id.png" class="face-id" href="#">
                </div>

                <h4></h4>
                <h5> จดจำใบหน้า </h5>
                <div class="spacer spacer-t20 spacer-b20"></div>
                <a class="btn btn-warning" 
                  role="button">Face ID</a>
              </div>
            </div>

          </div>
        </div><!-- end frm-row section -->

      </div><!-- end .form-body section -->
      <div class="form-footer align-right">
      </div>
      <!---<button type="submit" class="button btn-primary">Place Order </button>
                  <button type="reset" class="button">Cancel Order </button>--->
    </form>
  </div>
</template>

<script>
</script>
<style>
.User {
  width: 50px;
  height: 50px;
}

.id-card {
  width: 60px;
  height: 60px;
}

.chart {
  width: 50px;
  height: 50px;

}

.face-id {
  width: 60px !important;
  height: 60px !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.button1 {
  color: #FF9F2F
}

.btn2 {
  color: #1CBE66
}

.button3 {
  color: #A41BBA
}

.button4 {
  color: #07ACF6
}
</style>