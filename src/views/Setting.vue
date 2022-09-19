<template>
    <div class="container">
        <main class="justify-content-center">
            <form>
                <h3 style="margin-top:60px;">การตั้งค่า</h3>
                <div class="row">
                    <!-- <div style="margin-top:10px;" class="button">
                        <button style="font-size: 20px!important;  margin-top:25px;"
                        class="w-40 btn btn-outline-dark  col-3">
                        <img src="/img/notification.png" width="40" height="40" style="margin-right:30px;">
                        <span style="margin-right:30px;">การแจ้งเตือน</span>
                        </button>
                    </div>
                            
                    <div>
                        <button style="font-size: 20px!important; margin-top:25px;"
                        class="w-40 btn btn-outline-dark col-md-3">
                        <img src="/img/lock.png" width="40" height="40" style="margin-right:50px;">
                        <span style="margin-right:50px;">รหัสผ่าน</span>
                        </button>
                    </div> -->

                    <div>
                        <button style="font-size: 20px!important;  margin-top:25px;" 
                        class= "col-md-3  w-40 btn btn-outline-dark group dropend dropdown-toggle" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/img/language.png" width="40" height="40" style="margin-right:60px;">
                        <span style="margin-right:60px;">ภาษา</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">ภาษาไทย</a></li>
                            <li><a class="dropdown-item" href="#">ภาษอังกฤษ</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <button  style="font-size: 20px!important;  margin-top:25px;"
                        class="w-40 btn btn-outline-dark col-md-3">
                        <img src="/img/logout.png" width="40" height="40" style="margin-right:25px;">
                        <span style="margin-right:25px;">ออกจากระบบ</span>
                        </button>
                    </div>
                </div>  
                </form>
        </main>
    </div> 
</template>