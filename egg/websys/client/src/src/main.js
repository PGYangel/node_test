// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vueaxios from 'vue-axios'
import axios from 'axios'
import store from '@/store'

Vue.use(ElementUI)
Vue.use(Vueaxios, axios)
Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/') {
    /* if (!store.getters.userInfo.state) {
      next('/')
    } */
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
