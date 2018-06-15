<template>
  <div id="app">
    <h2>It is a simple example.</h2>
    <ul>
      <li style="width: 80%;" v-for="item in items">
        <vue-abbr :text="item.text"></vue-abbr>
      </li>
    </ul>
    Input：<input v-model="test" class="input"/> The following li will update the content based on it.
    <ul>
      <li style="width: 80%;">
        <vue-abbr v-bind:text="test"></vue-abbr>
      </li>
    </ul>
  </div>
</template>

<script>
import VueAbbr from 'vue-abbr'
import '../dist/vue-abbr.min.css'

export default {
    name: 'App',
    data () {
        return {
            items: [
                {text: '这是一串测试字符这是一串测试字符这是一串测试字符这是一串测试字符'},
                {text: '这是一串测试字符这是一串测试字符(这是一串测试字符这是一串测试字符)'},
                {text: '这是一串测试字符这是一串测试字符（这是一串测试字符）【这是一串测试字符】'},
                {text: '这是一串测试字符abcdefghijklmn1234567890这是一串测试字符'},
                {text: '这是一串测试字符！@%……#%&#……#（@》这是一串测试字符'},
                {text: '这是一串超长测试字符串这是一串超长测试字符串这是一串超长测试字符串这是一串超长测试字符串这是一串超长测试字符串这是一串超长测试字符串'}
            ],
            test: '这是一串测试字符这是一串测试字符这是一串测试字符这是一串测试字符'
        }
    },
    components: {
        VueAbbr
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
  .input {
    width: 600px;
  }
</style>
