<template>
  <div class="detail_container">
    <div class="detail_inner">
      <TitleHeader class="title" :article="article"/>
      <Article :content="article.content"/>
      <div class="reference_container" v-if="article.refs">
        <h3>参考</h3>
        <ul>
          <li v-for="(item, index) in article.refs.split(',')">{{item}}</li>
        </ul>
      </div>
      <div class="nav_container">
        <div class="nav_item_container" v-if="pre" @click="toggleArticle(0)">
          <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
          <span>{{pre.title}}</span>
        </div>
        <div class="nav_item_container right" v-if="next" @click="toggleArticle(1)">
          <span>{{next.title}}</span>
          <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Article from '../components/Article'
  import TitleHeader from '../components/TitleHeader'
    export default {
      name: "Detail",

      data() {
        return {
          article: {},
          pre: null,
          next: null,
        }
      },

      created() {
        this.article = JSON.parse(this.$utils.get('article'))

        // 获取上下文章
        this.fetchData()
      },

      components: {
        Article,
        TitleHeader
      },
      methods: {
        fetchData() {
          this.$http.nextArticle({
            id: this.article.id
          }).then(res => {
            if (res.code == 0) {
              this.pre = res.data.pre
              this.next = res.data.next
            }
          })
        },

        toggleArticle(type) {
          let data = type == 0 ? this.pre : this.next
          this.$utils.set('article', JSON.stringify(data))
          this.$router.push(`${data.id}`)
        },
      },
    }
</script>

<style scoped lang="less">
  @import "../css/common";
  .detail_container {
    width: 100px;
    .detail_inner {
      .whiteColor();
      .boxShadow;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      padding: 40px 2.2em;
      animation: _opacity_size .5s linear 0s 1;
      .title {
        padding-top: 10px;
        padding-bottom: 50px;
      }
      .reference_container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 40px;
        overflow: hidden;
        h3 {
          margin-bottom: 10px;
        }
        ul {
          padding: 20px 0;
          padding-left: 30px;
          margin-right: 0;
          width: 100%;
          text-align: left;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            cursor: pointer;
            color: #555;
            margin-right: 40px;
            list-style: circle;
            text-decoration: underline;
            margin-bottom: 10px;
          }
        }
      }

      .nav_container {
        display: flex;
        padding-top: 60px;
        justify-content: space-between;
        position: relative;

        .nav_item_container {
          display: flex;
          line-height: 2;
          cursor: pointer;
        }

        .right {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
</style>
