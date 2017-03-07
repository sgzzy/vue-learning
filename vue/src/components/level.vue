<template>
   <div id="level" class="fn-clear">
      <div class="level-control">
        <span class="page-up" @click="levelUp"></span>
        <span class="page-down" @click="levelDown"></span>
      </div>
      <ul class="level-list fn-clean-space">
        <li class="fn-layout" v-for="n in 10" @click="level">{{ index + n }}</li>
      </ul>
    </div>
</template>

<script>
  import bus from '../bus.js'
  const level = 100
  const pages = Math.ceil(level / 10);
     let prePage = 1;
  const data = {
    pages: pages,
    prePage: prePage
  }; 
  export default {
    name: 'level',
    data() {
      return data;
    },
    computed: {
      index: function() {
        return (this.prePage-1)*10;
      }
    },
    methods: {
      levelUp: function() {
        if(this.prePage-- <= 1) {
          this.prePage++;
        }
      },
      levelDown: function() {
        if(this.prePage++ >= this.pages) {
          this.prePage--;
        }
      },
      level: function () {
        bus.$emit('time');
      }
    }
  }  
</script>

<style scoped>
  #level {
    width: 94vw;
    margin: 10px auto;
  }
  .level-control {
    float: right;
    width: 20vw;
    margin-right: -1vw;
  }
  .level-control span {
    display: inline-block;
    width: 19vw;
    height: 10vw;
    background: #ff0;
  }
  .level-list li {
    font-size: 14px;
    width: 14vw;
    line-height: 10vw;
    height: 10vw;
    text-align: center;
    background: #4b32c3;
    margin: 0 1vw 1vw 0;
  }
  .level-list li:nth-child(5n) {
    margin-right: 0;
  }
</style>