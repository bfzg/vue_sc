<template>
	<div class="home">
		<div class="headers">
			<Header></Header>
			<ly-tab v-model="selectedId" :items="items" :options="options" @change="changeTab"/>
		</div>
		<section class="wrapper" ref='wrapper'>
			<div >
				<div	v-for='(item,index) in newData'
              :key='index'>
					<Swiper v-if="item.type == 'swiperList'" :swiperList='item.data'></Swiper>
					<Icons 	v-if='item.type=="iconsList"'  :iconsList='item.data'></Icons>
					<Recommend v-if='item.type=="recommendList"' :recommendList="item.data"></Recommend>
					<Ad v-if="item.type == 'adList'" :adList="item.data"></Ad>
					<Like v-if="item.type ==='likeList'" :likeList="item.data"></Like>
				</div>
			</div>
		</section>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from "@/components/home/Header"
	import TabBar from "../components/common/tabbar.vue";
	import Swiper from "@/components/home/Swiper";
	import Icons from "@/components/home/Icons";
	import Recommend from "@/components/home/Recommend.vue";
	import Like from "@/components/home/like.vue";
	import Ad from "@/components/home/Ad.vue";

	//引入插件
	import BetterScroll from '@better-scroll/core'
  import http from '@/common/api/request'
	export default {
		name: "HomeView",
		data() {
			return {
				selectedId: 0,
				items: [],
				newData:[],
				oBetterScroll: "",
				tBetterScroll: "",
				options: {
					activeColor: "#b0352f",
				},
			};
		},
		components: {
			TabBar,
			Header,
			Swiper,
			Icons,
			Recommend,
			Like,
			Ad
		},
		mounted() {
			let wrapper = document.querySelector('.wrapper')
			let scroll = new BetterScroll(wrapper);
		},
		methods:{
      async addData( index ){
        let res = await http.$axios({
          url:'/api/index_list/'+ index +'/data/1'
        });
       if(res.constructor != Array){
         this.newData = res.data;
       }
       else
       {
         this.newData = res;
       }

        this.$nextTick(()=>{
          this.tBetterScroll = new BetterScroll(this.$refs.wrapper, {
            movable: true,
            zoom: true
          })
        })
      },
			changeTab(item,index){
        this.addData(index);
			},
			async getData(){

				let res = await http.$axios({
					url:'/api/index_list/0/data/1'
				});
				this.items = Object.freeze( res.topBar);
				this.newData = Object.freeze(res.data);
        //当元素都执行完毕后调用
        this.$nextTick(()=>{
          this.tBetterScroll = new BetterScroll(this.$refs.wrapper, {
            movable: true,
            zoom: true
          })
        })
			}
		},
		created(){
			this.getData()
		}
	};
</script>
<style lang="less" scoped>
	.wrapper{
	position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 550px;
		overflow:hidden;
	}
	.ly-tab {
		font-size: 0px !important;
	}
	.headers {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9999;
	}
	section {
		margin-top: 112px;
	}
</style>
