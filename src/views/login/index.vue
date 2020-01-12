<template>
  <div class="container">
    <!-- 插槽 -->
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()"></van-nav-bar>
    <div>
      <van-cell-group>
        <van-field label="手机号" placeholder="请输入手机号"></van-field>
        <van-field label="验证码" placeholder="请输入验证码">
          <van-button type="primary" size="small" slot="button">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <div class="login_btn">
        <van-button type="info" block round size="small">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="less" scoped>
.login_btn {
  padding: 10px;
}
</style>
