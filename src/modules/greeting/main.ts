import Vue from 'vue';
import Greeting from './Greeting.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Greeting),
}).$mount('#greeting');
