<template lang="">
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main.js';

export default {
  props:{
    title: {
      type: String
    }
  },

  // data(){
  //   return {
  //     title: 'Vue Header'
  //   }
  // },

  methods:{
    changeTitle: function(){
      // this.title = 'Vue Header changed'; // Changes the title locally in the component.
      // this.$emit('changeTitle', 'Vue Header changed using emit'); // Changes the title in the parent component, so titles in the child component are also updated.
      this.title = 'Vue Header changed';
      bus.$emit('titleChanged', 'Vue Header changed using bus');
    }
  },
}
</script>

<style scope lang="">
  header{
    background: lightgreen;
    padding: 10px;
  }

  h1{
    color: darkgray;
    text-align: center;
  }
</style>