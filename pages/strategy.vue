<!-- Please remove this file from your project -->
<template>
<div>

    <header id="header" class="home-parallax home-fade dark-bg header-inner">
    <div class="color-overlay"></div>
    <div class="container">
        <h1>{{ $t("objectif.title") }}</h1>
        <!-- <span>Notre offre de produits alternatifs aux produits chimiques  </span> -->
        <div class="breadcrumb">
            <!-- <a href="#">Home</a> <i class="fa fa-angle-double-right"></i> <a href="#">Produits et Services</a> -->
            <NuxtLink to="/"> {{ $t("menus.home") }}</NuxtLink> 
            <i class="fa fa-angle-double-right"></i>
             <NuxtLink to="/strategy"> {{ $t("menus.objectif") }}</NuxtLink>
        </div>
    </div>
</header>
 
<section id="vector" class="section blog">
    <div class="container">

        <!---->
        <header class="section-heading">
            <h4>{{ $t("objectif.section.domain.vector.title") }}</h4>
            <!-- <span>Vector control  </span> -->
        </header><!-- section-heading -->
        <!---->

        <div class="section-content">
            <div class="row">
                <div class="col-md-12">

                    <p class="justified">
                      {{ $t("objectif.section.domain.vector.intro") }}
                    </p>              
                </div>
                
            </div><!-- row -->
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="blog-post1">
                        <header>
                            <h6 class="date"> {{ $t("objectif.section.domain.vector.moskito.title") }}</h6>
                            <div class="blog-element">
                                <img style="width:100%" class="img-responsive" src="assets/images/ns/mosquito2.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content">
                            
                            <p class="justified" >
                              {{ $t("objectif.section.domain.vector.moskito.text") }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="blog-post1">
                        <header>
                            <h6 class="date">{{ $t("objectif.section.domain.vector.flies.title") }} </h6>
                            <div class="blog-element">
                                <img style="width:100%" class="img-responsive" src="assets/images/ns/flies.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content">
                            
                            <p class="justified">
                              {{ $t("objectif.section.domain.vector.flies.text") }}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>             
        </div><!-- section-content -->
    </div><!-- container -->
</section>
<!-- /About Us -->

<!-- Engagement -->
<section id="pest-mgmt" class="section about-us">
    <div class="container">

        <!---->
        <header class="section-heading">
            <h4>{{ $t("objectif.section.domain.pest.title") }} </h4>
            <!-- <span>Professional Pest Management  </span> -->
        </header><!-- section-heading -->
        <!---->

        <div class="section-content">
            <div class="row">
                

                <div class="col-sm-6 why-explain-wrap">

                    <header>
                        <!-- <h6 class="date">Les moustiques et leur nocivite</h6> -->
                        <div class="blog-element">
                            <img style="width:100%" class="img-responsive" src="assets/images/ns/desinfection.jpg" alt="">
                        </div>
                    </header>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-6 why-explain-wrap">

                    <header>
                        <!-- <h6 class="date">Les moustiques et leur nocivite</h6> -->
                        <div class="blog-element">
                            <img style="width:100%" class="img-responsive" src="assets/images/ns/disinfection-1.jpg" alt="">
                        </div>
                    </header>

                </div><!-- col-md-4 col-sm-6 -->

            </div><!-- row -->
            <div class="row">
                <div class="col-sm-12 lborder">

                    <div class="service">
                        
                        <div class="about-service">
                            <!-- <h4 class="text-center">Satisfaction client  </h4> -->
                            <p class="justified">
                                {{ $t("objectif.section.domain.pest.intro") }}
                            </p>
                        </div>
                    </div>


                </div><!-- col-sm-4 -->                
                 
            </div><!-- row -->
        </div><!-- section-content -->
    </div><!-- container -->
</section>
<!-- /Engagement -->

<section id="green-space" class="section about-us">
    <div class="container">

        <!---->
        <header class="section-heading">
            <h4>{{ $t("objectif.section.domain.environment.title") }} </h4>
            <!-- <span>	Gestion de l’environnement et protection des espaces verts   </span> -->
        </header><!-- section-heading -->
        <!---->

        <div class="section-content">
            <div class="row">
                

                <div class="col-sm-6 why-explain-wrap">

                    <header>
                        <!-- <h6 class="date">Les moustiques et leur nocivite</h6> -->
                        <div class="blog-element">
                            <img style="width:100%" class="img-responsive" src="assets/images/ns/train2b.jpg" alt="">
                        </div>
                    </header>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-6 why-explain-wrap">

                    <header>
                        <!-- <h6 class="date">Les moustiques et leur nocivite</h6> -->
                        <div class="blog-element">
                            <img style="width:100%" class="img-responsive" src="assets/images/ns/autoroute2.jpg" alt="">
                        </div>
                    </header>

                </div><!-- col-md-4 col-sm-6 -->

            </div><!-- row -->            
            <div class="row">
                <div class="col-sm-12 lborder">

                    <div class="service">
                        
                        <div class="about-service">
                            <!-- <h4 class="text-center">Satisfaction client  </h4> -->
                            <p class="justified">
                                
                                {{ $t("objectif.section.domain.environment.text") }}
                            </p>
                        </div>
                    </div>


                </div><!-- col-sm-4 -->                
                 
            </div><!-- row -->
        </div><!-- section-content -->
    </div><!-- container -->
</section>

 
  
 </div>
</template>

<script>
export default {
  name: 'strategy' 
}
</script>
