<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li style="width: 50%;">
        <vue-abbr v-bind:cut="7" :text="text"></vue-abbr>
      </li>
    </ul>
  </div>
</template>

<script>
//import VueAbbr from './src/components/vueAbbr/vueAbbr.vue'

export default {
    name: 'App',
    data () {
        return {
            text: '这是一串测试字符这是一串测试字符这是一串测试字符这是一串测试字符'
        }
    },
    components: {

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
