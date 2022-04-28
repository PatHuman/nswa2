<template>
    <div>
    <header
      id="header"
      class="header-wrapper home-parallax home-fade dark-bg bg-06"
    >
      <div class="color-overlay"></div>
      <div class="header-wrapper-inner">
        <div class="container">
          <div class="intro">
            <!-- <h1>NEXT STOP    <span class="rotate"> west,est,south</span> AFRICA</h1> -->

            <!-- <h1>Hygiène Publique </h1> -->
            <h1>{{ $t("home.bigTitle.title") }}</h1>
            <p>{{ $t("home.bigTitle.subtitle") }}</p>
            <NuxtLink class="btn btn-default-o onPageNav" to="/services">{{ $t("home.bigTitle.link") }}</NuxtLink>
            <!-- <a href="services" class="btn btn-default-o onPageNav" >Nos Services</a> -->
            <!-- <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span> -->
          </div>
          <!-- /.intro -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.header-wrapper-inner -->
    </header>

    <section id="about-us" class="section why-choose-us">
      <div class="container">
        <!---->
        <header class="section-heading">
          <h2>{{ $t("home.about.title") }}</h2>
          <!-- <span>Tous savoir sur notre entreprise  </span> -->
        </header>
        <!-- section-heading -->
        <!---->

        <div class="section-content">
          <div class="row">
            <div class="blog-post">
              <!-- about-center -->
              <figure class="about-content1 center text-center graphic-logo">
                <!-- <img class="img-responsive center-block" src="https://media.istockphoto.com/photos/fumigator-sanitizing-cleaning-and-disinfection-coronavirus-pandemic-picture-id1308788817?s=612x612" alt=""> -->
                <!-- <img class="img-responsive center-block" src="https://media.istockphoto.com/photos/fumigator-sanitizing-cleaning-and-disinfection-coronavirus-pandemic-picture-id1308788817?s=612x612" alt=""> -->
                <!-- <img class="img-responsive center-block" src="https://media.istockphoto.com/vectors/pest-control-design-insect-vector-design-bug-illustration-vector-id1139930309?s=612x612" alt=""> -->
                <!-- <img class="img-responsive center-block" src="/assets/images/ns/NSWAG_WHITE.png" alt=""> -->
                <!-- <img
                  id="mob"
                  class="hide"
                  style="width: 100%; height: 100%"
                  width="100%"
                  src="~/static//assets/images/ns/nextstop_plan3.jpg"
                  alt=""
                />
                <img
                  id="desk"
                  class="hide"
                  style="width: 65%; height: 100%"
                  src="~/static//assets/images/ns/nextstop_plan.jpg"
                  alt=""
                /> -->
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
                    {{ $t("home.about.intro") }}
                  </p>
                </div>
              </div>
            </div>
            <!-- col-sm-4 -->
          </div>
        </div>
        <!-- section-content -->



        <!-- <div class="section-content">
          <header class="section-heading">
            <h3>Vision</h3>
            <span>   </span>
          </header>
           
          <div class="row">
            <div class="col-sm-12 lborder">
              <div class="service">
                <div class="about-service">
                  
                  <p class="justified">
                    Mettre à la disposition des consommateurs une gamme de
                    solutions (produits & services) innovante répondant aux
                    exigences internationales climatiques et environnementales
                    garantissant les standards internationaux de protections des
                    biens, des personnes et de leurs consommations.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div class="section-content">
          <header class="section-heading">
            <h3>Valeurs</h3>
            <span>  </span>
          </header>
          
          <div class="row">
            <div class="col-sm-6 why-explain-wrap">
              
              <h4>Orientation Client</h4>
              <div class="why-explain top top-2">
                <p></p>
              </div>
            </div>
             

            <div class="col-sm-6 why-explain-wrap">
              
              <h4>Integrité</h4>
              <div class="why-explain top top-3">
                <p></p>
              </div>
            </div>
             
          </div>
          

          <div class="row">
            <div class="col-sm-6 why-explain-wrap">
               
              <h4>conformité</h4>
              <div class="why-explain top top-1">
                <p></p>
              </div>
            </div>
             

            <div class="col-sm-6 why-explain-wrap">
               
              <h4>Efficacité</h4>
              <div class="why-explain top top-2">
                <p></p>
              </div>
            </div>
             
          </div>
           
        </div> -->
      </div>
       
    </section>





