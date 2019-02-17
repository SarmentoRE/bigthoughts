/* eslint-disable */
<template>
    <div class="selector">
        <div class="md-layout md-alignment-top-center">
            <div class="md-layout-item md-size-25 ">
              <md-field>
                  <md-select v-model="classTA" id="classTAselector" placeholder="Class">
                      <md-option v-for="element in classes" :key="element.classId" v-bind:value="element.className">{{ element.className }}</md-option>
                  </md-select>
              </md-field>
              </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'classselection',
  props: ['classList'],
  data () {
    return {
      classTA: this.classList[0].className,
      classes: this.classList
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
