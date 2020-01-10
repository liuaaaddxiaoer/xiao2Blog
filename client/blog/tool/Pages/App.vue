<template>
  <el-container class="container">
    <el-aside>
      <HomeAside />
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import HomeAside from "../components/HomeAside";

export default {
  data() {
    return {};
  },
  components: {
    HomeAside
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}
</style>