<template>
    <div class="home_container">
      <section v-for="(item, index) in articles" :key="index">
        <div class="section">
          <div class="section_inner">
            <div class="header_container">
              <h3>{{item.title}}</h3>
              <div class="header_item_container">
                <div class="item_container">
                  <i class="iconfont icon-rili" />
                  <span>发表于 {{item.created_time}}</span>
                </div>
                <div class="item_container">
                  <i class="iconfont icon-wendang"/>
                  <span>分类 <b>{{item.category}}</b></span>
                </div>
              </div>
            </div>
            <img :src="item.url" alt="" v-if="item.url && (item.url.startsWith('http') || item.url.startsWith('https'))">
            <p>{{item.desc}}</p>
            <button @click="goToDetail(index)">阅读全文>></button>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
  import qs from 'QS'
    export default {
      name: "Home",
      data() {
        return {
          articles: [1, 2, 3, 4]
        }
      },
      components: {
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
          this.$utils.set('article', JSON.stringify(this.articles[index]))

          this.$router.push('detail?a=1')
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
        display: flex;
        .section_inner {
          opacity: 0;
          animation: _opacity_size 1.2s .35s;
          animation-fill-mode: forwards;
          display: flex;
          flex-direction: column;
          .header_container {
            display: flex;
            flex-direction: column;
            /*background: red;*/
            .header_item_container {
              justify-content: center;
              display: flex;
              .item_container {
                align-items: center;
                display: flex;
                margin-left: 10px;
                margin-top: 10px;
                i {
                  margin-right: 10px;
                }
              }
            }
          }
          img {
            width: 100%;
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
