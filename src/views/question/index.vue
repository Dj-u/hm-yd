<template>
  <!-- Skeleton 骨架屏 -->
  <!-- 通过title属性显示标题占位图，通过row属性配置占位段落行数 -->
  <div>
    <van-skeleton class="skelerons" title :row="3" />
    <van-skeleton class="skelerons" title :row="3" />
    <van-skeleton class="skelerons" title :row="3" />
  </div>
</template>

<script>
export default {
  name: 'question'
}
</script>

<style lang="less" scoped>
</style>