<section id="services" class="section dark-bg funfacts">
    <div class="color-overlay"></div>
    <div class="container">
        <header class="section-heading">
            <h2>{{ $t("home.service.title") }}</h2>
            <span>{{ $t("home.service.subtitle") }}  </span>
        </header>
        <div class="container">

         <!-- <div class="section-content" style="height:100px">
            <div class="row">
                <div class="col-sm-12 lborder">

                    <div class="service">
                        
                        <div class="about-service">
                           
                             
                        </div>
                    </div>


                </div>
                 
            </div>
          </div> -->
        </div>
        
       
    </div> 
</section> 
<section id="services1" class="section services">
    <div class="container">

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
<!-- Service -->



<section id="strategy" class="section dark-bg testimonial bg-image">
    <div class="color-overlay"></div>
    <div class="container">
        <header class="section-heading">
            <h2>{{ $t("home.objectif.title") }}</h2>
            <!-- <span>Une entreprise de confiance</span> -->
            <span> </span>
        </header>

        
        </div><!-- section-content -->
     
</section>

<section id="valeurs" class="section blog">
    <div class="container">
        <!-- <header class="section-heading">
            <h2>NOS OBJECTIFS & STRATEGIE</h2>
           
            <span> </span>
        </header> -->

        <div class="section-content">

            <div class="row">
                <div class="col-sm-12 lborder">

                    <div class="service">
                        
                        <div class="about-service">
                  
                            <p class="justified">
                                {{ $t("home.objectif.intro") }}
                               </p> 
                        </div>
                    </div>


                </div><!-- col-sm-4 -->                    
    
             </div><!-- row -->    

             <div class="row"> 
                           <div class="blog-post">
              <!-- about-center -->
              <figure class="about-content1 center text-center graphic-logo">
                 
                <img
                 :style="strategyGrpah"
                  src="/assets/images/ns/objectifs.jpeg"
                  alt=""
                /> 
                <!-- <img
                 
                  :style="graphStyle"
                  :src="graphic"
                  alt=""
                />                 -->
              </figure>
            </div>
            </div>  
         

        </div><!-- section-content -->
    </div><!-- container -->
</section>





<!-- Pricing -->
<section id="pricing" class="section pricing">
    <div class="container">

        <!---->
        <header class="section-heading">
            <h4> {{ $t("home.objectif.section.domain.title") }}</h4>
            <!-- <span>Nos domaines d’activites strategiques</span> -->
        </header>
        <!---->

        <div class="section-content">
 
             <div class="row">
                 <div class="col-md-4 col-sm-6">
                     <div class="price-box featured">
                         <h4> {{ $t("home.objectif.section.domain.vector.title") }}</h4>
                         <div class="justified">
                             {{ $t("home.objectif.section.domain.vector.intro") }}
                         </div>
 
                         <!-- <a href="strategy#vector" class="btn btn-default">READ MORE</a> -->
                          <NuxtLink class="btn btn-default" to="/strategy#vector">READ MORE </NuxtLink>
                     </div>
                 </div>
 
                 <div class="col-md-4 col-sm-6">
                     <div class="price-box featured">
                         <h4>  {{ $t("home.objectif.section.domain.pest.title") }}</h4>
                         <div class="price-info1 justified">
                            {{ $t("home.objectif.section.domain.pest.text") }}
                         </div>
 
                         <!-- <a href="strategy.html#pest-mgmt" class="btn btn-default">READ MORE</a> -->
                          <NuxtLink class="btn btn-default" to="/strategy#pest-mgmt">READ MORE </NuxtLink>
                     </div>
                 </div>
 
                 <div class="col-md-4 col-sm-6">
                     <div class="price-box featured">
                         <h4> {{ $t("home.objectif.section.domain.environment.title") }}</h4>
                         <div class="price-info1 justified">
                           {{ $t("home.objectif.section.domain.environment.text") }}
                         </div>
 
                         <!-- <a href="strategy.html#green-space" class="btn btn-default">READ MORE</a> -->
                         <NuxtLink class="btn btn-default" to="/strategy#green-space">READ MORE </NuxtLink>
                     </div>
                 </div>
 
            
             </div>  
        </div>
    </div>
