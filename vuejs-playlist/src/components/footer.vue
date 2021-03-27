<template lang="">
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      copyright: 'Copyright text'
    }
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