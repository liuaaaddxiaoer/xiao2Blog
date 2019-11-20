<template>
  <div class="detail_container">
    <div class="detail_inner">
      <TitleHeader class="title"/>
      <Article />
      <div class="reference_container">
        <h3>参考</h3>
        <ul>
          <li>https://www.baidu.com</li>
          <li>https://www.baidu.com</li>
          <li>https://www.baidu.com</li>
          <li>https://www.baidu.com</li>
          <li>https://www.baidu.com</li>
        </ul>
      </div>
      <div class="nav_container">
        <div class="nav_item_container">
          <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
          <span>硕大的多撒多</span>
        </div>
        <div class="nav_item_container">
          <span>大萨达撒大大萨达多</span>
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
      components: {
        Article,
        TitleHeader
      }
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
      animation: _opacity_size 2s linear 0s 1;
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
        padding-top: 20px;
        justify-content: space-between;
      }
    }
  }
</style>
