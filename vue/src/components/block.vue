<template>
  <span class='title' :class='{{title}}'></span>
</template>
<script>
  export default {
    name: 'block',
    data() {
      return {
        title: 'title'
      };
    },
    computed: {
      title: function () {
        return title + '2'
      }
    }
  }
</script>
<style scoped>
  .title {
    width: 76px;
    height: 76px;
    line-height: 76px;
  }
  
  .title-2 {
    background: #eee4da;
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