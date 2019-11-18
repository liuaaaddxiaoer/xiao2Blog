<template>
    <div class="home_container">
      <section v-for="(item, index) in articles" :key="index">
        <div class="section">
          <div class="section_inner">
            <div class="header_container">
              <h3>使用 Xcode 检测代码覆盖率</h3>
              <div class="header_item_container">
                <div class="item_container">
                  <i class="iconfont icon-rili" />
                  <span>发表于 2019-04-02</span>
                </div>
                <div class="item_container">
                  <i class="iconfont icon-wendang"/>
                  <span>分类 <b>iOS 知识小集</b></span>
                </div>
              </div>
            </div>
            <img src="https://file.kangzubin.com/blog/static/20190219/0.jpeg" alt="" v-if="index == 0 ? true : false">
            <p>“代码覆盖率”是软件测试中的一种度量，用于描述工程中源代码被测试到的比例和程度。

              在做单元测试时，代码覆盖率经常被拿来作为衡量测试质量好坏的指标，同时也能在一定程度上检测出工程中的冗余代码。</p>
            <button>阅读全文>></button>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
      name: "Home",
      data() {
        return {
          articles: [1, 2]
        }
      }
    }
</script>

<style scoped lang="less">

  @import "../css/common";

  .home_container {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    section {
      display: flex;
      margin-bottom: 15px;
      flex-direction: column;
      /*background: red;*/
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
