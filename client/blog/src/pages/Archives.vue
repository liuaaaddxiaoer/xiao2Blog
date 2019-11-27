<template>
    <div class="archives_container">
      <div class="inner">
        <div class="section_list">
          <h3 class="item title">目前共计88篇，Go</h3>
          <h5 class="item year">2019</h5>
          <li class="item">iOS <b>使用xcode检测</b></li>
          <li class="item">Android</li>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Archives"
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
