<template>
  <div class="list">
    <header>
      <div class="returns">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="search">
        <i class="el-icon-search"></i>
        <span>搜你喜欢的</span>
      </div>
      <div>
        <img src="../assets/home.png" alt="">
      </div>
    </header>
    <section>
      <div class="list-l">
        <ul class="l-item">
          <li class="active">推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
        </ul>
      </div>
      <div class="list-r">
        <ul>
          <li class="shop-list">
            <h2>推荐</h2>
            <ul class="r-content">
              <li>
                <img src="/images/list1.jpeg">
                <span>铁观音</span>
              </li>
              <li>
                <img src="/images/list1.jpeg">
                <span>铁观音</span>
              </li>
              <li>
                <img src="/images/list1.jpeg">
                <span>铁观音</span>
              </li>
              <li>
                <img src="/images/list1.jpeg">
                <span>铁观音</span>
              </li>
              <li>
                <img src="/images/list1.jpeg">
                <span>铁观音</span>
              </li>
              <li>
                <img src="/images/list1.jpeg">
                <span>铁观音</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "../components/common/tabbar.vue";
export default {
  components: {
    TabBar
  }
};
</script>

<style lang="less" scoped>
.list{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.17333rem;
    background-color: #b0352f;
    .returns{
      line-height: 1.17333rem;
      padding:0 15px;
      i{
        color: #ffffff;
        font-size: 26px;
      }
    }
    .search{
      padding: 0 20px;
      flex: 1;
      background-color: #ffffff;
      line-height: 1.17333rem;
      span{
        font-size: 16px;
        color: #999;
        margin-left: 10px;
      }
      i{
        font-size: 24px;
        color: #999;
      }
    }
  }
  section{
    display: flex;
    flex: 1;
    overflow: hidden;
    .list-l{
      width: 93px;
      background-color: #fff;
      overflow: hidden;
      .l-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li{
          width: 100%;
          line-height: 60px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .list-r{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .active{
    box-sizing: border-box;
    margin: 5px 0;
    color: #b0352f;
    border-left: 3px solid #b54f4a;
    .shop-list{
      text-align: center;
      h2{
        font-size: 0.6rem;
        font-weight: 400;
      }
      .r-content{
        display: flex;
        flex-wrap:wrap;
        li{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img{
            width: 100px;
          }
        }
      }
    }
  }

</style>
