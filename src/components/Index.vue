<template>
  <div>
    <navigator></navigator>
    Index {{hello}}
  </div>
</template>
<script>
// import api from './network/api'
import navigator from '../components/Navigator'
export default{
  data () {
    return {
      hello: 'hello...'
    }
  },
  // created () {
  //   api.get_hello()
  //     .then(response => {
  //       this.hello = response.data
  //       console.log('Index.vue ' + this.hello)
  //     })
  // },
  components: {
    navigator: navigator
  }
}
</script>
