<template>
  <div id="app">
    <router-view class="body_container"/>
    <!--右侧导航区域-->
    <div class="nav">

      <!--右侧导航顶部分类区域-->
      <div class="nav_top">
        <div class="title_container">
          xiao2
        </div>
        <div class="tag_container">
          <ul>
            <li class="active">首页</li>
            <li>归档</li>
            <li>分类</li>
            <li>关于我</li>
          </ul>
        </div>
      </div>

      <!--我的个人信息区域-->
      <div class="nav_bottom">
        <!--头像-->
        <div class="avatar_container">
          <img src="" alt="">
          <div class="name"></div>
        </div>

        <!--文章/分类-->
        <div class="articles_container">
          <div class="ar_item_container">
            <div class="ar_item_container_count">88</div>
            <div class="ar_item_container_category">文章</div>
          </div>
          <div class="ar_item_container">
            <div class="ar_item_container_tag_count">5</div>
            <div class="ar_item_container_tag_category">分类</div>
          </div>
        </div>

        <!--github-->
        <div class="third_container">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "css/reset";
  @import "css/common";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  width: 1000px;
  margin: 0 auto;
  background: cyan;

  .body_container {
    width: 100%;
  }

  /*右侧导航*/
  .nav {
    width: 240px;
    display: flex;
    flex-direction: column;

    .blackTextColor;

    /*导航顶部*/
    .nav_top {
      .whiteColor;
      .boxShadow;
      /*标题*/
      .title_container {
        background: @mainColor;
        height: 86px;
        font-size: 20px;
        line-height: 86px;
        color: white;
        font-weight: 500;
        cursor: pointer;
      }
      /*分类*/
      .tag_container {
        display: flex;
        margin-top: 20px;
        ul {
          display: flex;
          width: 100%;
          flex-direction: column;

          li {
            text-align: left;
            padding: 10px 20px;
            transition: background-color;
            transition-duration: .2s;
            transition-timing-function: ease-in;
            cursor: pointer;
          }

          li.active {
            background-color: #f9f9f9;
          }

          li:hover {
            background-color: #f9f9f9;
          }
        }
      }
    }

    /*个人信息*/
    .nav_bottom {
      margin-top: 10px;
      background: yellow;
      height: 300px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
