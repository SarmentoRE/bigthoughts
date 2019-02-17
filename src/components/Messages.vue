<template>
    <div class="page-container md-alignment-center-center">
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
                    <span>{{ student.firstName }} {{ student.lastName }}</span>
                  </div>
              </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <md-list>
            <md-list-item v-for="element in List" :key="element.messageId">
              <div class="md-list-item-text">
                <dic class="md-alignment-horizontal">
                <span>{{ element.firstName }} {{ element.lastName }} </span>
                <span class="md-alignment-center-right">{{element.time}}</span>
              </dic>
                <span>{{ element.content }}</span>
                <md-divider></md-divider>
              </div>
            </md-list-item>
          </md-list>
        </md-app-content>
      </md-app>
    </div>
  </template>

<script>
export default {
  name: 'messages',
  props: ['List', 'students'],
  data () {
    return {
      classTA: null,
      classes: this.List
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
