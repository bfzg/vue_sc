<template>
	<div class="like">
		<div class="text_box">
			<span>猜你喜欢</span>
		</div>
		<ul>
			<li v-for="(item,index) in likeList" :key="index">
				<h2>
					<img v-lazy="item.imgUrl" alt="">
				</h2>
				<h3>
					{{item.name}}
				</h3>
				<div>
					<span>￥</span>
					<b>{{item.price}}</b>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
      props:{
        likeList:Array
      }
	}
</script>

<style lang="less" scoped>
	.like {
		ul {
			display: flex;
			flex-wrap: wrap;

			li {
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 50%;

				img {
					width: 176px;
					height: 176px;
				}

				h3 {
					padding:6px 0;
					width: 90%;
					font-size: 16px;
					color: #222;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-weight: 400;
				}
				div{
					padding: 3px 0;
					width: 90%;
					text-align: left;
					font-size: 24px;
					color:red;
					span{
						font-size: 16px;
					}
				}
			}
		}
		.text_box {
		  text-align: center;
		  margin: 5px 0;
		  span {
		    font-size: 16px;
		  }
		}
	}
</style>
