<template>
    <div class="selector">
        <div class="md-layout md-alignment-top-center">
            <div class="md-layout-item md-size-25 ">
              <md-field>
                  <md-select v-model="selectedClass" id="classTAselector" placeholder="Class" @md-selected="getStudents($event)">
                      <md-option v-for="element in classes" :key="element.classId" v-bind:value="element.classId">{{ element.className }}</md-option>
                  </md-select>
              </md-field>
              </div>
        </div>
        <div v-if="studentCounter>1" class="page-container md-alignment-center-center">
      <md-app>
        <md-app-toolbar class="md-primary">
          <span class="md-title">Messages</span>
        </md-app-toolbar>
        <md-app-drawer md-permanent="full">
          <md-toolbar class="md-transparent" md-elevation="0">
            Students
          </md-toolbar>
          <md-list>
            <md-list-item v-for="student in students" :key="student.studentId">
              <div class="md-list-item-text">
                <md-button class="md-primary md-raised" @click.native="selectStudent(student)">
                    <span>{{ student.firstName }} {{ student.lastName }}</span>
                </md-button>              
              </div>
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <md-list>
            <md-list-item v-for="element in messages" :key="element.messageId">
              <div class="md-list-item-text">
                <div class="md-alignment-horizontal">
                <span>{{ element.firstName }} {{ element.lastName }} </span>
                <span class="md-alignment-center-right">{{element.time}}</span>
              </div>
                <span>{{ element.content }}</span>
                <md-divider></md-divider>
              </div>
            </md-list-item>
          </md-list>
          <md-field>
            <label>Message</label>
            <md-textarea v-model="curTypedMessage" md-autogrow></md-textarea>
         </md-field>
         <md-button @click.native="sendMessage($event)">
           <span>Send</span>
         </md-button>
        </md-app-content>
      </md-app>
    </div>
    </div>
    
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'class-selection',
  // props: ['classList'],
  data () {
    return {
      studentCounter: 0
    }
  },
  computed: {
    ...mapFields([
      'selectedClass',
      'classes',
      'students',
      'messages',
      'curTypedMessage',
      'selectedStudent'
    ])
  },
  methods: {
  selectStudent: function(e){
    console.log(e)
    this.selectedStudent=e
      // this.$store.commit('SELECT_STUDENT',{
      //   firstName: e.firstName,
      //   lastName: e.lastName,
      //   phoneNumber: e.phoneNumber,
      //   studentId: e.studentId
      // })
  },
    getStudents: function(e){
      console.log(e)
      this.studentCounter++
      this.$store.dispatch('loadStudents',this.selectedClass)
    },
    sendMessage: function(e){
      console.log(e)
      this.$store.dispatch('sendMessage',this.selectedStudent,this.selectedClass,this.curTypedMessage)
    }
  },
  
  created() {
    this.$store.dispatch('loadClasses',this.$store.username)
  }
}
</script>
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