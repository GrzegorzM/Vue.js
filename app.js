new Vue({
  el: '#vue-app', // Selector to Vue Instance.
  data: { // Data of Vue Instance.
    name: 'Shaun',
    job: 'Manager',
    age: 50,
    website: 'https://www.google.com/',
    websiteTag: '<a href="https://www.google.com/">Google</a>',
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: true,
    nearby: true,
    error: false,
    success: false,
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bower'],
    students: [
      { name: 'Bob', age: 20 },
      { name: 'Mary', age: 23 },
      { name: 'Johnny', age: 21 },
    ],
  },
  methods: {
    greet: function(){
      return 'Good Morning' + this.name; // this.data.name == this.name
    },
    hello: function(name){
      return 'Hello ' + name;
    },
    add: function(){
      this.age++;
    },
    subtract: function(){
      this.age--;
    },
    addAge: function(number){
      this.age = this.age + number;
    },
    subtractAge: function(number){
      this.age = this.age - number;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    showAlert: function(){
      alert('You clicked blocked link.');
    },
    logName: function(){
      console.log('You entered name.');
    },
    logAge: function(){
      console.log('You entered age.');
    },
    setName: function(name){
      this.name = name;
    },
    setAge: function(age){
      this.age = age;
    },
    // addToA: function(){
    //   console.log('addToA');
    //   return this.a + this.age;
    // },
    // addToB: function(){
    //   console.log('addToB');
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA: function(){
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function(){
      console.log('addToB');
      return this.b + this.age;
    },
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});

var one = new Vue({
  el: '#vue-app-one',
  data:{
    title: 'Vue app 1',
  },
  methods: {
    
  },
  computed:{
    greet: function(){
      return 'Hello from app one.';
    },
  },
});

var two = new Vue({
  el: '#vue-app-two',
  data:{
    title: 'Vue app 2',
  },
  methods: {
    changeTitle: function(){
      one.title = 'The title has been changed from the Vue 2 Instance!';
    },
  },
  computed:{
    greet: function(){
      return 'Hello from app two.';
    },
  },
});

two.title = 'The title has been changed from the Outside!';