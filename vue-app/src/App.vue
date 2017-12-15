<template v-if="can">
  <div id="app" title="msg">
    <vue-button title="Change" />
    <h1 v-once>{{Message}}</h1>
    <div v-if="seen">可以看到了</div>
    <div v-else-if="can">看这个亦可以</div>
    <div v-else>实在不行，就只能看这个了</div>
    <p v-html="span"></p>
    <span v-for="(item, index) in items" :key="index">{{item}}</span>
    <span v-pre>this will not be compiled</span>
    <input v-model="span">
  </div>
</template>

<script>
import VueButton from './components/button';
export default {
  name: 'app',
  components: {VueButton},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App' + new Date().toString(),
      seen: false,
      can: false,
      span: '<span>你还好么</span>',
      items: [
        "a","b","c"
      ]
    }
  },
  watch: {
    // span: function(value) {
    //   this.seen = !this.seen;
    // }
  },
  computed: {
    Message: function() {
      return this.msg
    }
  },
  methods: {
    change: function() {
      console.log("changed",this);
      this.items.reverse();
      this.msg = 'Welcome to Your Vue.js App' + new Date().getTime();
    }
  },
  beforeCreate() {
    // fetch("api/data").then(res => console.log("res:",res.formData())).catch(data => console.log("data:",data));
    $.ajax("api/data").done(function(data) {
      console.log("ajax",JSON.parse(data));
    })
  },
  beforeUpdate() {
    let msg = this.msg;
    console.log("beforeUpdate",msg);
  },
  updated() {
    let msg = this.msg;
    console.log("updated",msg);
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
