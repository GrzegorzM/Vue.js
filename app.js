new Vue({
  el: '#vue-app', // Selector to Vue Instance.
  data: { // Data of Vue Instance.
    name: 'Shaun',
    job: 'Manager',
    website: 'https://www.google.com/',
    websiteTag: '<a href="https://www.google.com/">Google</a>',
  },
  methods: {
    greet: function(){
      return 'Good Morning' + this.name; // this.data.name == this.name
    },
    hello: function(name){
      return 'Hello ' + name;
    },
  }
});