<template>
  <!-- 导航功能 -->
  <div class="container">
    <!-- 可以采用vant的导航组件来实现 -->
    <!-- 判断用户界面没有固定的表头 在计算属性中写一个方法 取反 -->
    <!-- 给搜索按钮添加事件  vant文档 跳转到搜索界面 -->
    <van-nav-bar v-if="showNavBar"  fixed title="黑马头条" right-text="搜索" @click-right="$router.push('/search')"></van-nav-bar>
    <!-- 二级路由容器 首页/问答/视频/我的 -->
    <!-- :class="{名称:布尔值}" -->
    <div class="my-wrapper" :class="{noTop:!showNavBar}">
      <router-view></router-view>
    </div>
    <!-- 标签栏  开启路由模式 route :route="true" (布尔)    route="true" (字符串)-->

    <van-tabbar route>
      <!-- router-link  to -->
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  // 是否显示navbar
  computed: {
    showNavBar () {
      // this 指向 组件实例
      return this.$route.path !== '/user'
    }
  }
}
</script>

<style lang="less" scoped>
// scopd在当前作用域生效
</style>
