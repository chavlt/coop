import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/assets/style.scss');

Vue.prototype.$api = axios.create({
  baseURL : 'https://allweb.fun/coop/api',
  params : {},
  headers: {'Authorization': "0c8e2be623f4e81849c2f9c604b0cf8ec3b1f3d0"}
  //ancien 861f633ab8d7c049d7ba4bb911a899ad7d0e6074
})

Vue.prototype.$api.interceptors.request.use(function(config){
  if(store.state.token){
    config.params.token = store.state.token;
  }
  return config;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



/*  Obtention du token pour l'api
let config = {
	headers: {'Authorization': "861f633ab8d7c049d7ba4bb911a899ad7d0e6074"}
}
Axios.post(api_route,params,config).then(() => { ... }); */