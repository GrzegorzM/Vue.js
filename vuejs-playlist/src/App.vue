<template>
  <!-- <div id="app"> -->
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
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