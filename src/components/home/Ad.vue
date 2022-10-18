<template>
	<div class="ad">
    <ul>
      <li v-for="(item,index) in adList">
        <img :src="item.imgUrl" alt="">
      </li>
    </ul>
	</div>
</template>

<script>
export default {
  props:{
    adList: Array
  }
}
</script>

<style lang="less" scoped>
  .ad{
    width: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
