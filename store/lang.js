export const state = () => ({
    lang: 'en'
  })
  
  export const mutations = {
    setLang(state, lang) {
      state.lang = lang
    }
 
  }

 
  
  // contains your actions
  export const actions = {
    changeLang({ state, commit }, lang){
        console.log(lang)
      commit('setLang',  lang)
    }
  }
  // contains your mutations

  // your root getters
  export const getters = {
      lang: (state) => state.lang
  }