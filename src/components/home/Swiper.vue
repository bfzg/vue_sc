<template>
	<div class="swiper">
		<van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item  v-for="(item,index) in swiperList" :key="index">
          <img :src="item.imgUrl" />
      </van-swipe-item>

		</van-swipe>
	</div>
</template>

<script>
	export default {
		name: "Swiper",
		props: {
			swiperList: Array
		},
	}
</script>

<style lang="less" scoped>
	.swiper {
		margin-top: 0.2rem;
	}

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
	 .van-swipe-item{
	 	width: 100%;
	 	height: 200px;
     img{
       width: 100%;
       height: 100%;
     }
	 }
</style>
