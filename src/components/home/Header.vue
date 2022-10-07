<template>
  <div>
    <el-row class="header">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <img class="header_img" src="@/assets/xy.jpg" alt />
        </div>
      </el-col>
      <el-col :span="15">
        <div class="grid-content bg-purple-light input">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple icon">
          <i class="el-icon-microphone"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  // overflow: hidden;
}
.header {
  width: 100%;
  height: 65px;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  .header_img {
    width: 65px;
  }
  .input{
	margin-top: 4px;
  }
  .icon {
    position: fixed;
    top: 10px;
    right: 16px;
  }
}
.bg-purple {
  height: 65px;
}
</style>
