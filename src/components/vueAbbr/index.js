import vueAbbr from './vueAbbr.vue'

vueAbbr.install = function (Vue) {
    Vue.component('vue-abbr', vueAbbr)
}

// 针对直接引用
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueAbbr)
}

export default vueAbbr
