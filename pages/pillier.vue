<!-- Please remove this file from your project -->
<template>
<div>
    <header id="header" class="home-parallax home-fade dark-bg header-inner">
    <div class="color-overlay"></div>
    <div class="container">
        <h1>{{ $t("pillar.title") }}</h1>
        <!-- <span>Notre offre de produits alternatifs aux produits chimiques  </span> -->
        <div class="breadcrumb">
            <!-- <a href="#">Home</a> <i class="fa fa-angle-double-right"></i> <a href="#">Produits et Services</a> -->
            <NuxtLink to="/"> {{ $t("menus.home") }}</NuxtLink> 
            <i class="fa fa-angle-double-right"></i>
             <NuxtLink to="/service"> {{ $t("menus.pillar") }}</NuxtLink>
        </div>
    </div>
</header>


<section id="valeurs" class="section why-choose-us">
    <div class="container">
         

        <div class="section-content">
            <div class="row">
                

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.solution.title") }}</h4>
                    <div class="why-explain top top-2 text-center">
                        <p class="read-text1 justified">
                            {{ $t("home.pillar.solution.text") }}
                        </p>
                        <!-- <a href="#" class="btn btn-default readmore bottom">READ MORE</a> -->
                        <!-- <div class="text-center"> </div> -->
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.distrib.title") }} </h4>
                    <div class="why-explain top top-3 text-center">
                        <p class="read-text1 justified">
                            {{ $t("home.pillar.distrib.text") }}
                        </p>
                        <!-- <a href="#" class="btn btn-default readmore bottom">READ MORE</a> -->
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.conseil.title") }} </h4>
                    <div class="why-explain top top-3 text-center">
                        <p class="read-text1 justified">
                          {{ $t("home.pillar.conseil.text") }}
                        </p>
                        <!-- <a href="#" class="btn btn-default readmore bottom">READ MORE</a> -->
                    </div>

                </div><!-- col-md-4 col-sm-6 -->                

            </div><!-- row -->

            <div class="row">
                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.formation.title") }} </h4>
                    <div class="why-explain top top-1 text-center">
                        <p class="read-text1 justified">
                           {{ $t("home.pillar.formation.text") }}
                        </p>
                        <!-- <a href="#" class="btn btn-default readmore bottom">READ MORE</a> -->
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.partner.title") }}</h4>
                    <div class="why-explain top top-2 text-center">
                        <p class="read-tex1 justified">
                           {{ $t("home.pillar.partner.text") }}
                        </p>
                        <!-- <a href="#" class="btn btn-default readmore bottom">READ MORE</a> -->
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.advocacy.title") }} </h4>
                    <div class="why-explain top top-2 text-center">
                        <p class="read-text1 justified">
                          {{ $t("home.pillar.advocacy.text") }}
                        </p>
                        <!-- <a href="#" class="btn btn-default readmore bottom">READ MORE</a> -->
                    </div>

                </div><!-- col-md-4 col-sm-6 -->                

                

            </div><!-- row -->        
 


     

        </div><!-- section-content -->
    </div><!-- container -->
</section>

 </div>
</template>

<script>
export default {
  name: 'pilliers' 
}
</script>
