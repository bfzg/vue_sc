<template>
  <div class="search">
    <Header></Header>
    <section>
      <div class="search-history" v-if="searchArr.length">
        <h2>
          <i class="el-icon-timer"></i>
          <span>历史搜索</span>
          <span @click="deleteStorage">清空历史记录</span>
        </h2>
        <ul>
          <li v-for="(item,index) in searchArr" :key="index"
          @click="goSearchList(item)">{{item}}</li>
        </ul>
      </div>
      <div v-else>暂无搜索记录</div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/tabbar";
import Header from "@/components/search/Header";
export default {
  name: "Search",
  data(){
    return{
      searchArr:[]
    }
  },
  components:{
    Tabbar,
    Header
  },
  created() {
    this.searchArr = JSON.parse(localStorage.getItem('searchList')) || [];
  },
  methods:{
    deleteStorage(){
     this.$dialog.confirm({
       title:'警告',
       message:'是否清空记录'
     }).then(() => {
        //删除本地存储
       localStorage.removeItem('searchList');
       this.searchArr = [];
     })
      .catch(() => {
            return
         });
    },
    goSearchList(item){
      this.$router.push({
        name:'list',
        query:{
          key:item
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  section{
    flex: 1;
    overflow: hidden;
    background-color: #f5f5f5;
  }
  .search-history{

    h2{
      font-weight: 400;
      font-size: 0.48rem;
      padding: 0.5333rem;
      position: relative;
      i{
        color: red;
        padding-right:0.08rem;
        font-size: 0.48rem;
      }
      span:last-child{
        position: absolute;
        right: 10px;
      }
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      padding: 0.2666rem 0.2666rem;
      li{
        font-size: 16px;
        border: 1px solid #cccccc;
        margin: 0.26666rem;
        padding: 0.08rem 0.16rem;
      }
    }
  }
}

</style>
