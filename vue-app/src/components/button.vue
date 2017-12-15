<template>
  <button @click="Change">{{title}}</button>
</template>
<script>
export default {
  name: "vue-button",
  props: {
    title: String
  },
  methods: {
    Change: function(){
      console.info("click",new Date().getTime());
      this.$parent.change();
    }
  }
}
</script>
