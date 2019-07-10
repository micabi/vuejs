var app = new Vue({
  el: '#app',
  data: {
    now: ''
  },
  methods: {
    onclick: function(){
      // dataへのアクセスはthis
      this.now = new Date().toLocaleString();
    }
  }
})