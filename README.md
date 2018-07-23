[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square)](https://github.com/YingdeZheng/vue-abbr)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/surmon-china/vue-codemirror)

[![NPM](https://nodei.co/npm/vue-abbr.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-abbr)

# Vue-Abbr
![testcustomer](https://github.com/YingdeZheng/vue-abbr/blob/master/image/testcustomer.svg)
### Description
A component for vue.js . Used for omitting the middle fragment in the single-line text. It is also adaptive when dragging the window screen.

In the space where the display width is limited, it can show the head and tail of a string of characters. Through this way, it will be easier to infer the meaning of the string.

The component is exactly what you need ！
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
*Prop* | *Type* | *Required* | *Description* |
:--- | :--- | :--- | :--- |
| text | String | ✓ | This is the showing string |
| cut | Number | * | Which means the position where to cut the string. Its default value is zero, it will cut the string in the middle. |

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
## Contributions

Welcome to improve vue-virtual-scroll-list with any issue, pull request or code review.
