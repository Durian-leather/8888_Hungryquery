<template>
  <div class="footer_guide">
   <span  class="guide_item " :class="{on: '/Msite'===$route.path}" @click="goTo('/Msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
        <i class="iconfont ">&#xedfe;</i>
      </span>
      <span>外卖</span>
  </span>
   <span  href="javascript:;" class="guide_item " :class="{on: '/Search'===$route.path}"  @click="goTo('/Search')" >
      <span class="item_icon">
        <i class="iconfont icon-search">&#xe60d;</i>
      </span>
      <span>搜索</span>
  </span>
  <span  href="javascript:;" class="guide_item"  :class="{on: '/Order'===$route.path}" @click="goTo('/Order')" >
      <span class="item_icon">
        <i class="iconfont icon-dingdan">&#xe602;</i>
      </span>
      <span>订单</span>
   </span>
    <span  href="javascript:;" class="guide_item"  :class="{on: '/Profile'===$route.path}" @click="goTo('/Profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren">&#xe61a;</i>
      </span>
      <span>我的</span>
 </span>
  </div>
</template>
<script>

export default {
  methods:{
    goTo(path){//修改地址
 
    this.$router.replace(path)
    }
  }
};

</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl';

.footer_guide {
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #02a774;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
