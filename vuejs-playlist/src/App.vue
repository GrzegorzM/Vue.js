<template>
  <!-- <div id="app"> -->
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <students></students>
  </div>
</template>

<script>
import Student from './Student.vue'

export default {
  // Globally registered component.
  components: { Student },
  // Locally registered component.
  // components: { 
  //   'students': Student
  // },
  // name: 'app',
  data () { // same as "data: function(){}"
    return {
      title: 'Hello from Vue.'
    }
  },
  methods: {
    greeting(){
      return 'Hey there!'
    }
  },
}
</script>

<style>
h1{
  color: blue;
}
</style>