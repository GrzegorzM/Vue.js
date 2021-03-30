<template lang="">
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from '../main';

export default {
  props:{
    title: {
      type: String
    }
  },

  data(){
    return {
      copyright: 'Copyright text'
    }
  },

  created(){
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }
}
</script>

<style scope lang="">
  footer{
    background: darkgray;
    padding: 6px;
  }

  p{
    color: lightgreen;
    text-align: center;
  }
</style>