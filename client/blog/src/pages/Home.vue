<template>
    <div class="home_container">
      <section v-for="(item, index) in articles" :key="index">
        <div class="section">
          <div class="section_inner">
            <TitleHeader class="title" :article="item"/>
            <img :src="item.url" alt="" v-if="item.url && (item.url.startsWith('http') || item.url.startsWith('https'))">
            <p>{{item.desc}}</p>
            <button @click="goToDetail(index)">阅读全文>></button>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
  import TitleHeader from '../components/TitleHeader'
    export default {
      name: "Home",
      data() {
        return {
          articles: []
        }
      },
      components: {
        TitleHeader
      },

      created() {
        this.$http.articleList().then(res => {
          if (res.code == 0) {
            this.articles = res.data
          }
        })
      },

      methods: {
        goToDetail(index) {
          console.log(this.articles[index])
          let article = this.articles[index]
          this.$utils.set('article', JSON.stringify(article))

          this.$router.push(`detail/${article.id}`)
        }
      }

    }
</script>

<style lang="less">

  @import "../css/common";

  .home_container {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    section {
      margin-bottom: 15px;
      flex-direction: column;
      padding: 30px 25px;
      .whiteColor;
      .boxShadow;
      .section {
        justify-content: center;
        .section_inner {
          opacity: 0;
          animation: _opacity_size 1.2s .35s;
          animation-fill-mode: forwards;
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
            object-fit: fill;
            max-height: 30em;
            padding: 0 1em;
            margin-top: 40px;
          }
          p {
            padding: 40px 0;
            line-height: 2;
          }
          button {
            align-self: center;
            padding: 8px 15px;
            .mainBgColor;
          }
        }
      }
    }
  }
</style>
