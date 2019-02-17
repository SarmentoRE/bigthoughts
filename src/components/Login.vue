<template>
  <div>
      <input v-model="username" placeholder="username" type="text">
      <input v-model="password" placeholder="password" type="password">
      <button v-on:click="emitEvent()">Submit</button>
  </div>
</template>

<script>
// var md5 = require('md5')
export default {
  store: '',
  username: '',
  password: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    emitEvent () {
      this.$socket.message = 'Hello from websockets'
      this.$socket.send('hi')
      console.log('sending message')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
