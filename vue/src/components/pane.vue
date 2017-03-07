<template v-for="item in items" :title="item.className">
  <span class="pane title"></span>
</template>
<script>
  export default {
    name: 'pane'
  }
</script>
<style scoped>
  .pane {
    display: inline-block;
    width: 9vw;
    height: 9vw;
    border: .5px solid #000;
  }
</style>