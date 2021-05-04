import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueHtmlToPaper from 'vue-html-to-paper'
// import MultiFiltersPlugin from './plugins/MultiFilters'
import titleMixin from './services/titleMixin'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  // styles: [
  //   'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
  //   'https://unpkg.com/kidlat-css/css/kidlat.css'
  // ]
}

Vue.prototype.$IMGPATH = 'http://marmuseum.ca/shiplists2/list-db-server/images/wallaceships/',
// Vue.prototype.$IMGPATH = 'http://localhost/shiplists2/list-db-server/images/wallaceships/',

Vue.use(VueHtmlToPaper, options);
// Vue.use(MultiFiltersPlugin);

Vue.config.productionTip = false;
Vue.mixin(titleMixin)
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
