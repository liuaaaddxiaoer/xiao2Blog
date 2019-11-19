<template>
    <div class="title_container">
      <h3>2019 年技术大趋势预测</h3>
      <div class="category_container">
        <div class="item_container">
          <i class="iconfont icon-rili"></i>
          <span>2019-01-28</span>
        </div>
        <div class="line"></div>
        <div class="item_container">
          <i class="iconfont icon-wendang"></i>
          <span>分类 <b>翻译</b></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TitleHeader"
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
      .item_container {
        display: flex;
        align-items: center;
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
