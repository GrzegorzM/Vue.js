<template lang="">
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
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
      this.title = 'Vue Header changed';
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