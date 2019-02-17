import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    }
  },
  mutations: {
    SOCKET_ONOPEN (state, event) {
      Vue.prototype.$socket = event.currentTarget
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event) {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message) {
      state.socket.message = message
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT (state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR (state) {
      state.socket.reconnectError = true
    },
    updateField
  },
  actions: {
    sendMessage: function (context, message) {
      Vue.prototype.$socket.send(message)
    }
  },
  getters: {
    getField,
  }
})
