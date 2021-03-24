<template>
  <ul>
    <li v-for="student in students" v-bind:key="student">{{ student }}</li>
  </ul>
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