<template>
  <!-- <Tutorial /> -->
<div>
    <header id="header" class="home-parallax home-fade dark-bg header-inner">
    <div class="color-overlay"></div>
    <div class="container">
        <h1>{{ $t("about.title") }}</h1>
        <!-- <span>Notre offre de produits alternatifs aux produits chimiques  </span> -->
        <div class="breadcrumb">
            <!-- <a href="#">Home</a> <i class="fa fa-angle-double-right"></i> <a href="#">Produits et Services</a> -->
            <NuxtLink to="/"> {{ $t("menus.home") }}</NuxtLink> 
            <i class="fa fa-angle-double-right"></i>
             <NuxtLink to="/about"> {{ $t("menus.about") }}</NuxtLink>
        </div>
    </div>
</header>
<section id="about-us" class="section why-choose-us">
     <div class="container">

        <div class="section-content">
          <div class="row">
            <div class="blog-post">
              <!-- about-center -->
              <figure class="about-content1 center text-center graphic-logo">
               
                <img
                 
                  :style="graphStyle"
                  :src="graphic"
                  alt=""
                />                
              </figure>
            </div>
            <!-- col-sm-4 -->
          </div>
          <!-- row -->
          <br />
          <div class="row">
            <div class="col-sm-12 lborder">
              <div class="service">
                <div class="about-service">
                  <!-- <h4 class="text-center">Satisfaction client  </h4> -->
                  <p class="justified">
                    {{ $t("about.intro") }}
                  </p>
                </div>
              </div>
            </div>
            <!-- col-sm-4 -->
          </div>
        </div>         



        <!-- <div class="section-content ">
            <header class="section-heading">
                <h3> {{ $t("about.vision.title") }}</h3>
                 
            </header> 
            <div class="row">
                  
                <div class="col-sm-12 lborder">

                    <div class="service">
                        
                        <div class="about-service">
                             
                            <p class="justified">
                                {{ $t("about.vision.text") }}
                            </p>
                        </div>
                    </div>


                </div>                           

            </div>             

        </div> -->


    </div><!-- container -->
</section>    
  </div>
</template>

<script>
export default {
  name: 'IndexFrPage',
    data: () => {
    return {
      screenZise: $(document).width(),
      graphic: '',
      graphStyle: 'width: 65%; height: 100%',
      strategyGrpah: 'width: 100%;', 
    }
  },
  computed:{
      alt(){
          return {
            //   ivory: $t("home.presence.fr.ivory"),
            //   senegal: $t("home.presence.fr.senegal"),
            //   cameroon: $t("home.presence.fr.cameroun"),
            //   cameroon: $t("home.presence.en.cameroun"),
            //   ghana: $t("home.presence.en.ghana"),
            //   nigeria: $t("home.presence.en.nigeria"),
          }
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


    })

	     
  },
  methods: {
    handler(){},
    setMobileView() {
      // $("#mob").removeClass("hide")
      // $("#desk").addClass("hide")
      this.graphic = '/assets/images/ns/nextstop_plan3.jpg'
      this.graphStyle = 'width: 100%; height: 100%'
      this.strategyGrpah = 'width: 100%;'
    },
    setDeskView() {
      // $("#mob").addClass("hide")
      // $("#desk").removeClass("hide")
      this.graphic = '/assets/images/ns/nextstop_plan.jpg'
      this.graphStyle = 'width: 65%; height: 100%'
      this.strategyGrpah = 'width: 50%;'
    },
    initView() {
      if (this.screenZise >= 767) {
        this.setDeskView()
      } else {
        this.setMobileView()
      }
    },
  }
}
</script>
