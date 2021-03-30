import Vue from 'vue'
import App from './App.vue'
import Students from './Student.vue'

// Event Bus
export const bus = new Vue();

// Globally registered component.
Vue.component('students', Students);

new Vue({
  el: '#app',
  render: h => h(App)
})
