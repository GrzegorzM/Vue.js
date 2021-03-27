<template>
  <!-- <div id="app"> -->
  <div>
    <app-header></app-header>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <students></students>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Student from './Student.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Students from './components/students.vue';

export default {
  // Globally registered component.
  components: { 
    Student, 
    'app-header': Header,
    'app-footer': Footer,
    Students
  },
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