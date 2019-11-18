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
          <img src="https://kangzubin.com/images/avatar.jpg" alt="">
          <div class="name">xiao2</div>
        </div>

        <!--文章/分类-->
        <div class="articles_container">
          <div class="ar_item_container">
            <p class="ar_item_container_count">88</p>
            <div class="ar_item_container_category">文章</div>
          </div>
          <div class="ar_item_container">
            <p class="ar_item_container_tag_count">5</p>
            <div class="ar_item_container_tag_category">分类</div>
          </div>
        </div>

        <!--github-->
        <div class="third_container">
          <ul>
            <li class="iconfont icon-github"></li>
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
  @import "assets/iconfont/iconfont.css";


  @media all and (min-width: 1024px){
    #app {
      width: 1024px;
      .nav {
        width: 240px;
      }
    }
  }

  @media all and (max-width: 1024px){
    #app {
      /*width: 100%;*/
      .nav {
        width: 0;
        overflow: hidden;
      }
    }
  }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;

  height: 100%;
  margin: 0 auto;

  .body_container {
    width: 100%;
  }

  /*右侧导航*/
  .nav {
    display: flex;
    margin-left: 15px;
    flex-direction: column;

    .blackTextColor;

    /*导航顶部*/
    .nav_top {
      .whiteColor;
      .boxShadow;

      animation: _opacity_size .35s linear 0s 1;
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
            transition-duration: 0.3s;
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
      opacity: 0;
      animation: opacity_size .5s linear 0.35s 1;
      animation-fill-mode: forwards;
      margin-top: 15px;
      padding: 20px;
      .whiteColor;
      .boxShadow;
      height: 300px;
      display: flex;
      flex-direction: column;
      .avatar_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 700;
        font-size: 15px;
        img {
          margin-bottom: 8px;
        }
      }

      /*文章 分类*/
      .articles_container {
        display: flex;
        justify-content: center;
        padding: 20px 0;
        .ar_item_container {
          display: flex;
          flex-direction: column;
          color: #262a30;
          p {
            font-weight: 500;
            font-size: 15px;
          }
          div {
            color: #999;
            font-size: 13px;
          }
          margin-left: 10px;

        }

        .ar_item_container:last-child {
          border-left: 1px solid #eee;
          padding: 0 10px;
        }
      }

      .third_container {
        display: flex;
        justify-content: center;

       li:hover {
         color: black;
         cursor: pointer;
       }
      }


    }
  }
}
</style>
