<template lang="">
  <div id="students">
    <ul>
      <li v-for="student in students" v-on:click="student.show = !student.show">
        <h2>{{ student.name }}</h2>
        <h6 v-show="student.show">{{ student.gender }}</h6>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ['students'], // No validation. It's possible to pass string.
  props: { 
    students:{
      type: Array,
      required: true
    }
  },

  data(){
    // return { 
    //   students: [
    //     { name: 'Bob', gender: 'Male', show:false },
    //     { name: 'Mary', gender: 'Female', show:false },
    //     { name: 'John', gender: 'Male', show:false },
    //     { name: 'Barbara', gender: 'Female', show:false },
    //     { name: 'Kate', gender: 'Female', show:false },
    //     { name: 'Mark', gender: 'Male', show:false },
    //     { name: 'Sue', gender: 'Female', show:false }
    //   ]
    // }
  },

  methods: {
    accessPropMethod: function(){
      this.students;
    }
  }
}
</script>

<style scope lang="">
  #students{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
  }

  li{
   flex-grow: 1;
   flex-basis: 300px;
   text-align: center;
   padding: 30px;
   border: 1px solid darkgray;
   margin: 10px; 
  }
</style>