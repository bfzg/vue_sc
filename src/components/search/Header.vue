<template>
  <header>
    <div class="search-return" @click="goBack">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="search-main">
      <form action="" onsubmit="return false" @keyup.enter="goSearchList">
        <van-search background="none" placeholder="请输入搜索关键词" v-model="searchVal"/>
      </form>
    </div>
    <div class="serach-btn" @click="goSearchList">
      <div class="el-icon-position">搜索</div>
    </div>
  </header>

</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      searchVal:this.$route.query.key || '',
      searchArr:[],
    }
  },
  methods:{
    goBack(){
      this.$router.back();
    },
    goSearchList(){
      //路径没有发生变化不跳转
      if(this.searchVal === this.$route.query.key) return;
      //如果搜索的关键字是没有的，那就直接return
      if( !this.searchVal ) return;
      //判断之前有没有搜索的本地存储
      if( !localStorage.getItem('searchList')  ){
        //没有
        localStorage.setItem('searchList','[]');
      }else{
        //之前有
        this.searchArr = JSON.parse(  localStorage.getItem('searchList')  );
      }
      //增加数据
      this.searchArr.unshift( this.searchVal );
      //ES6去重
      let newArr = new Set(this.searchArr);
      //给本地存储赋值
      localStorage.setItem('searchList',JSON.stringify(Array.from(newArr)));

      //路由跳转
      this.$router.push({
        name:'list',
        query:{
          key:this.searchVal
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.17333rem;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  font-size: 18px;

  .search-return {
    padding: 0 10px;
    i{
      font-size: 20px;
      color: #ffffff;
    }
  }
  .search-main{
   form{
     display: flex;
     justify-content: center;
     align-items: center;
     //input{
     //  height: 20px;
     //  width: 220px;
     //  border-radius: 20px;
     //  border: 1px solid #ccc;
     //  padding: 5px 20px;
     //  background-color: #ffffff;
     //  font-size: 14px;
     //
     //}
   }
  }
  .serach-btn{
    padding: 0 8px;
    color: #ffffff;
  }
}
</style>
