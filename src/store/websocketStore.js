import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    curTypedMessage: '',
    selectedClass: {},
    selectedStudent: {},
    classes: [],
    students: [],
    messages: [],
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    }
  },
  mutations: {
    SELECT_STUDENT(state,student){
      state.selectedStudent = student
    },
    SET_CLASSES(state,classes) {
        state.classes = classes
    },
    SET_MESSAGES(state,messages) {
        state.messages = messages
    },
    SET_STUDENTS(state,students){
      state.students = students
    },
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
    sendMessage: function (context,selectedStudent,selectedClass,curTypedMessage) {
      // post to the backend to send a message
      console.log(selectedClass)
      console.log(curTypedMessage)
      console.log(this.state.selectedClass)
      axios.post('http://localhost:5000'+'/messages',{
        studentNumber: selectedStudent.studentId,
        phoneNumber: selectedStudent.phoneNumber,
        classId: this.state.selectedClass,
        message: this.state.curTypedMessage
      })
    },
    loadClasses: function (context, taid){
      this.commit('SET_CLASSES', [
        {
          phone: '5408347842',
          name: 'CMSC502',
          id: '1'
        },  {
          phone: '5407489743',
          name: 'CMSC603',
          id: '2'
        }
    ])
     axios.get('http://localhost:5000' +'/tas/'+this.state.username+'/classes')
      .then(r=> r.data)
      .then(classes => {
        console.log(classes)
        this.commit('SET_CLASSES', classes)
      })
     
    },
    loadStudents: function (context, classId){
    //   this.commit('SET_STUDENTS', [
    //     {
    //       studentId: 1,
    //       firstName: 'Asshat',
    //       lastName: 'diskface',
    //       phoneNumber: '5408347842'
    //     },  {
    //       studentId: 2,
    //       firstName: 'justin',
    //       lastName: 'miller',
    //       phoneNumber: '7578493317'
    //     },{
    //       studentId: 3,
    //       firstName: 'Sarmento',
    //       lastName: 'Austin',
    //       phoneNumber: '5407489743'
    //     }
    //   ]
    // )
      axios.get('/classes/'+classId)
      .then(r=> r.data)
      .then(classes => {
        this.commit(SET_CLASSES, blah)
      })
  },
  loadMessages: function(context,studentId){ 
    this.commit('SET_MESSAGES', [
    {
      studentId: 1,
      firstName: 'Asshat',
      lastName: 'diskface'
    },  {
      studentId: 2,
      firstName: 'justin',
      lastName: 'miller'
    },{
      studentId: 3,
      firstName: 'Sarmento',
      lastName: 'Austin'
    }
  ]
)
axios.get('/messages/'+studentId)
  .then(r=> r.data)
  .then(messages => {
    this.commit(SET_MESSAGES, messages)
  })
  }
  },
  getters: {
    getField,
  }
})
