<template>
  <div class="login">
    <navigator></navigator>
    <h1>Login</h1>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
export default{
  components: {
    'navigator': Navigator
  },
  name: 'Login',
  data () {
    return {
      msg: 'login'
    }
  }
}
</script>
