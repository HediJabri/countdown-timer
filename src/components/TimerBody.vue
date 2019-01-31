<template>
  <div class="timer-body">
    <div class="timer-message-container">
      <h6 class="timer-message" :class="classMessage">
        {{ message }}
      </h6>
    </div>
    <h3 class="timer-total">
      <span class="minutes">{{ minutes }}</span>
      <span class="separator">:</span>
      <span class="seconds">{{ seconds }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "TimerText",
  props: {
    timer: {
      require: true
    },
    totalTime: {
      type: Number,
      require: true
    },
    selectedDuration: {
      type: Number,
      require: true
    }
  },
  computed: {
    message() {
      if (this.totalTime === null) {
        return "";
      } else if (this.totalTime === 0) {
        return "TIME'S UP !";
      } else if (this.totalTime < this.selectedDuration / 2) {
        return "More than halfway there !";
      }
      return "";
    },
    classMessage() {
      return {
        red: this.totalTime && this.totalTime < 20,
        blinking: this.totalTime && this.totalTime < 10
      };
    },
    minutes() {
      if (!this.timer) return "00";
      const minutes = Math.floor(this.totalTime / 60);
      return this.formatTime(minutes);
    },
    seconds() {
      if (!this.timer) return "00";
      const seconds = this.totalTime - this.minutes * 60;
      return this.formatTime(seconds);
    }
  },
  methods: {
    formatTime(time) {
      return (time < 10 ? "0" : "") + time;
    }
  }
};
</script>

<style scoped>
.timer-body {
  position: relative;
}
.timer-message-container {
  width: 100%;
  position: absolute;
  top: -32px;
}
.timer-message {
  font-size: 13px;
}
.timer-message.red {
  color: #da4f46;
}
.timer-message.blinking {
  animation: blinker 1s linear infinite;
}
.timer-total {
  font-size: 70px;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
