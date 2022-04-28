<template>
 
 <div> 

<div class="page-loader">
    <div class="loader">Loading...</div>
</div>
<!-- Header -->
 <Header/>
<!-- /Header -->

 
<Nuxt />

<!-- footer -->
<footer id="footer" class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-4">
                <!-- <p class="copyright text-xs-center">&copy; 2021 Next Stop West Africa</p> -->
                <img width="120" class="img-responsive center-block" src="assets/images/ns/NSWAG_WHITE.png" alt="">
               
            </div>

            <div class="col-md-5 col-sm-4">
                <!-- <ul class="footer-social-block">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>

                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>

                    <li><a href="#"><i class="fa fa-behance"></i></a></li>

                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>

                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>

                </ul> -->
            </div>

            <div class="col-md-4 col-sm-4">
                <div class="footer-menu text-xs-center">
                    <p class="copyright text-xs-center">&copy; {{date.getFullYear()}} {{ $t("home.copyright.text") }}</p>
                    <!-- <a href="#">Privacy Policy</a> | <a href="">Terms &amp; Conditions</a> -->
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- #footer -->
 </div>

</template>


<script>

// import Header from '../components/Header.vue'
export default {
  name: 'default',
  data: ()=>{
      return {
          date: new Date()
      }
  },
  mounted() {
    //   console.log(this.date, this.date.getYear())
  },
}
</script>
