<template>
  <div class="apns_section_container">
    <h3>iOS推送 支持最新P8，支持P12</h3>

    <!-- 鉴权 -->
    <div class="token">
      <div class="token_header">
        <span>鉴权方式:</span>
        <el-radio v-model="tokenType" label="1" border>Token Authentication (p8)</el-radio>
        <i class="el-icon-question" />
        <el-radio v-model="tokenType" label="2" border>APNs证书（P12）</el-radio>
        <i class="el-icon-question" />
      </div>
    </div>
    <!-- p8证书 -->
    <transition name="fade">
      <div class="p8_container" v-show="tokenType == 1">
        <div class="item_container">
          <span>Bundle ID</span>
          <el-popover placement="top-start" width="200" trigger="hover" content="应用程序包名">
            <i slot="reference" class="el-icon-question"></i>
          </el-popover>

          <el-input type="text" v-model="bundleId"/>
        </div>

        <div class="item_container">
          <span>Key ID:</span>
          <el-popover placement="top-start" width="200" trigger="hover" content="申请P8证书时候的Key">
            <i slot="reference" class="el-icon-question"></i>
          </el-popover>
          <el-input type="text" />
        </div>

        <div class="item_container">
          <span>Team ID:</span>
          <el-popover
            placement="top-start"
            trigger="hover"
            content="个人或公司开发者账号的ID，登陆Apple development可查看"
          >
            <i slot="reference" class="el-icon-question"></i>
          </el-popover>
          <el-input type="text" />
        </div>

        <div class="item_container">
          <span>P8证书</span>
          <el-popover
            placement="top-start"
            trigger="hover"
            width="300"
            content="Token Authentication是APNs新推出的推送鉴权方式，生成的 Auth Key（文件扩展名为p8）不再有过期时间，且可以被开发者账户下多个app一起使用。"
          >
            <i slot="reference" class="el-icon-question"></i>
          </el-popover>
          <!-- 上传组件 -->
          <el-upload class="upload-demo" 
          drag 
          action="http://localhost:30001/upload/" 
          :data="extra"
          :before-upload="before_upload"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传.p8文件</div>
          </el-upload>
          <el-button type="primary" class="submit" round disabled>确认添加</el-button>
        </div>
      </div>
    </transition>

    <!-- apns证书 -->
    <transition name="fade">
      <div class="apns_container" v-show="tokenType == 2">
        <div class="mode">
          <el-radio v-model="mode" label="1" border>开发证书</el-radio>
          <el-radio v-model="mode" label="2" border>生产证书</el-radio>
        </div>

        <div class="item_container">
          <span>Bundle ID</span>
          <el-popover placement="top-start" width="200" trigger="hover" content="应用程序包名">
            <i slot="reference" class="el-icon-question"></i>
          </el-popover>

          <el-input type="text" v-model="bundleId"/>
        </div>

        <div class="item_container">
          <span>证书密码</span>
          <i class="el-icon-question"></i>
          <el-input type="text" />
        </div>
        <div class="item_container">
          <span>Apns证书:</span>
          <i class="el-icon-question" />
          <!-- 上传组件 -->
          <el-upload class="upload-demo" drag action="https://jsonpla">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传.p12文件</div>
          </el-upload>
          <el-button type="primary" class="submit" round disabled>确认添加</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Apns",
  data() {
    return {
      tokenType: "1", // 鉴权方式 1是tokenP8 2 是apns
      mode: "2", // apns 1是dev 2是dis
      bundleId: '', // app bundle id
    };
  },
  computed: {
    extra() {
      return {
        id: this.bundleId
      }
    }
  },
  created() {
    
  },
  methods: {
    before_upload(file) {
      console.log(file)
      // bundle id 不可以为空
      let id = this.bundleId
      if (file.name.ends == 'p8' && id) {
        return true
      }  else {
        return false
      }
    
    }
  }
};
</script>

<style lang="less" scoped>
.apns_section_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  padding-top: 50px;
  h3 {
    margin-bottom: 50px;
  }
}
.token {
  display: flex;
  flex-direction: column;
  .token_header {
    display: flex;
    align-items: center;
  }
}

.el-icon-question {
  font-size: 20px;
  margin-left: -15px;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
    color: #409eff;
  }
}

.p8_container,
.apns_container {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .item_container {
    padding: 20px 0;
    span {
      padding-right: 20px;
    }
    .submit {
      margin-top: 20px;
      width: 100%;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>