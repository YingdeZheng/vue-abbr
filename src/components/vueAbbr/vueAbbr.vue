<template>
  <div class="abbre">
    <span class="abbre-front" >{{front}}</span>
    <span class="abbre-behind" :style="behindWidth">{{behind}}</span>
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
            behind: '',
            behindWidth: ''
        }
    },
    created: function () {
        let text = this.text.toString()
        let len = text.length

        if (!this.cut) {
            let mid = len % 2 === 0 ? Math.floor(len / 2) : (Math.floor(len / 2) + 1)
            this.front = text.substring(0, mid)
            this.behind = text.substring(mid, len).split('').reverse().join('')
            this.behindWidth = 'max-width: 50%'
        } else {
            let left = (this.cut / len).toFixed(2) * 100
            let right = 100 - left
            this.front = text.substring(0, this.cut)
            this.behind = text.substring(this.cut, len).split('').reverse().join('')
            this.behindWidth = 'max-width:' + right + '%'
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
    text-overflow: clip;
    unicode-bidi: bidi-override;
    text-align: left;
    direction: rtl;
    word-break: break-all;
  }
</style>
