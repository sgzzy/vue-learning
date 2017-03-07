import Vue from 'vue';
import Suduko from './main.vue';
// import Sudu from './suduko.js'


Vue.component('my-pane', {
  render: h => Array(...{
    length: 81,
  }).map(() => h('span')),
});
new Vue({
  render: h => h(Suduko),
}).$mount('#app');

// window.document.addEventListener('keyup', e => {
//   e.preventDefault()
//   window.console.log(Suduko.items)
//   if (e.keyCode === 13) {
//     const isSudu = new Sudu(sudu.items).completeSudu().checkSudu()
//     if (isSudu) {
//       window.console.log('You are succeessful')
//     } else {
//       window.console.log('You are failed')
//     }
//   }
// })