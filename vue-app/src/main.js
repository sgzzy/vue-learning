import Vue from 'vue';
import App from './App.vue';
import mock from './mock/mock';

window.example = App;
console.log(example);
var app = new Vue({
  el: '#app',
  render: h => h(App)
})
