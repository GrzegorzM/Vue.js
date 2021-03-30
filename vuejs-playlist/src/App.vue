<template>
  <!-- <div id="app"> -->
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <students v-bind:students="students"></students>
    <hr>
    <students v-bind:students="students"></students>
    <app-footer :title="title"></app-footer>
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
      title: 'Hello from App.vue.',
      students: [
        { name: 'Bob', gender: 'Male', show:false },
        { name: 'Mary', gender: 'Female', show:false },
        { name: 'John', gender: 'Male', show:false },
        { name: 'Barbara', gender: 'Female', show:false },
        { name: 'Kate', gender: 'Female', show:false },
        { name: 'Mark', gender: 'Male', show:false },
        { name: 'Sue', gender: 'Female', show:false }
      ]
    }
  },

  methods: {
    greeting(){
      return 'Hey there!'
    },
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  },
}
</script>

<style>
h1{
  color: blue;
}
</style>