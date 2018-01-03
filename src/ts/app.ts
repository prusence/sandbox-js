declare var require: any

import Vue from 'vue'
var App = require('../vue/app.vue').default

new Vue({
    el: '#app',
    components: { App },
    render: h => h('app')
})
