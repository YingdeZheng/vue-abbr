<template>
  <div class="abbre" :change="change(this.text)">
    <span class="abbre-front">{{front}}</span>
    <span class="abbre-behind">{{behind}}</span>
  </div>
</template>

<script>
export default {
    name: 'vue-abbr',
    props: {
        text: String,
        cut: {
            type: Number,
            default: 0
        }
    },
    data: function () {
        return {
            front: '',
            behind: ''
        }
    },
    methods: {
        change (text) {
            let len = text.length
            var left = 0

            if (!this.cut) {
                left = len % 2 === 0 ? Math.floor(len / 2) : (Math.floor(len / 2) + 1)
            } else {
                left = (this.cut / len).toFixed(2) * 100
            }
            this.front = text.substring(0, left)
            let behind = text.substring(left, len).split('').reverse()
            this.behind = this.replaceS(behind)
        },
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