</section>

<!-- Pricing -->
<section id="pricing" class="section blog">
    <div class="container">

        <!---->
        <header class="section-heading">
            <h4>{{ $t("home.objectif.section.client.title") }}</h4>
            <!-- <span>Nos categories de clients</span> -->
        </header>
        <!---->

        <div class="section-content">

            
 
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="blog-post1">
                        <header>
                            <h6 class="date">{{ $t("home.objectif.section.client.agents.title") }}</h6>
                            <div class="blog-element">
                                <img class="img-responsive" src="/assets/images/ns/desinfection.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content text-center">
                            <p class="read-text justified">
                               {{ $t("home.objectif.section.client.agents.text") }}
                            </p>
                            <a href="#" @click.prevent.stop="handler" class="btn btn-default readmore">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="blog-post1">
                        <header>
                            <h6 class="date">{{ $t("home.objectif.section.client.industry.title") }} </h6>
                            <div class="blog-element">
                                <img class="img-responsive" src="/assets/images/ns/beer-factory.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content text-center">
                            <p class="read-text justified">
                                {{ $t("home.objectif.section.client.industry.text") }}                           
                            </p>
                            <!-- <a href="#" @click.prevent.stop="readMoreHandler" class="btn btn-default readmore">READ MORE</a> -->
                            <a href="#"  class="btn btn-default readmore">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="blog-post1">
                        <header>
                            <h6 class="date">{{ $t("home.objectif.section.client.warehouse.title") }}</h6>
                            <div class="blog-element">
                                <img class="img-responsive" src="/assets/images/ns/maize.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content text-center">
                            <p class="read-text justified">
                               {{ $t("home.objectif.section.client.warehouse.text") }}                            
                            </p>
                            <a href="#"   class="btn btn-default readmore">READ MORE</a>
                            <!-- <a href="#" @click.prevent.stop="readMoreHandler" class="btn btn-default readmore">READ MORE</a> -->
                        </div>
                    </div>
                </div>
                
            </div>     
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="blog-post1">
                        <header>
                            <h6 class="date">{{ $t("home.objectif.section.client.hotel.title") }}</h6>
                            <div class="blog-element">
                                <img class="img-responsive" src="/assets/images/ns/restaurant.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content text-center">
                            <p class="read-text justified">
                               {{ $t("home.objectif.section.client.hotel.text") }}
                            </p>
                            <a href="#"  class="btn btn-default readmore">READ MORE</a>
                            <!-- <a href="#" @click.prevent.stop="readMoreHandler" class="btn btn-default readmore">READ MORE</a> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="col-sm-6 col-md-4">
                    <div class="blog-post">
                        <header>
                            <h6 class="date">Les agriculteurs </h6>
                            <div class="blog-element">
                                <img class="img-responsive" src="/assets/images/ns/inbags.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content text-center">
                            <p class="read-text justified">
                             
                            </p>
                            <a href="#" class="btn btn-default readmore">READ MORE</a>
                        </div>
                    </div>
                </div> -->
                <div class="col-sm-6 col-md-4">
                    <div class="blog-post1">
                        <header>
                            <h6 class="date">{{ $t("home.objectif.section.client.storage.title") }}</h6>
                            <div class="blog-element">
                                <img class="img-responsive" src="/assets/images/ns/silo.jpg" alt="">
                            </div>
                        </header>
                        <div class="blog-content text-center">
                            <p class="read-text justified">
                               {{ $t("home.objectif.section.client.storage.text") }}
                            </p>
                            <!-- <a href="#" @click.prevent.stop="readMoreHandler" class="btn btn-default readmore">READ MORE</a> -->
                            <a href="#"   class="btn btn-default readmore">READ MORE</a>
                        </div>
                    </div>
                </div>
                
            </div>                
        </div>
    </div>
