<template>
    <div class="archives_container">
      <div class="inner">
        <div class="section_list">
          <h3 class="item title">{{title()}}</h3>
          <div class="year_container" v-for="(item, index) in items" :key="index">
            <h5 class="item year">{{item.title}}</h5>
            <li class="item" v-for="(article, index2) in item.articles" :key="index2" @click="articleClick(article)">{{mytime(article.created_time)}} <b>{{article.title}}</b></li>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Archives",
    data() {
      return {
        items: [],
        count: 0,
        category: ''
      }
    },

    created() {

      this.categorys()

      this.fetchData()
    },


    watch: {

      '$route'() {
        this.categorys()
        this.fetchData()
      }
    },

    methods: {

      articleClick(article) {
        this.$utils.set('article', JSON.stringify(article))
        this.$router.push(`/detail/${article.id}`)
      },

      fetchData() {
        this.$http.articleList({
          order: 1,
          category: this.category || ''
        }).then(res => {

          let data  = res.data


          let nowYear = new Date().getFullYear()

          let items = []

          if (res.code == 0 && data.length > 0) {
            this.count = data.length
            nowYear = new Date(data[0].created_time).getFullYear()

            let item = {}
            item.articles = []

            data.forEach((value) => {
              let date = new Date(value.created_time).getFullYear()

              if (nowYear == date) {

              } else {
                nowYear = date
                item = {}
                item.articles = []
              }

              item.title = date
              item.articles.push(value)

              if (item.articles.length > 0) {
                if (items.indexOf(item) == -1) {
                  items.push(item)
                }
              }

            })
          }

          this.items = items

        })
      },

      title() {
        return this.category ? this.category : '目前共有' + this.count + '篇'
      },

      categorys() {
        let route = this.$route.params
        this.category = route.category
      },

      mytime(time) {
        let date = new Date(time)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay()
      }
    },
  }
</script>

<style scoped lang="less">

  @import "../css/common";

  .archives_container {
    display: flex;
    flex-direction: column;
    background: white;
    text-align: left;
    align-items: stretch;
    padding: 60px;
    min-height: 582px;
    .boxShadow;
    .inner {
      border-left: 2px solid #f5f5f5;
      display: flex;
      flex-direction: column;

      .section_list {
        display: flex;
        flex-direction: column;

        .item {
          position: relative;
          padding-left: 15px;
          padding-top: 30px;
          padding-bottom: 8px;
        }

        li {
          border-bottom: 1px dashed #bbb;
          text-align: left;
          line-height: 2;
          cursor: pointer;
        }

        .item.year {
          border-bottom: none;
        }


        .item:before {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #bbb;
          display: block;
          content: '';
          left: 0;
          top: 55%;
          margin-left: -4px;
          margin-top: 3px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
