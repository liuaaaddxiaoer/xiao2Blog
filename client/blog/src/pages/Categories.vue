<template>
    <div class="category_container">
      <h3>目前共有{{categorys.length}}个分类</h3>
      <ul class="item_container">
        <li v-for="(item, index) in categorys" :key="index"  @click="clickCategory(index)">
          {{item.name}}
          <b>{{'(' + item.articles.length + ')'}}</b>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "Cateories",
    data() {
      return {
        categorys: [],
      }
    },

    created() {
      this.fetchData()

    },

    methods: {

      fetchData() {
        this.$http.categoryList().then(res => {
          if (res.code == 0) {
            this.categorys = res.data
          }
        })
      },

      clickCategory(index) {
        this.$router.push({
          path: `archives/${this.categorys[index].name}`,

        })
      }
    },
  }
</script>

<style scoped lang="less">

  @import "../css/common";

  .category_container {
    display: flex;
    box-sizing: border-box;
    background: white;
    min-height: 582px;
    padding: 60px 50px;
    color: black;
    .boxShadow;
    flex-direction: column;
    .item_container {
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
      cursor: pointer;
      li {
        list-style: circle;
        position: relative;
        padding-bottom: 1px;
        border-bottom: 1px solid #555;
        font-size: 18px;
        margin-bottom: 15px;
        b {
          color: #bbb;
          position: absolute;
          font-weight: normal;
          right: -20px;
          top: 50%;
          font-size: 15px;
          transform: translate(0, -50%);
        }
      }
    }
  }
</style>