</section>
<!-- Pricing -->
 
 <section id="valeurs" class="section why-choose-us">
    <div class="container">
        <header class="section-heading">
            <h3> {{ $t("home.pillar.title") }}</h3> 
            <span> </span>
        </header>

        <div class="section-content">
            <div class="row">
                

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.solution.title") }}</h4>
                    <div class="why-explain top top-2 text-center">
                        <p class="read-text justified">
                            {{ $t("home.pillar.solution.text") }}
                        </p>
                        <a href="#" class="btn btn-default readmore bottom">READ MORE</a>
                        <!-- <div class="text-center"> </div> -->
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.distrib.title") }} </h4>
                    <div class="why-explain top top-3 text-center">
                        <p class="read-text justified">
                            {{ $t("home.pillar.distrib.text") }}
                        </p>
                        <a href="#" class="btn btn-default readmore bottom">READ MORE</a>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.conseil.title") }} </h4>
                    <div class="why-explain top top-3 text-center">
                        <p class="read-text justified">
                          {{ $t("home.pillar.conseil.text") }}
                        </p>
                        <a href="#" class="btn btn-default readmore bottom">READ MORE</a>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->                

            </div><!-- row -->

            <div class="row">
                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.formation.title") }} </h4>
                    <div class="why-explain top top-1 text-center">
                        <p class="read-text justified">
                           {{ $t("home.pillar.formation.text") }}
                        </p>
                        <a href="#" class="btn btn-default readmore bottom">READ MORE</a>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.partner.title") }}</h4>
                    <div class="why-explain top top-2 text-center">
                        <p class="read-text justified">
                           {{ $t("home.pillar.partner.text") }}
                        </p>
                        <a href="#" class="btn btn-default readmore bottom">READ MORE</a>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->

                <div class="col-sm-4 why-explain-wrap">

                    <!-- why-choose-us-text -->
                    <h4 class="text-center">{{ $t("home.pillar.advocacy.title") }} </h4>
                    <div class="why-explain top top-2 text-center">
                        <p class="read-text justified">
                          {{ $t("home.pillar.advocacy.text") }}
                        </p>
                        <a href="#" class="btn btn-default readmore bottom">READ MORE</a>
                    </div>

                </div><!-- col-md-4 col-sm-6 -->                

                

            </div><!-- row -->        
 


     

        </div><!-- section-content -->
    </div><!-- container -->
</section>

