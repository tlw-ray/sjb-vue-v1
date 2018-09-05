<template>
  <div class="login">
    <navigator></navigator>
    <h1>Login</h1>
    <label for="userName">用户名:</label>
    <input type="text" id="userName">
    <label for="password">密码: </label>
    <input type="password" id="password">
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
export default{
  component: {'navigator': Navigator},
  name: 'Login',
  data () {
    return {
      msg: 'login'
    }
  }
}
</script>
