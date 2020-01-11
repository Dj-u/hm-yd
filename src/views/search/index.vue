<template>
  <!-- 搜索组件一级路由  返回上一个页面 -->
  <div class="container">
    <van-nav-bar title="搜索中心" left-arrow @click-left="$router.back()"></van-nav-bar>
    <!-- 导航 -->
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="less" scoped>
</style>
