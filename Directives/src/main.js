import Vue from 'vue'
import App from './App.vue'
Vue.directive('highlight',{
  bind(el, binnding, vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binnding.value;
    let delay = 0
    if(binnding.modifiers['delayed']){
      delay = 3000
      
    }
    setTimeout( () =>{
      if(binnding.arg == 'background'){
        el.style.backgroundColor = binnding.value
      }else if(binnding.arg == 'border'){
        el.style.border = '1px solid ' + binnding.value
        // el.toUpperCase(); // will not work...
      }
      else{
        el.style.color = binnding.value
      }
    },delay)
    
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
