<template>
  <div id="app">
    <!--<div class="cloumn">-->
      <span class="pip"><my-components></my-components> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
    <!--</div>-->
    <!--<div class="cloumn">-->
      <span class="pip"> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
    <!--</div>-->
    <!--<div class="cloumn">-->
      <span class="pip"> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
    <!--</div>-->
    <!--<div class="cloumn">-->
      <span class="pip"> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
      <span class="pip"> </span>
    <!--</div>-->
  </div>
</template>

<script>
  var block = {
    template: `<span class='title title-2'>{{number}}</span>`
  }
  export default {
    name: 'app',
    data() {
      return {
        number: 2,
        title: 'title'
      }
    },
    components: {
      'my-components': block,
    },
    computed: {
      titleChange: function () {
        return title + '2'
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #e6e6e6;
    border: .3vw solid #e6e6e6;
    border-radius: 1vw;
    margin: 60px auto 0;
    width: calc(96vw);
    height: calc(96vw);
    font-size: 0;
    /*display: block;
    flex-flow: column wrap;
    justify-content: space-between;*/
    /*position: absolute;*/
  }
  /*.cloumn {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }*/
  
  .pip {
    /*flex-grow: 1;*/
    width: 22vw;
    height: 22vw;
    display: inline-block;
    border-radius: .5vw;
    border: 1vw solid #e6e6e6;
    /*text-align: center;
    vertical-align: middle;*/
    background: #fafafa;
    vertical-align: bottom;
  }
  
  .title {
    width: 22vw;
    height: 22vw;
    display: block;
    border-radius: .5vw;
    line-height: 22vw;
  }
  
  .title-2 {
    background: #eee4da;
    font-size: 12vw;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
  }
  
  .tile.tile-4 {
    background: #ede0c8;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
  }
  
  .tile.tile-8 {
    color: #f9f6f2;
    background: #f2b179;
  }
  
  .tile.tile-16 {
    color: #f9f6f2;
    background: #f59563;
  }
  
  .tile.tile-32 {
    color: #f9f6f2;
    background: #f67c5f;
  }
  
  .tile.tile-64 {
    color: #f9f6f2;
    background: #f65e3b;
  }
  
  .tile.tile-128 {
    color: #f9f6f2;
    background: #edcf72;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286);
    font-size: 45px;
  }
  
  @media screen and (max-width: 520px) {
    .tile.tile-128 {
      font-size: 25px;
    }
  }
  
  .tile.tile-256 {
    color: #f9f6f2;
    background: #edcc61;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048);
    font-size: 45px;
  }
  
  @media screen and (max-width: 520px) {
    .tile.tile-256 {
      font-size: 25px;
    }
  }
  
  .tile.tile-512 {
    color: #f9f6f2;
    background: #edc850;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381);
    font-size: 45px;
  }
  
  @media screen and (max-width: 520px) {
    .tile.tile-512 {
      font-size: 25px;
    }
  }
  
  .tile.tile-1024 {
    color: #f9f6f2;
    background: #edc53f;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571);
    font-size: 35px;
  }
  
  @media screen and (max-width: 520px) {
    .tile.tile-1024 {
      font-size: 15px;
    }
  }
  
  .tile.tile-2048 {
    color: #f9f6f2;
    background: #edc22e;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);
    font-size: 35px;
  }
  
  @media screen and (max-width: 520px) {
    .tile.tile-2048 {
      font-size: 15px;
    }
  }
</style>