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
  },
});