<template>
  <div class="article" ref="article">

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
      var hljs = window.hljs


      let md = Markdown({

        html: true,        // Enable HTML tags in source
        xhtmlOut: false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
        breaks: false,        // Convert '\n' in paragraphs into <br>
        langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
                                  // useful for external highlighters.
        linkify: true,        // Autoconvert URL-like text to links

        // Enable some language-neutral replacement + quotes beautification
        typographer: false,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',

        highlight: (str, lang) => {
          this.copyIndex++;

          let index = this.copyIndex - 1;


          if (lang && hljs.getLanguage(lang)) {
            console.log(str, 'lan is ---', lang)
            this.codes.push(str)

            try {
              if (str && str.length > 1) {
                return '<pre class="hljs precopy" index=' + index + ' style="position: relative; margin-bottom: 5px"><code class="hljs">' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
              } else {
                return '<pre class="hljs" index=' + index + ' style="position: relative; margin-bottom: 5px"><code class="hljs">' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
              }

            } catch (__) {
            }
          }

          if (str && str.length > 1) {
            return '<pre class="hljs precopy" style="position: relative"><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
          } else {
            return '<pre class="hljs precopy" style="position: relative"><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
          }
        }
      })


      let result = md.render(this.content)

      let refOk = this.$refs.article
      refOk.innerHTML = result

      // init line
      // hljs.initLineNumbersOnLoad()

      // 复制
      this.copy()

      // a blank
      this.blank()
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

  .article {
    text-align: left;
    img {
      /*width: 100%;*/
      max-height: 400px;
      margin: 0px 0;
      vertical-align: center;
    }

    img::selection {
      background: lightblue;
    }

    p,a,ul {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 16px;
    }

    ul {
      line-height: 1;
    }

    a {
      color: #0366d6;
      text-decoration: none;

    }

    li {
      list-style: disc;
    }

    pre {
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: #f6f8fa;
      border-radius: 3px;
      margin: 1em 0px;
    }

    ul,ol {
      display: block;
      /*list-style-type: disc;*/
      margin-block-start: 0.4em;
      /*margin-block-end: 1em;*/
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;

    }

    ul ul {
      list-style-type: circle;
    }

    li {
      line-height: 1.2;
    }

    ol li {
      padding-left: 0em;
    }

    li+li {
      margin-top: 0.25em;
      line-height: 1.5;
      font-size: 16px;
      color: #24292e;
    }

    h2,h1 {
      padding-bottom: .3em;
      border-bottom: 1px solid #eaecef;
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }

    h3 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }

    hr {
      height: .25em;
      padding: 0;
      margin: 24px 0;
      background-color: #e1e4e8;
      border: 0;
    }

    blockquote {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      padding: 0 1em;
      color: #6a737d;
      border-left: .25em solid #dfe2e5;
    }

    table {
      display: block;
      width: 100%;
      overflow: auto;
      margin-top: 0;
      margin-bottom: 16px;
      border-spacing: 0;
      border-collapse: collapse;

    }

    table tr:nth-child(2n) {
      background-color: #f8f8f8;
    }

    th {
      border: 1px solid #dfe2e5;
      font-weight: 600;
      padding: 0;
      display: table-cell;
      vertical-align: inherit;
    }

    table,thead,tr, th, tbody, td, img{
      font-size: 16px;
      line-height: 1.5;
    }


    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
    }

    tr {
      display: table-row;
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }

    td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }

    th {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
      font-weight: 600;
      padding: 0;
      display: table-cell;
      vertical-align: inherit;
    }

    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }

    code {
      white-space: pre-wrap;
      overflow: auto;
      color: #032f62;
      font-size: 85%;
      line-height: 1.45;
      background: rgba(27,31,35,.05);
      padding: .2em .4em;
      border-radius: 3px;
    }

    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      background: #f6f8fa;
    }

    .precopy {
      .copy {
        border-radius: 5px;
        text-align: center;
        line-height: 35px;
        right: 15px;
        top: 15px;
        opacity: 0;
        background-color: rgba(0,0,0,0.3);
        cursor: pointer;
        transition: opacity .2s linear;
        z-index: 100;
      }
    }
    .hljs-keyword,.hljs-title,.hljs-built_in,.hljs-string,.hljs-number{
      color: #d73a49;
      font-size: 85%;
      line-height: 1.45;
      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    }


    .hljs-string,.hljs-number {
      color: #032f62;
    }

    .hljs-title {
      color: #6f42c1;
    }

    .hljs-built_in {
      color: #005cc5;
    }

  }


</style>
