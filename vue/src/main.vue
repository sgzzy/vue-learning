<template>
  <div id="suduko">
    <button @click="checkS">完成</button>
    <timer></timer>
    <div class="suduko">
      <input class="pane" :name="index" v-for="(item, index) in items" v-model="items[index]" @input="valueRange">
    </div>
    <level></level>
    <prop v-bind:msg = "msg"></prop>

</template>
<script>
  import Pane from './components/pane.vue';
  import Sudu from './suduko.js';
  import Timer from './components/timer.vue';
  import Level from './components/level.vue';
  import bus from './bus.js';
  import prop from './components/prop.vue';
  const arr = [8, 3, 7, 4, 6, 1, 5, 2, 9, 5, 4, 1, 9, 2, 8, 7, 3, 6, 2, 6, 9, 5, 3, 7, 4, 1, 8, 9, 5, 4, 6, 8, 3, 2, 7, 1, 7, 2, 8, 1, 9, 5, 3, 6, 4, 3, 1, 6, 7, 4, 2, 8, 9, 5, 4, 7, 5, 3, 1, 9, 6, 8, 2, 1, 8, 3, 2, 5, 6, 9, 4, 7, 6, 9, 2, 8, 7, 4, 1, 5, 3];
  let soduko = new Array(81);
  for (let i = 0; i < 81; i++) {
    switch (true) {
    case i === 0 || i === 4 || i === 6 || i === 8 || i === 11 || i === 13 || i === 16 || i === 19 || i === 21 || i === 25 || i === 26 || i === 27 || i === 32 || i === 44 || i === 45 || i === 48 || i === 49 || i === 51 || i === 53 || i === 55 || i === 56 || i === 59 || i === 60 || i === 61 || i === 74 || i === 75 || i === 80:
      soduko[i] = arr[i];
      break;
    }
  }
  const data = {
    items: soduko,
    date: 0,
    msg: 'hello'   
  };
  export default {
    name: 'suduko',
    data() { 
      return data;
    },
    computed: {
    },
    methods: {
      valueRange: function (e) {
        let name = parseInt(e.target.name);
        if(!/[0-9]/.test(e.target.value)) {
          this.items[name] = '';
          return;
        }
        let value = parseInt(e.target.value);
        if (value > 10) {
          this.items[name] = '';
          return new RangeError('The number is out of the range');
        }
      },
      checkS: function () {
        clearTimeout(bus.timer)
        const suduCheck = new Sudu(this.items).completeSudu().checkSudu();
        if (suduCheck) {
          console.log('Yor are successful');
        } else {
          console.log('You are failed');
        }
      }
    },
    mounted() {
      window.console.log(this.items);
      this.items.map((value, index) => {
        const el = document.getElementsByName(index)[0];
        el.style.color = "yellow";
      })
    },
    components: {
      Timer,
      Level,
      prop
    }
  };
</script>
<style scoped>
  body {
    margin: 0;
  }
  
  .suduko {
    background: #272822;
    opacity: .8;
    width: calc(81vw + 18px);
    height: calc(81vw + 18px);
    border: 1px solid #fff;
    margin: 10px auto 0;
    font-size: 0
  }
  
  .pane {
    background: #82e396;
    display: inline-block;
    width: 9vw;
    height: 9vw;
    line-height: 9vw;
    text-align: center;
    border: .5px solid #fff;
    font-size: 14px;
    color: #f613d7;
  }

  #timer {
    margin-top: 50px;
    text-align: center;
    color: #6c189a;
  }
  .hours {
    color: #00ff00;
  }
  .minute {
    color: #0735eb;
  }
  .second {
    color: #ff0080;
  }

  input {
    outline: none;
  }
</style>