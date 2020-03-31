<template>
  <div class="articles" ref="articles">
    <iframe src="https://www.liuxiaoer.top/html/a.html" frameborder="0" scrolling="no" ref="ifr" id="frame-content"></iframe>
  </div>
</template>


<script>
  var Markdown = require('markdown-it')
  // var hljs = require('highlight.js')
  // require('highlightjs-line-numbers.js')

  import ClipboardJS from 'clipboard'

  export default {
    name: "demo",

    props: {
      content: String
    },

    data() {
      return {
        codes: [],
        copyIndex: 0,
        flag:1
      }
    },

    mounted() {
            const oIframe = document.getElementById('frame-content');
            const deviceWidth = document.documentElement.clientWidth;
            const deviceHeight = document.documentElement.scrollHeight;
            // oIframe.style.width = (Number(deviceWidth)) + 'px'; //数字是页面布局宽度差值
            oIframe.style.height = (Number(deviceHeight)) + 'px'; //数字是页面布局高度差
        
    },

    methods: {

    

      blank() {
        let aTags = document.querySelectorAll('.article a')
        aTags.forEach((value, index) => {
          value.setAttribute('target', '_blank')
        })
      },

      copy() {
        let codes = document.querySelectorAll('pre code')
        let preCodes = document.querySelectorAll('.precopy')
        let index = 0;
        codes.forEach((code) => {
          index++;
          var li = document.createElement('li')
          li.style.display = 'block'
          li.style.position = 'absolute'
          li.style.width = '35px'
          li.style.height = '35px'
          li.className = 'copy iconfont icon-fuzhi'
          li.setAttribute('index', index - 1)
          code.appendChild(li)

        })

        this.flag = 1;


        preCodes.forEach((precode) => {


          precode.addEventListener('click', (e) => {
            let li = precode.querySelector('.copy')

            console.dir(e)

            if (li != e.target) return

            let index = parseFloat(li.getAttribute('index'))

            // 复制copy
            let clip = new ClipboardJS('.copy', {
              text: () => {
                return this.codes[index]
              }
            })

            // 提示赋值成功
            this.$message({
              message: '复制成功',
              type: 'success'
            })
          }, false)

          precode.addEventListener('mouseenter', () => {
            let codeli = precode.querySelector('.copy')
            codeli.style.opacity = '1'
          })

          precode.addEventListener('mouseleave', () => {
            let codeli = precode.querySelector('.copy')
            codeli.style.opacity = '0'
          })
        })
      }
    }
  }
</script>

<style lang="less">
  /*@import '../../node_modules/highlight.js/styles/vs2015.css';*/

    iframe {
      width: 100%;
      height: 100%;
    }


</style>
