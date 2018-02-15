import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

Vue.filter('slugToTitle', function(slug) {
  var words = slug.split('-');

  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
})

new Vue({
  router, store,
  render: (h) => h(App)
}).$mount('#app')
