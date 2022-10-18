<template>
  <ul class="icons">
    <li v-for="(item,index) in iconsList" :key="index">
      <img :src="item.imgUrl"/>
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
 props:{
   iconsList:Array
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
