<template>
  <div class="recommend">
    <div class="text_box">
      <span>爆款推荐</span>
    </div>
    <ul>
      <li v-for="(item,index) in recommendList" :key="index">
        <van-card

          :price="item.price"
          :desc="item.content"
          :title="item.name"
          :thumb="item.imgUrl"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 props:{recommendList:Array}
};
</script>

<style lang="less" scoped>
.recommend {
  margin-top: 10px;
  ul {
    li {
      margin-bottom: 4px;
      .van-card {
        // border-bottom: 1px solid rgb(133, 133, 133);
        background-color: rgba(239, 239, 239,.9);
		width: 90%;
		margin: 0 auto;
		border-radius: 10px;
      }
    }
  }
  .text_box {
    text-align: center;
    span {
      font-size: 16px;
    }
  }
}
</style>
