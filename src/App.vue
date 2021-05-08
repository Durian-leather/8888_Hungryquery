<template>
  <div id="app">
  <router-view/>
   <FooterGuide v-show="$route.meta.showwFooter" /><!-- 当路由里面meta 对象的showwFooter 为ture 才显示  -->
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'//引入下面菜单按钮
export default{

  components:{//映射成标签
    FooterGuide,

  }
}
</script>
<style  lang="stylus" rel="stylesheet/stylus"> 
.app
  width 100%
  height 100%
  background #f5f5f5
</style>