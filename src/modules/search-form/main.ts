import Vue from 'vue';
import SearchForm from './SearchForm.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(SearchForm),
}).$mount('#searchForm');
