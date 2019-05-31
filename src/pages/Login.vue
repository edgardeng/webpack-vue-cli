<template>
  <div class="page text-center">
    <div class="float-brand"> Logo & Brand</div>
    <div class="form-signin card-box" id="form">
      <h2 class="h3 mb-1 mb-5 font-weight-normal">XX系统平台</h2>
      <div class="form-group">
        <i class="fa fa-user"> </i>
        <input class="form-control" id="input-name"  v-model="username" aria-describedby="emailHelp"
               placeholder="Enter Username">
      </div>
      <div class="form-group">
        <i class=" fa fa-lock"> </i>
        <input type="password" class="form-control" v-model="password" id="input-password" aria-describedby="emailHelp"
               placeholder="Enter Password">
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> 记住我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" id="signin" @click="handleSubmit()">Sign in</button>

      <button type="button" class="btn btn-link text-danger" style="margin-top:20px;font-weight: normal;"><span class="text-muted">没有账户?</span>去注册</button>

    </div>

    <div class="footer">&copy;Company 2019-2020</div>
  </div>

</template>

<script type="text/ecmascript-6" >
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: 'admin',
      password: '',
      isLoading: false,
      remember: true,
      wantLogin: true,
      styleGoBtn: {
        color: this.wantLogin ? '#409EFF' : '#f56c6c'
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'CHANGE_LOG_IN'
    ]),
    handleChagne () {
      this.wantLogin = !this.wantLogin
    },
    handleReset () {
    },
    handleSubmit () {
      if (this.username !== 'admin') {
        console.log('username error')
        alert('admin/123456 is right')
      } else if (this.password !== '123456') {
        console.log('password error')
        alert('admin/123456 is right')
      } else {
        this.doLogin()
      }
    },
    doRegister () {
    },
    doLogin () {
      this.CHANGE_LOG_IN()
      console.log('doLogin')
      this.$router.push('/')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
  @import "@/assets/styles/login.scss";
</style>
