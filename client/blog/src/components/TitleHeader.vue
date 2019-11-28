<template>
  <div class="title_container">
    <h3>{{article.title}}</h3>
    <div class="category_container">
      <div class="item_container">
        <i class="iconfont icon-rili"></i>
        <span>{{time}}</span>
      </div>
      <div class="line"></div>
      <div class="item_container" @click="clickCategory">
        <i class="iconfont icon-wendang"></i>
        <span>分类 <b>{{article.category}}</b></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TitleHeader",

    computed: {
      time() {
        let time = this.article.created_time
        let date = new Date(time)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay()
      }
    },

    props: {
      article: {
        type: Object,
        required: true,
      }
    },

    methods: {
      clickCategory(index) {
        this.$router.push({
          path: `/archives/${this.article.category}`,
        })
      }
    },
  }
</script>

<style scoped lang="less">
  .title_container {
    display: flex;
    flex-direction: column;
    font-size: 13px;

    h3 {
      font-size: 20px;
      color: #555;
      font-weight: 500;
    }

    .category_container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 12px;

      .item_container {
        display: flex;
        align-items: center;

        i {
          margin-right: 5px;
        }

        b {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .line {
        width: 1px;
        height: 12px;
        background-color: #999;
        margin: 0 12px;
      }
    }
  }
</style>
