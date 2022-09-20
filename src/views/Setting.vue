<template>
    <div class="container">
        <main class="justify-content-center">
            <form>
                <h3 style="margin-top:60px; font-family:kanit">การตั้งค่า</h3>
                <div class="row">


                    <div class="s1">
                        <button 
                        style="font-size: 20px!important;
                        margin-top:25px;" 
                        class= "col-md-3  w-40 btn btn-outline-dark group dropend dropdown-toggle" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false">

                        <img src="/img/language.png" 
                        width="40" 
                        height="40" 
                        style="margin-right:60px;">
                        <span style="margin-right:60px;">ภาษา</span>
                        </button>

                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">ภาษาไทย</a></li>
                            <li><a class="dropdown-item" href="#">ภาษอังกฤษ</a></li>
                        </ul>
                    </div>

                    <div class="s2">
                        <button
                        style="font-size: 20px!important;
                        margin-top:25px;"
                        class="w-40 btn btn-outline-dark col-md-3">
                        <img src="/img/logout.png" 
                        width="40" 
                        height="40" 
                        style="margin-right:25px;">
                        <span style="margin-right:25px;">ออกจากระบบ</span>
                        </button>
                    </div>
                </div>
                </form>
        </main>
    </div> 
</template>

<style>
    .s1 {
     font-family:kanit;
    }
    .s2 {
     font-family:kanit;
    }
</style>