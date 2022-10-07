<template>
  <div class="home">
    <Header></Header>
    <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeType"
    />
	<section>
		<Swiper></Swiper>
		<Icons></Icons>
    <Recommend></Recommend>
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
export default {
  name: "HomeView",
  data(){
    return {
      selectedId: "0",
      items:[
        {id:0,label:'推荐'},
        {id:1,label:'大红袍'},
        {id:2,label:'铁观音'},
        {id:3,label:'绿茶'},
        {id:4,label:'普洱'},
        {id:5,label:'茶具'},
        {id:6,label:'花茶'},
      ],
      oBetterScroll: "",
      tBetterScroll: "",
      options: {
        activeColor: "#b0352f",
        fixBottom: false,
        reBoundExponent: 100,
        reBoundingDuration: 360,
      },
    };
  },
  components: {
    TabBar,
    Header,
    Swiper,
	  Icons,
    Recommend
  }
};
</script>
<style lang="less" scoped>
.ly-tab{
  font-size: 0px !important;
  .ly-tabbar{

  }
}
</style>
