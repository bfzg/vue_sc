<template>
  <div class="search-list">
   <div class="headers">
     <Header></Header>
     <ul>
       <li v-for="(item,index) in searchList.data" :key="index" @click="changeTab(index)">
         <div :class='searchList.currentIndex == index ? "active":" "'>{{item.name}}</div>
         <div v-if="index != 0">
           <i class="el-icon-sort-down"
           :class="item.status == 1 ? 'active' :''"
           ></i>
           <i class="el-icon-sort-up"
              :class="item.status == 2 ? 'active' :''"
           ></i>
         </div>
       </li>
     </ul>
   </div>
    <section>
      <ul  v-if="goodsList.length">
        <li v-for="(item,index) in goodsList" :key="index">
          <img :src="item.imgUrl">
          <h3>{{ item.name }}</h3>
          <div class="price">
            <div>
              <span>￥</span>
              <b>{{ item.price }}</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
      </ul>
      <h3 v-else>....暂无数据</h3>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/search/Header";
import Tabbar from "@/components/common/tabbar";
import http from "@/common/api/request";
export default{
  data () {
    return {
      goodsList:[],
      searchList:{
        currentIndex:0,
        data:[
          /*
          status:0 都不亮
          status:1 上箭头亮
          status:2 下箭头亮
          */
          {name:'综合',key:'zh'},
          {name:'价格',status:0,key:'price'},
          {name:'销量',status:0,key:'num'}
        ]
      }
    }
  },
  computed:{
    orderBy(){
      //知道当前是哪一个对象
      let obj = this.searchList.data[this.searchList.currentIndex];
      //针对于状态，判断是升序还是降序
      let val = obj.status == '1' ? 'asc' : 'desc';
      return {
        [obj.key]:val
      }
    }
  },
  components:{
    Header,
    Tabbar
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      http.$axios({
        url:'/api/goods/shopList',
        params:{
          searchName:this.$route.query.key,
          ...this.orderBy
        }
      }).then(res=>{
        this.goodsList = res;
      })
    },
    changeTab( index ){
      this.searchList.currentIndex = index;
      //点击的下标对应数据的哪一个
      let item = this.searchList.data[index];
      //取消所有的状态值===》都变成0
      this.searchList.data.forEach((v,i)=>{
        if( i != index ){
          v.status = 0;
        }
      })
      //当前点击的改变状态
      if(  index == this.searchList.currentIndex ){
        item.status = item.status == 1 ? 2 : 1;
      }
      //发送请求进行数据排序
      this.getData();
    }
  },
  watch:{
    $route(){
      this.getData();
    }
  }
}
</script>

<style lang="less" scoped>
  .search-list{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .headers{
      ul{
        display: flex;
        justify-content: space-around;
        padding: 0.5333rem 0;
        font-size: 12px;
        li{
          display: flex;
          align-items: center;
          i{
            width: 5px;
          }
        }
      }
    }
    section{
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          width: 50%;
          h3{
            font-size: 16px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
          }
          img{
            width: 170px;
            height: 170px;
          }
        }
      }
    }
  }
  section{
    flex: 1;
    overflow: hidden;
    ul{
      li{
        .price{
          display: flex;
          justify-content: space-between;
          padding: 0.26rem 0;
          width: 100%;
          font-size: 14px;
          div:first-child span{
            color: #b0352f;
            font-size: 8px;
          }
          div:first-child b{
            color: #b0352f;
            font-size: 16px;
          }
          div:last-child{
            padding: 0.08rem 0.16rem;
            color: #ffffff;
            background-color: #b0352f;
            border-radius: 6px;
          }
        }
      }
    }
  }
  .active{
    color: red;
  }
</style>
