import Vue from 'vue'

declare var require: any

var App = require('../vue/app.vue').default

const app = new Vue({
  el: '#app',
  components: { App },
  render: h => h('app')
})

app.$mount('#app')
