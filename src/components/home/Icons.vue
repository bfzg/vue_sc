<template>
  <ul class="icons">
    <li v-for="(item,index) in iconsList" :key="index">
      <img :src="item.imgUrl" alt />
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      iconsList: [
        {
          id: 1,
          title: "自饮茶",
          imgUrl: "./images/icons1.png"
        },
        {
          id: 2,
          title: "白茶",
          imgUrl: "./images/icons1.png"
        },
        {
          id: 3,
          title: "红茶",
          imgUrl: "./images/icons1.png"
        },
        {
          id: 4,
          title: "自饮茶",
          imgUrl: "./images/icons1.png"
        },
        {
          id: 5,
          title: "自饮茶",
          imgUrl: "./images/icons1.png"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.icons {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    span {
	padding: 6px 0;
      font-size: 16px;
    }
  }
}
</style>