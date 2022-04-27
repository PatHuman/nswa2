
const {fr, en} = require('./i18n')
// const lang = navigator.language || navigator.userLanguage 
// const langcode  = lang.split("-")[0]
const langcode = 'fr'

// console.log(fr)
// localStorage.setItem('lang', lang.split("-")[0])
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // target:"static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'N E X T  <em>-</em>  S T O P',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/css/flag-icon.min.css'},
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Raleway:100,300,400'},
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto:100,300,400'},
      // { rel:'stylesheet', href:'assets/lib/bootstrap/dist/css/bootstrap.css'},
      // {rel:'stylesheet', href:'assets/css/libs.css'},
      // {rel:'stylesheet', href:'assets/css/main.css'},
      {rel:'stylesheet', href:'assets/css/ie_fix.css.'}
  ],
  script:[
    {src:"/assets/lib/components-modernizr/modernizr.js"},
    {src:"/assets/lib/jquery/dist/jquery.js "},
    {src:"/assets/lib/bootstrap/dist/js/bootstrap.js "},
    {src:"/assets/lib/imagesloaded/imagesloaded.pkgd.min.js"},
    {src:"/assets/lib/isotope/dist/isotope.pkgd.min.js"} ,
    {src:"/assets/lib/owlcarousel/owl-carousel/owl.carousel.js"} ,
    {src:"https://maps.googleapis.com/maps/api/js?sensor=false"} ,
    {src:"/assets/lib/waypoints/lib/jquery.waypoints.min.js"},
    {src:"/assets/lib/waypoints/lib/shortcuts/inview.min.js"},
    {src:"/assets/lib/FlexSlider/jquery.flexslider.js"},
    {src:"/assets/lib/simple-text-rotator/jquery.simple-text-rotator.js"},
    {src:"/assets/lib/jquery.mb.YTPlayer/dist/jquery.mb.YTPlayer.min.js"},
    {src:"/assets/lib/magnific-popup/dist/jquery.magnific-popup.js"} ,
    {src:"/assets/js/main.js"},
    // {src:"/assets/flag-icons-main/css/flag-icons.css"},
    // {src:""}
  ]  
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/flag-icons-main/css/flag-icons.min.css',
    '~/static/assets/lib/bootstrap/dist/css/bootstrap.css',
    '~/static/assets/css/libs.css',
    '~/static/assets/css/main.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //  {src:"~/static/assets/js/main.js", ssr:false},
    // { src:"@/static/assets/lib/components-modernizr/modernizr.js"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
   
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // 'flag-icons'
  ],
  i18n: {
    // locales: ['en', 'fr'],
    locales: [
      {
        code: "en",
        file: "en.js"
      },
      {
        code: "fr",
        file: "fr.js"
      }],
      langDir: 'i18n/',
      lazy: true,
      strategy: "no_prefix",
    defaultLocale: langcode,
    // vueI18n: {
    //   fallbackLocale: 'en',
    //   messages: {
    //     en: {
    //       menus:{
    //           home: "HomeZ",
    //           about: "About us",
    //           vision: "Vision & Valeus",
    //           service: "Products & Services",
    //           pillar: "Pillars",
    //           objectif: "Objectives & Strategies"
    //       },
    //       home:{
    //           bigTitle:{
    //               title:"",
    //               subtitle:"",
    //               link:""
    //           },
    //           about:{},
    //           vision:{},
    //           service:{},
    //           pillar:{},
    //           objectif:{},
    //       },
    //       about:{},
    //       vision:{},
    //       service:{},
    //       pillar:{},
    //       objectif:{},
    //   },
    //     fr: {
    //       menus:{
    //           home: "Accueil",
    //           about: "A Propos",
    //           vision: "Vision & Valeurs",
    //           service: "Produits & Services",
    //           pillar: "Pilliers",
    //           objectif: "Objectifs & Strategies"
    //       },
    //       home:{
    //           bigTitle:{
    //               title:"",
    //               subtitle:"",
    //               link:""
    //           },
    //           about:{},
    //           vision:{},
    //           service:{},
    //           pillar:{},
    //           objectif:{},
    //       },
    //       about:{},
    //       vision:{},
    //       service:{},
    //       pillar:{},
    //       objectif:{},
    //   } 
    //   }
    // }
  }, 
  styleResources: {
    
    less: ['~/static/assets/flag-icons-main/less/flag-icons.list.less',],
    
   }, 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
