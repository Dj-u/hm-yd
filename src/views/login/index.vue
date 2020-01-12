<template>
  <div class="container">
    <!-- 插槽 -->
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()"></van-nav-bar>
    <div>
      <van-cell-group>
        <van-field
        :error-message="errMsg.mobile"
        @blur="checkMobile"
        v-model="loginForm.mobile"
        label="手机号" placeholder="请输入手机号"></van-field>
        <van-field @blur="checkCode" :error-message="errMsg.code" v-model="loginForm.code" label="验证码" placeholder="请输入验证码">
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
  name: 'login',
  data () {
    return {
      loginForm: {
        mobile: '13200000000',
        code: '246810'
      },
      // 专门提示信息
      errMsg: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    checkMobile () {
      // 判断为空 判断格式
      if (!this.loginForm.mobile) {
        this.errMsg.mobile = '手机号码不能为空'
        return false
      }
      // 判断格式  正则
      if (!/^1[3-9]\d{9}$/.test(this.loginForm.mobile)) {
        this.errMsg.mobile = '手机格式不正确'
        return false
      }
      this.errMsg.mobile = '' // 清空信息
      return true
    },
    checkCode () {
      if (!this.loginForm.code) {
        this.errMsg.code = '验证码不能为空'
        return false
      }
      if (!/^\d{6}$/.test(this.loginForm.code)) {
        this.errMsg.code = '验证码必须为6位数字'
        return false
      }
      this.errMsg.code = ''
      return true
    },
    login () {
      if (this.checkMobile() && this.checkCode) {
      // 都通过了 表示前端校验通过 还要调接口  提示消息 表示登录成功

      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_btn {
  padding: 10px;
}
</style>
