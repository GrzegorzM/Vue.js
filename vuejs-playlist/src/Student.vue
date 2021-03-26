<template>
  <div>
    <h1>List of Students</h1>
    <ul>
      <li v-for="student in students" v-bind:key="student">{{ student }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      students: ['Bob', 'Mary', 'Mark']
    }
  },
}
</script>

<style scoped>
  h1{
    color: red;
  }
</style>