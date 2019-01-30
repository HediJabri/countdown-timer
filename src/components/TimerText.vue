<template>
  <h6 class="timer-text" :class="classText">
    {{ text }}
  </h6>
</template>

<script>
export default {
  name: "TimerText",
  props: {
    time: {
      type: Number,
      require: true
    },
    duration: {
      type: Number,
      require: true
    }
  },
  computed: {
    text() {
      if (this.time === null) {
        return "";
      } else if (this.time === 0) {
        return "Time’s up!”";
      } else if (this.time < this.duration / 2) {
        return "More than halfway there";
      }
      return "";
    },
    classText() {
      return {
        red: this.time && this.time < 20,
        blinking: this.time && this.time < 10
      };
    }
  }
};
</script>

<style scoped>
.timer-text.red {
  color: red;
}
.timer-text.blinking {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
