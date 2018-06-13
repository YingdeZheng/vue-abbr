<template>
  <div class="abbre">
    <span class="abbre-front">{{front}}</span>
    <span class="abbre-behind">{{behind}}</span>
  </div>
</template>

<script>
export default {
    name: 'vue-abbr',
    props: {
        text: {
            type: String,
            required: true
        },
        cut: {
            type: Number,
            default: 50
        }
    },
    computed: {
        front () {
            return this.text.substring(0, Math.floor(this.cut / 100 * this.text.length))
        },
        behind () {
            let behind = this.text.substring(Math.floor(this.cut / 100 * this.text.length), this.text.length)
            return this.replaceS(behind.split('').reverse())
        }
    },
    methods: {
        replaceS (str) {
            let reg = '<>《》（）(){}[]【】'
            for (let ind in str) {
                let val = str[ind]
                let mind = reg.indexOf(val)
                if (mind !== -1) {
                    switch (mind) {
                    case 0 : str[ind] = '>'
                        break
                    case 1 : str[ind] = '<'
                        break
                    case 2 : str[ind] = '》'
                        break
                    case 3 : str[ind] = '《'
                        break
                    case 4 : str[ind] = '）'
                        break
                    case 5 : str[ind] = '（'
                        break
                    case 6 : str[ind] = ')'
                        break
                    case 7 : str[ind] = '('
                        break
                    case 8 : str[ind] = '}'
                        break
                    case 9 : str[ind] = '{'
                        break
                    case 10 : str[ind] = ']'
                        break
                    case 11 : str[ind] = '['
                        break
                    case 12 : str[ind] = '】'
                        break
                    case 13 : str[ind] = '【'
                        break
                    }
                }
            }
            return str.join('')
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less">
  .abbre {
    display: flex;
    justify-content: flex-start;
  }

  .abbre-front {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .abbre-behind {
    max-height: 24px;
    text-align: left;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
    text-overflow: clip;
    direction: rtl;
    unicode-bidi: bidi-override;
  }
</style>
