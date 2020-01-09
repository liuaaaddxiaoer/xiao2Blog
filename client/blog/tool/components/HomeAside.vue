
<template>
  <div class="home_aside_container">

    <a href="https://github.com/liuaaaddxiaoer" class="avatar" target="_blank">
      <img src="https://avatars0.githubusercontent.com/u/15266184?s=460&v=4" alt="github">
    </a>

    <el-menu 
      :default-active="side_selected_Index"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :select="this.select"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      side_selected_Index: "1"
    }
  },
  methods: {
    select(index) {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .home_aside_container {
    height: 100%;
    background-color: #545c64;

    .avatar {
      
      padding: 50px 0;
      display: flex;
      justify-content: center;
      img {
       
        width: 150px;
        height: 150px;

      }
    }
  }
</style>