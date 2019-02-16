<template>
    <div class="selector">
        <div class="md-layout md-gutter md-alignment-center">
            <md-list class="md-double-line">
                <md-list-item v-for="element in List" :key="element.messageId">
                        <div class="md-list-item-text">
                          <span>{{ element.firstName }} {{ element.lastName }}</span>
                          <span>{{ element.content }}</span>
                        </div>
                </md-list-item>
            </md-list>
        </div>
    </div>
</template>

<script>
export default {
  name: 'messages',
  props: ['List'],
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
