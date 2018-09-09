<template>
  <div>
    Indexd {{hello}}
  </div>
</template>
<script>
import api from './network/api'
export default{
  data () {
    return {
      hello: 'hello...'
    }
  },
  created () {
    api.get_hello()
      .then(response => {
        this.hello = response.data
        console.log('Index.vue ' + this.hello)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