<section id="valeurs" class="section why-choose-us">
    <div class="container">
        <header class="section-heading">
            <h2>{{ $t("home.presence.title") }}</h2>
            <!-- <span>Une entreprise de confiance</span> -->
            <span>{{ $t("home.presence.subtitle") }}</span>
        </header>

        <div class="section-content">
            <div class="row">
               

                <div class="col-sm-6">

                    <!-- service -->
                    <div class="service">
                        <div class="service-icon text-center">
                            <!-- <span class="fa fa-truck"></span> -->
                            <!-- <span class="ion-social-buffer-outline"></span> -->
                        </div>
                        <div class="about-service">
                            <h4  class="presence-label">Francophone </h4>
                            <div class="text-center">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="counter-box">
                                           
                                            <figure>
                                                <img width="80px" class="img-responsive center-block"  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CI.svg"/>
                                            </figure>
                                            
                                            <div class="count-description">{{ $t("home.presence.fr.ivory") }}</div>
                                        </div>
                                    </div>
                    
                                    <div class="col-sm-3">
                                        <div class="counter-box">
                                           
                                            <figure>
                                                <img width="80px" class="img-responsive center-block" alt="Sénégal" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SN.svg"/>
                                            </figure>
                                            
                                            <div class="count-description">{{ $t("home.presence.fr.senegal") }}</div>
                                        </div>
                                    </div>
                                                   
                    
                                    <div class="col-sm-3">
                                        <div class="counter-box">
                                           
                                            <figure>
                                                <img width="80px" class="img-responsive center-block" alt="Cameroun" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CM.svg"/>
                                            </figure>
                                            
                                            <div class="count-description">{{ $t("home.presence.fr.cameroun") }}</div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>

                </div><!-- col-sm-4 -->

                <div class="col-sm-6">

                    <!-- service -->
                    <div class="service">
                        <div class="service-icon text-center">
                            <!-- <span class="ion-social-buffer-outline"></span> -->
                            <!-- <span class="ion-ios-cart-outline"></span> -->
                        </div>
                        <div class="about-service">
                            <h4 class="presence-label">Anglophone </h4>
                            <div class="text-center">
                                <div class="row">
                          
                                    <div class="col-sm-3">
                                        <div class="counter-box">
                                           
                                            <figure>
                                                <img width="80px" class="img-responsive center-block" alt="Ghana" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GH.svg"/>
                                            </figure>
                                            
                                            <div class="count-description">{{ $t("home.presence.en.ghana") }}</div>
                                        </div>
                                    </div>                
                    
                                    <div class="col-sm-3">
                                        <div class="counter-box">
                                           
                                            <figure>
                                                <img width="80px" class="img-responsive center-block" alt="Cameroun" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CM.svg"/>
                                            </figure>
                                            
                                            <div class="count-description">{{ $t("home.presence.en.cameroun") }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="counter-box">
                                           
                                            <figure>
                                                <img width="80px" class="img-responsive center-block" alt="Nigeria" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg"/>
                                            </figure>
                                            
                                            <div class="count-description">{{ $t("home.presence.en.nigeria") }}</div>
                                        </div>
                                    </div>                                    
                                </div><!-- row -->                               
                            </div>
                        </div>
                    </div>

                </div><!-- col-sm-4 -->
            </div><!-- row -->            
 


     

        </div><!-- section-content -->
    </div><!-- container -->
</section>



<!-- Portfolio -->
<section id="media" class="section portfolio">
    <div class="container">

        <!---->
        <header class="section-heading">
            <h2>{{ $t("home.media.title") }}</h2>
            <span>{{ $t("home.media.subtitle") }}</span>
        </header>
        <!---->

 
        
        <div class="section-content">
            <div class="main_content">
                <div class="isotop-filter" id="filters">
                    <button type="button" class="btn btn-isotop is-checked" data-filter="*">{{ $t("home.media.all") }}</button>
                    <button type="button" class="btn btn-isotop" data-filter=".photo">{{ $t("home.media.photo") }}</button>
                    <button type="button" class="btn btn-isotop" data-filter=".video">{{ $t("home.media.video") }}</button>
                    <!-- <button type="button" class="btn btn-isotop" data-filter=".marketing">Marketing</button>
                    <button type="button" class="btn btn-isotop" data-filter=".brandidentity">Brand Identity</button> -->
                </div>
            </div>  <!-- main_content -->
        </div>
    </div>

    <!---->

        <!---->

        <!---->

        <!---->
        <div class="portfolio-grid">
        <!---->

    <!---->

    <!---->

            <ul id="da-thumbs" class="da-thumbs isotope">
            <li data-category="video" class="video">
                <iframe id="ytplayer" type="text/html" width="auto" height="360"
                        src="https://www.youtube.com/embed/c60QfyKoZYQ?autoplay=1"
                        frameborder="0"></iframe>
            </li>
            <li data-category="video" class="video">
                <iframe id="ytplayer" type="text/html" width="auto" height="360"
                        src="https://www.youtube.com/embed/dSOyLRXo7ow?autoplay=1"
                        frameborder="0"></iframe>
            </li>            
            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="assets/images/ns/autoroute1.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="assets/images/ns/drone.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>            

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/maize.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li> 

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/autoroute2.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/plane.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/hotel.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/disinfection-1.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/train1.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/nextstop_plan2.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Next Stop</h4>
                                <span>West Africa</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/train2.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Environment</h4> -->
                                <!-- <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/phytosanitaire.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/flies.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/nature-bio.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/silo.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/mosquito.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/trap0.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/tech.png" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/trap1.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>

            <li data-category="photo" class="photo">
                <a href="#">
                    <img src="/assets/images/ns/desinfection.jpg" alt="" />
                    <div class="portfolio-detail-overlay">
                        <div class="middle-align-wrap">
                            <div class="middle-align-cell">
                                <!-- <h4>Corporate Website</h4>
                                <span>Webdesign</span> -->
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div><!--/portfolio-grid-->


</section>
<!-- /Portfolio -->

<!-- Contact-us -->
<section id="contact" class="section contact">
    <div class="container">
        <!---->
        <header class="section-heading">
            <h2>  contacts</h2>
            <!-- <span>Nous serons ravi</span> -->
        </header>
        <!---->

        <div class="section-content">
            <div class="row">
                <!-- <div class="col-md-6 col-sm-5">
                    <h5>contactez nous</h5>
                    <h5>Next Stop Hygiène Publique AO</h5>
                </div> -->
                <div class="col-md-12 col-sm-7">


                    <div class="row contact-info-wrap">
                        <div class="col-sm-6">
                            <div>
                                <!-- <img width="80" class="img-responsive center-block" src="/assets/images/ns/NSWAG.png" alt=""> -->
                                <h5>Next Stop Hygiène Publique AO</h5>
                                <address class="contact-info"> 
                                    <span>Avenue Chardy, Plateau</span>, <br>
                                    <span>01 BP 5457 Abidjan 01</span><br>
                                    <span>Abidjan, Côte d'Ivoire</span>
                                </address>
                            </div>

                        </div>
                        <div class="col-sm-6">
                            <div>
                                <h5>Contact Information</h5>
                                <div class="contact-info">
                                    Local: ( 33 1) 42 68 53 00<br>
                                    Mobile: ( 33 1) 42 68 53 01<br>
                                    info@themewagon.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5>{{ $t("home.contact.findus") }}</h5>
                    <div class="google-map">
                        <div id="map"></div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Contact-us -->

    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data: () => {
    return {
      screenZise: $(document).width(),
      graphic: '',
      graphStyle: 'width: 65%; height: 100%',
      strategyGrpah: 'width: 100%;', 
    }
  },
computed:{
  locale(){
    return this.$store.state.lang
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
    //   console.log("======>>",this.locale.lang)
    //   let that = this
        var txt = {
            fr:{
                on:"LIRE MOINS",
                off:"LIRE PLUS"
            },
            en:{
                on:"READ LESS",
                off:"READ MORE"
            }            
        }

		var oText = { 
            on: txt[this.locale.lang].on,
			off: txt[this.locale.lang].off
        }
        var lang = this.locale.lang
	$(".readmore").on("click",function(ev, el){
        ev.preventDefault()
       
         
        var oText = { 
            on:"READ LESS",
            off:"READ MORE"
		}
		// var text = $(this).next("p")  
        // var oText = { 
        //     on: txt[that.locale.lang].on,
		// 	off: txt[that.locale.lang].off
        // }
        
		var text = $(this).prev("p") 
        // console.log(el, text, $(this).is(":visible", oText))
		if($(text).is(":visible")){
			$(this).text(oText.off) 
			$(text).hide()
		} else{
			 
			$(text).show()
			$(this).text(oText.on) 
		}
	})
	     
  },
  methods: {
    readMoreHandler(){
        var oText = { 
            on:"READ LESS",
            off:"READ MORE"
		}
		// var text = $(this).next("p")  
		var text = $(this).prev("p") 
		if($(this).is(":visible")){
			$(this).text(oText.off) 
			$(text).hide()
		} else{
			 
			$(text).show()
			el.text(oText.on) 
		}
    },
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
  },
}
</script>
