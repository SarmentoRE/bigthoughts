// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    classes: [{
      classId: 0,
      students: [{
        studentId: 0,
        firstName: '',
        lastName: '',
        messages: [{
          time: 0,
          author: 0,
          content: ''
        }]
      }]
    }]
  },
  mutations: {
    // add a message to an already existing convo
    addMessage (state, classId, studentId, author, content) {
      state.classes.forEach(element => {
        if (element.classId === classId) {
          element.students.forEach(individual => {
            if (individual.studentId === studentId) {
              individual.messages.push({time: Date.now, author: author, content: content})
            }
          })
        }
      })
    },
    addStudent (state, classId, studentId, firstName, lastName) {
      state.classes.forEach(element => {
        if (element.classId === classId) {
          element.studentId = studentId
          element.firstName = firstName
          element.lastName = lastName
        }
      })
    },
    populateData (state, classes) {
      state.classes = classes
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
