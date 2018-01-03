<template>
    <h1 @click="hello">{{message}}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {
    message: string = "Hogehoge!"
    
    hello(): void {
        alert('hello world')
    }
}
</script>