<template lang="">
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  data(){
    return {
      title: 'Vue Header'
    }
  }
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