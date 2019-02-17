<template>
  <div>
      <h2 class="md-display-3">TA log in</h2>
      <div class="md-layout md-alignment-vertical md-size-50">
          <div class="md-layout-item md-alignment-vertical" style="padding:5px">
      <input v-model="username" placeholder="username" type="text">
      <div class="md-layout-item md-alignment-vertical" style="padding:5px">
      <input v-model="password" placeholder="password" type="password">
    <div class="md-layout-item md-alignment-vertical" style="padding:5px">
      <button v-on:click="emitEvent()">Submit</button>
    </div>
      </div>
          </div>
          </div>
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
