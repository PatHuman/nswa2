<!-- Please remove this file from your project -->
<template>
  <div >
<nav id="fixedTopNav" class="navbar navbar-fixed-top main-navigation" itemscope itemtype="https://schema.org/SiteNavigationElement" >
    <div class="container">

        <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="ion-drag"></span>
            </button>

            <!-- Logo -->
            <div class="navbar-brand" itemscope itemtype="https://schema.org/Organization">
                <!-- <span itemprop="name" class="sr-only">Reign</span> -->
                <NuxtLink to="/">N E X T  <em>-</em>  S T O P</NuxtLink> 
                <!-- <a itemprop="url" href="index.html">
                    N E X T  <em>-</em>  S T O P
                </a> -->
                
            </div>
            <!-- /Logo -->

        </div><!-- /.navbar-header -->
        

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="main-nav-collapse">
            <ul class="nav navbar-nav navbar-right">

                <li>
                    <NuxtLink to="/about">{{ $t("menus.about") }}</NuxtLink>
                    <!-- <a href="index.html" itemprop="url">
                    <span itemprop="name">Accueil</span>
                    </a> -->
                </li>   
                <li>
                     <NuxtLink to="/vision">{{ $t("menus.vision") }}</NuxtLink>                
                </li>                
                

                <li>
                     <NuxtLink to="/services">{{ $t("menus.service") }}</NuxtLink>
                </li>                                
                <li>
                     <NuxtLink to="/pillier">{{ $t("menus.pillar") }}</NuxtLink>   
                </li>
                <li>
                     <NuxtLink to="/strategy">{{ $t("menus.objectif") }}</NuxtLink>                
                </li>                

               
                <li>
                  <a  v-if="lang == 'fr'" href="#" @click.prevent.stop="setLocale('en')">
                 <!-- <span class="flag-icon flag-icon-us"></span>  -->
                 <span class="fi fi-us "></span> EN
                 </a>  
                 <a v-if="lang == 'en'" href="#" @click.prevent.stop="setLocale('fr')">
                 <!-- <span class="flag-icon flag-icon-fr"></span>   -->
                 <span class="fi fi-fr "></span> FR
                 </a>                  
                 <!-- <button  v-show="lang == 'fr'" class="clickable" @click="setLocale('en')"> <span class="fi fi-us "></span> EN</button>
                 <button  v-show="lang == 'en'" class="clickable" @click="setLocale('fr')"> <span class="fi fi-fr "></span> FR</button> -->
                <!-- <nuxt-link  @click.prevent.stop="$i18n.setLocale('en')" ><span class="flag-icon flag-icon-us"></span> EN </nuxt-link>
                <nuxt-link @click.prevent.stop="$i18n.setLocale('fr')"  ><span class="flag-icon flag-icon-fr"></span> FR </nuxt-link>                                      -->
                </li>   
                             
                <!-- <li>
                    <span class="lang" >

                        <a href="/en" >
    
                            <span class="flag-icon flag-icon-us"></span> EN 
                        </a>
                        <a href="/fr">
                             <span class="flag-icon flag-icon-fr"></span> FR
    
                        </a>
                    </span>
                </li> -->
                <!-- <li>
                    <select class="selectpicker" data-width="fit" >
                        <option data-content='<span class="flag-icon flag-icon-us"></span> EN'></option>
                      <option  data-content='<span class="flag-icon flag-icon-fr"></span> FR'></option>
                    </select> 
                </li> -->
            </ul>
        </div>
        <!-- /Navigation Links -->


    </div><!-- /.container -->
</nav>
<!-- /Fixed Top Navigation -->

 
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: ()=>{
      return {
          lang: localStorage.getItem('lang')
      }
  },
  mounted() {
      console.log( $(window).scrollTop(),$('#fixedTopNav'))
      $(window).on('scroll',function() {
          // console.log("yooo", scroll)
          this.navbarAnimation()
        //   this.navbarAnimation();
      }.bind(this));
  },
  created() {
      
  },
  methods: {
    setLocale(iLang){
        this.lang =  iLang   
        localStorage.setItem('lang', iLang)
        this.$i18n.setLocale(iLang)
        // this.store.commit("lang/set", iLang)
        console.log(iLang)
        this.$store.dispatch('lang/changeLang',iLang)

    },
      navbarAnimation() {
        //   console.log("navbarAnimation")
        let $nav = $('#fixedTopNav')
        if ($(window).scrollTop() > 0) {
        	$nav.addClass('navbar-solid');
			
        	return;
        }  

			$nav.removeClass('navbar-solid');
			$(".navbar-nav > li > a").blur();
	 
        
		// console.log("yooo", $('#fixedTopNav').attr('class'))

    }
  },
}
</script>
