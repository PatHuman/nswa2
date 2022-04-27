<!-- Please remove this file from your project -->
<template>
  <div>
    <header id="header" class="home-parallax home-fade dark-bg header-inner">
    <div class="color-overlay"></div>
    <div class="container">
        <h1>{{ $t("vision.title") }}</h1>
        <!-- <span>Notre offre de produits alternatifs aux produits chimiques  </span> -->
        <div class="breadcrumb">
            <!-- <a href="#">Home</a> <i class="fa fa-angle-double-right"></i> <a href="#">Produits et Services</a> -->
            <NuxtLink to="/"> {{ $t("menus.home") }}</NuxtLink> 
            <i class="fa fa-angle-double-right"></i>
             <NuxtLink to="/service"> {{ $t("menus.vision") }}</NuxtLink>
        </div>
    </div>
</header>
<section id="about-us" class="section why-choose-us">
    <div class="container">

        <div class="section-content">
          <header class="section-heading">
            <h3> {{ $t("vision.mission.title") }}</h3>
            <!-- <span>Tous savoir sur notre entreprise  </span> -->
          </header>
          <!-- section-heading -->
          <div class="row">
            <div class="col-sm-12 lborder">
              <div class="service">
                <div class="about-service">
                  <!-- <h4 class="text-center">Satisfaction client  </h4> -->
                  <p class="justified">
                   {{ $t("vision.mission.text") }}
                  </p>
                </div>
              </div>
            </div>
            <!-- col-sm-4 -->
          </div>
        </div>      

        <div class="section-content ">
            <header class="section-heading">
                <h3> {{ $t("vision.vision.title") }}</h3>
                <!-- <span>Tous savoir sur notre entreprise  </span> -->
            </header><!-- section-heading -->
            <div class="row">
                  
                <div class="col-sm-12 lborder">

                    <div class="service">
                        
                        <div class="about-service ">
                            <!-- <h4 class="text-center">Satisfaction client  </h4> -->
                            <p class="justified">
                               {{ $t("vision.vision.text") }}
                            </p>
                        </div>
                    </div>


                </div><!-- col-sm-4 -->                                 

            </div>            

        </div>



        <div class="section-content ">
            <header class="section-heading">
                <h3> {{ $t("vision.values.title") }}</h3>
                <!-- <span>O.I.C.E. </span> -->
            </header><!-- section-heading -->
            <div class="row">
                

                <div class="col-sm-6 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="lside text-left" >{{ $t("vision.values.list.client") }}</h4>
                    <div class="why-explain top top-2">
                        <p>
                           
                        </p>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-6 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="rside text-right ">{{ $t("vision.values.list.integrity") }} </h4>
                    <div class="why-explain top top-3">
                        <p>
                           
                        </p>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

            </div><!-- row -->

            <div class="row">
                <div class="col-sm-6 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="lside text-left">{{ $t("vision.values.list.conform") }} </h4>
                    <div class="why-explain top top-1">
                        <p>
                          
                        </p>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-6 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="rside text-right">{{ $t("vision.values.list.efficient") }}</h4>
                    <div class="why-explain top top-2">
                        <p>
                           
                        </p>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                

            </div><!-- row -->
        </div>
    </div><!-- container -->
</section>    
  </div>
</template>

<script>
export default {
  name: 'vision',
  data: () => {
    return {
      screenZise: $(document).width(),
      graphic: '',
      graphStyle: 'width: 65%; height: 100%',
    }
  },
  mounted() {
    this.initView()
    var lang = localStorage.getItem('lang')

    if (lang === '' || lang === undefined) {
      lang = navigator.language || navigator.userLanguage
      localStorage.setItem('lang', lang.split('-')[0])
    }
    $(window).on('resize', function (data) {
      if (this.screenZise >= 767) {
        this.setDeskView()
      } else {
        this.setMobileView()
      }

      // console.log($( document ).width())
    })
  }, 
  methods: {
    setMobileView() {
      $(".rside").removeClass("pr-xs text-right")
      $(".lside").removeClass("text-left") 
    },
    setDeskView() {
      $(".rside").addClass("pr-xs text-right")
      $(".lside").addClass("text-left") 
    },
    initView() {
      if (this.screenZise >= 767) {
        this.setDeskView()
      } else {
        this.setMobileView()
      }
    },
  },   
}
</script>
