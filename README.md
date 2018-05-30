[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square)](https://github.com/YingdeZheng/vue-abbr)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/surmon-china/vue-codemirror)

[![NPM](https://nodei.co/npm/vue-abbr.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-abbr)


# Vue-Abbr
#### Description
A component for vue.js . Used for omitting the middle fragment in the single-line text. It is also adaptive when dragging the window screen.

In the space where the display width is limited, it can show the head and tail of a string of characters. Through this way, it will be easier to infer the meaning of the string.

If you want the result like this _"这是一份测试...关于git.doc"_ not like the normal one _"这是一份测试..."_

The component is exactly what you need ！

想要省略文件名中间部分，要新颖的效果，像这样 _"这是一份测试...关于git.doc"_ 这个组件正是你需要的！

# Feature
* A novel method to omit single-line text
* Good compatibility
  
# Install
NPM

``` bash
npm install vue-abbr
```

# Usage
#### props
``` html
  <vue-abbr v-bind:cut="7" :text="传入字符串"></vue-abbr>
```
It provide two props. <br/>_cut_ _type:Number_ which means the position where to cut the string <br/>_text_  _type:String_ this is the showing string

#### mount with global

``` javascript
// require lib
import Vue from 'vue'
import VueAbbr from 'vue-abbr'

// require styles
import 'vue-abbr/dist/vue-abbr.min.css'

// you can set default global options and events when use
Vue.use(VueAbbr)
```

#### mount with component

```javascript
// require component
import vueAbbr from 'vue-abbr'

// require styles
import 'vue-abbr/dist/vue-abbr.min.css'

// component
export default {
  components: {
     vueAbbr
  }
}
```

#### mount with ssr

```javascript
// If used in nuxt.js/ssr, you should keep it only in browser build environment
if (process.browser) {
  const vueAbbr = require('vue-abbr')
  Vue.use(vueAbbr)
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
