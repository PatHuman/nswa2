<template>
  
 <div>
   <header id="header" class="home-parallax home-fade dark-bg header-inner">
    <div class="color-overlay"></div>
    <div class="container">
        <h1>{{ $t("service.title") }}</h1>
        <!-- <span>Notre offre de produits alternatifs aux produits chimiques  </span> -->
        <div class="breadcrumb">
            <!-- <a href="#">Home</a> <i class="fa fa-angle-double-right"></i> <a href="#">Produits et Services</a> -->
             <NuxtLink to="/"> {{ $t("menus.home") }}</NuxtLink> 
            <i class="fa fa-angle-double-right"></i>
             <NuxtLink to="/service"> {{ $t("menus.service") }}</NuxtLink>
            
        </div>
    </div>
</header>
 
 
<section id="services1" class="section services">
    <div class="container">
        <header class="section-heading">
            
            <span>{{ $t("home.service.subtitle") }}  </span>
        </header>
         <div class="section-content">
           
            <div class="row">
                <div class="col-sm-12 lborder">

                    <div class="service">
                        
                        <div class="about-service">
                           
                            <p class="justified">
                               {{ $t("home.service.intro") }}
                            </p>
                        </div>
                    </div>


                </div>
                 
            </div>
            <div class="row">
                <div class="col-sm-4">

                    
                    <div class="service">
                        <div class="about-service">
                            <header>
                                <h4 class="box-header">{{ $t("home.service.pheromone.title") }}</h4>
                                <div class="blog-element">
                                    <img class="img-responsive" src="/assets/images/ns/trap2-s.jpg" alt="">
                                </div>
                            </header>  
                            
                            <p class="justified">
                                {{ $t("home.service.pheromone.text") }}
                            </p>
                        </div>
                    </div>

                </div> 

                <div class="col-sm-4">

                    
                    <div class="service">
                         
                        <div class="about-service">
                            <header>
                                <h4 class="text-center"> {{ $t("home.service.biologic.title") }} </h4> 
                                <div class="blog-element">
                                    <img class="img-responsive" src="/assets/images/ns/nature-bio.jpg" alt="">
                                </div>
                            </header>                              
                            <p class="justified">
                                {{ $t("home.service.biologic.text") }}
                            </p>
                        </div>
                    </div>

                </div> 

                <div class="col-sm-4">

                     
                    <div class="service">
                         
                        <div class="about-service">
                            <header>
                                <h4 class="date">{{ $t("home.service.mechanic.title") }}</h4>
                                <div class="blog-element">
                                    <img class="img-responsive" src="/assets/images/ns/mouches-trap.jpg" alt="">
                                </div>
                            </header>  
                            
                            <p class="justified">
                                {{ $t("home.service.mechanic.text") }}
                            </p>
                        </div>
                    </div>

                </div> 
            </div> 

            <div class="row secondrow">
                <div class="col-sm-4">

                     
                    <div class="service">
                        
                        <div class="about-service">
                            <header>
                                
                                <h4 class="text-center"> {{ $t("home.service.chemical.title") }}</h4>
                                <div class="blog-element">
                                    <img class="img-responsive" src="/assets/images/ns/phytosanitaire.jpg" alt="">
                                </div>
                            </header> 
                            <p class="justified">
                             {{ $t("home.service.chemical.text") }}   
                            </p>
                        </div>
                    </div>

                </div> 

                <div class="col-sm-4">

                    <div class="service">
                        
                        <div class="about-service">
                            <header>
                                 
                                <h4 class="text-center">{{ $t("home.service.digital.title") }}  </h4>
                                <div class="blog-element">
                                    <img class="img-responsive" src="/assets/images/ns/drone.jpg" alt="">
                                </div>
                            </header>                             
                            <p class="justified">
                                
                              {{ $t("home.service.digital.text") }}                            
                            </p>
                        </div>
                    </div>
                     

                </div> 
 
            </div> 

           
        </div> 
    </div> 
</section>
 </div>

   
</template>

<script>
export default {
  name: 'Services'
}
</script>
