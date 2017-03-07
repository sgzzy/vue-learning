<template>
  <p id="timer">
    <span class="hours">{{ time.h | toTime }}</span>&nbsp;:
    <span class="minute">{{ time.m | toTime }}</span>&nbsp;:
    <span class="second">{{ time.s | toTime }}</span>
  </p>
</template>
<script>
import bus from '../bus.js';
  export default {
    name: 'timer',
    data() {
      return {
        time: {
          h: 0,
          m: 0,
          s: 0
        },
        timer: null,        
      };
    },
    created: function() {
      bus.$on('time', () => {
        clearTimeout(bus.timer);
        this.time.h = this.time.m = this.time.s = 0;
        this.runTime();
      })
    },
    filters: {
      toTime: function(value) {
        return value < 10 ? '0'+value : value;
      }
    },
    methods: {
      runTime: function() {
        let timeGo = () => {
          if(this.time.s++ === 60) {
            this.time.s = 0;
            if (this.time.m++ === 60) {
              this.time.m = 0;
              this.time.h++;
            }
          }
          bus.timer = setTimeout(timeGo, 1000);
        }

        bus.timer = setTimeout(timeGo,1000);
      }      
    }
  }
</script>