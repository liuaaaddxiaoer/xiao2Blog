<template>
  <div class="detail_container">
    <div class="detail_inner">
      <TitleHeader class="title"/>
      <Article />
    </div>
  </div>
</template>

<script>
  import Article from '../components/Article'
  import TitleHeader from '../components/TitleHeader'
    export default {
      name: "Detail",
      components: {
        Article,
        TitleHeader
      }
    }
</script>

<style scoped lang="less">
  @import "../css/common";
  .detail_container {
    .detail_inner {
      display: flex;
      flex-direction: column;
      animation: _opacity_size 2s linear 0s 1;
      .title {
        padding: 50px 0;
      }
    }
  }
</style>
