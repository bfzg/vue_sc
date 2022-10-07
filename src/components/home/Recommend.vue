<template>
  <div class="recommend">
    <div class="text_box">
      <span>爆款推荐</span>
    </div>
    <ul>
      <li v-for="(item,index) in recList" :key="index">
        <van-card
          num="2"
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          :thumb="item.thumb"
          :tag="item.tag"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recList: [
        {
          price: "20",
          desc: "红茶冲水会发红",
          title: "红茶",
          thumb: "./images/goods1.jpg",
          tag: "特价"
        },
        {
          price: "20",
          desc: "红茶冲水会发红",
          title: "红茶",
          thumb: "./images/goods1.jpg",
          tag: "特价"
        },
        {
          price: "20",
          desc: "红茶冲水会发红",
          title: "红茶",
          thumb: "./images/goods1.jpg",
          tag: "特价"
        },
        {
          price: "20",
          desc: "红茶冲水会发红",
          title: "红茶",
          thumb: "./images/goods1.jpg",
          tag: "特价"
        },
        {
          price: "20",
          desc: "红茶冲水会发红",
          title: "红茶",
          thumb: "./images/goods1.jpg",
          tag: "特价"
        }
      ]
    };
  }
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