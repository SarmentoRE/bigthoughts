// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import VueNativeSock from 'vue-native-websocket'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import store from './store/websocketStore'

Vue.use(VueNativeSock, 'ws://localhost:5000/ws', {
  store: store,
  reconnection: true,
  reconnectionAttempts: 2
})
Vue.use(VueMaterial)
Vue.use(Vuex)
Vue.config.productionTip = false

// Front-end data structure
// A given TA has classes that they TA for, each class has student, and students may send messages
// const store = new Vuex.Store({
//   state: {
//     firstName: '',
//     lastName: '',
//     taId: 0,
//     classes: [{
//       classId: 0,
//       students: [{
//         studentId: 0,
//         firstName: '',
//         lastName: '',
//         messages: [{
//           messageId: 0,
//           time: 0,
//           author: 0,
//           content: ''
//         }]
//       }]
//     }]
//   },
//   mutations: {
//     // add a message to an already existing convo
//     addMessage (state, classId, studentId, author, content) {
//       state.classes.forEach(element => {
//         if (element.classId === classId) {
//           element.students.forEach(individual => {
//             if (individual.studentId === studentId) {
//               individual.messages.push({time: Date.now, author: author, content: content})
//             }
//           })
//         }
//       })
//     },
//     addStudent (state, classId, studentId, firstName, lastName) {
//       state.classes.forEach(element => {
//         if (element.classId === classId) {
//           element.studentId = studentId
//           element.firstName = firstName
//           element.lastName = lastName
//         }
//       })
//     }
//   }
// })

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})