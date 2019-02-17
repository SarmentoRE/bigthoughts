<template>
    <div>
    <md-list-item v-for="student in Child" :key="student.studentId">
        <div class="md-list-item-text">
            <span>{{ student.firstName }} {{ student.lastName }}</span>
        </div>
    </md-list-item>
        </div>
</template>

<script>
export default {
  name: 'students',
  props: ['Child'],
  data () {
    return {
      kids: this.Child
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
