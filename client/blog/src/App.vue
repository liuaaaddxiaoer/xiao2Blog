<template>
  <div id="app">
    <Aplayer
      autoplay
      v-once
      :music="{
    title: 'secret  base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'http://m8.music.126.net/20200106110328/a55697cf3f744a2d743067b3059b99e6/ymusic/5359/0f5e/075a/d370955f4e849960557700479ce0b834.mp3',
    }"
      :float="true"
      class="player"
      :mini="false"
    />
    <transition name="fade">
      <router-view class="body_container" :key="$route.fullPath" />
    </transition>
    <!--右侧导航区域-->
    <div class="nav">
      <!--右侧导航顶部分类区域-->
      <div class="nav_top">
        <div class="title_container">xiao2</div>
        <div class="tag_container">
          <ul>
            <li v-for="(item, index) in navs" :key="index" @click="clickNav(index)">{{item}}</li>
          </ul>
        </div>
      </div>

      <!--我的个人信息区域-->
      <div class="nav_bottom">
        <!--头像-->
        <div class="avatar_container">
          <img
            src="https://avatars0.githubusercontent.com/u/15266184?s=460&v=4"
            width="120px"
            height="120px"
            alt
          />
          <div class="name">xiao2</div>
        </div>

        <!--文章/分类-->
        <div class="articles_container">
          <div class="ar_item_container" @click="articleClick">
            <p class="ar_item_container_count">{{count.articleCount || 0}}</p>
            <div class="ar_item_container_category">文章</div>
          </div>
          <div class="ar_item_container" @click="categoryClick">
            <p class="ar_item_container_tag_count">{{count.categoryCount || 0}}</p>
            <div class="ar_item_container_tag_category">分类</div>
          </div>
        </div>

        <!--github-->
        <div class="third_container">
          <ul>
            <li class="iconfont icon-github">
              <a href="https://github.com/liuaaaddxiaoer" target="_blank" />
            </li>
            <!--<li></li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";

export default {
  name: "App",

  data() {
    return {
      navs: ["首页", "归档", "分类", "关于我"],
      count: {}
    };
  },

  created() {
    // 进制打印
    Aplayer.disableVersionBadge = true;

    // 获取文章/分类数量
    this.fetchArticleCount();
  },

  components: {
    Aplayer
  },

  mounted() {
    // 吸顶
    this.stickAvatarInfoModule();
  },

  methods: {
    // 点击文章
    articleClick() {
      this.$router.push("/archives");
    },

    // 点击分类
    categoryClick() {
      this.$router.push("/categories");
    },

    // 吸顶
    stickAvatarInfoModule: () => {
      let nav_top = document.querySelector(".nav_top");
      let nav_bottom = document.querySelector(".nav_bottom");
      let app = document.querySelector("#app");

      window.addEventListener("scroll", e => {
        let top = window.pageYOffset || document.documentElement.scrollTop;

        let mt = window.getComputedStyle(nav_bottom).marginTop;
        let mtF = parseFloat(mt);

        let appMarginR = parseFloat(window.getComputedStyle(app).marginRight);
        let appMarginT = parseFloat(window.getComputedStyle(app).marginTop);
        let appW = parseFloat(window.getComputedStyle(app).width);

        if (top >= nav_top.offsetHeight + mtF && appW >= 1100) {
          // alert(1)
          nav_bottom.style.position = "fixed";
          nav_bottom.style.top = (-appMarginT).toString() + "px";
          nav_bottom.style.right = appMarginR.toString() + "px";
          nav_bottom.style.width =
            parseFloat(window.getComputedStyle(nav_top).width).toString() +
            "px";
        } else {
          nav_bottom.style.position = "inherit";
        }
      });
    },

    // 点击右侧导航区域
    clickNav(index) {
      // 首页
      if (index == 0) {
        this.$router.push("/");
      } else if (index == 1) {
        // 归档
        this.articleClick();
      } else if (index == 2) {
        // 分类
        this.categoryClick();
      }
    },

    // 获取文章/分类数量
    fetchArticleCount() {
      this.$http.articleCount().then(res => {
        if (res.code == 0) {
          this.count = res.data;
        }
      });
    }
  }
};
</script>

<style lang="less">
@import "css/reset";
@import "css/common";
@import "assets/iconfont/iconfont.css";

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-enter {
  opacity: 0;
}

@media all and (min-width: 1100px) {
  #app {
    width: 1100px;
    .nav {
      width: 200px;
    }
  }
}

@media all and (max-width: 1100px) {
  #app {
    /*width: 100%;*/
    .nav {
      width: 0;
      overflow: hidden;
    }
    .nav .nav_bottom {
      width: 0;
    }
  }
}

#app {
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #24292e;
  display: flex;
  flex-direction: row;

  height: 100%;
  margin: 0 auto;
  align-items: flex-start;

  .player {
    position: absolute;
    left: 0;
    bottom: 100px;
  }

  .body_container {
    flex: 1;
    height: auto;
  }

  /*右侧导航*/
  .nav {
    display: flex;
    margin-left: 15px;
    flex-direction: column;
    transition: width 0s linear 0s;
    .blackTextColor;

    /*导航顶部*/
    .nav_top {
      .whiteColor;
      .boxShadow;

      animation: _opacity_size 0.35s linear 0s 1;
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
      animation: opacity_size 0.5s linear 0.35s 1;
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
          cursor: pointer;
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

        li {
          position: relative;
          a {
            position: absolute;
            display: block;
            left: -15px;
            top: -15px;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
