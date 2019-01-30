<template>
  <div>
    <div>
      <template>
        <p v-if="errorInputMessage">{{ errorInputMessage }}</p>
        <span>Countdown</span>
        <input type="number" v-model.number="inputNumber" min="1" />
        <button v-if="!timer" @click="validateInput">
          START
        </button>
        <button v-else @click="resetTimer">
          RESET
        </button>
      </template>
    </div>
    <div id="timer">
      <h5 id="timer-text">{{ durationMessage }}</h5>
      <h3>
        <span id="minutes">{{ minutes }}</span>
        <span id="separator">:</span>
        <span id="seconds">{{ seconds }}</span>
      </h3>
    </div>
    <div id="buttons" v-if="timer">
      <button v-if="timerIsRunning" @click="stopTimer">
        <i class="glyphicon glyphicon-pause"></i>
      </button>
      <button v-else @click="startTimer">
        <i class="glyphicon glyphicon-play"></i>
      </button>
    </div>
    <br />
    <div id="speed-buttons" v-if="timer">
      <button @click="changeTimerSpeed(1)">
        1 X
      </button>
      <button @click="changeTimerSpeed(1.5)">
        1.5 X
      </button>
      <button @click="changeTimerSpeed(2)">
        2 X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNumber: null,
      errorInputMessage: null,
      selectedDuration: null,
      timer: null,
      totalTime: null,
      timerIsRunning: false,
      timerSpeed: 1000
    };
  },
  computed: {
    durationMessage() {
      const moreThanHalfway = this.totalTime < this.selectedDuration / 2;
      if (this.totalTime === null) {
        return "";
      } else if (this.totalTime === 0) {
        return "Time’s up!”";
      } else if (moreThanHalfway) {
        if (this.totalTime === 20)
          document.getElementById("timer-text").classList.add("red");
        if (this.totalTime === 10)
          document.getElementById("timer-text").classList.add("blinking");
        return "More than halfway there";
      }
      return "";
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
    validateInput() {
      if (this.inputNumber && typeof this.inputNumber == "number") {
        this.errorInputMessage = null;
        this.startTimer();
      } else {
        this.errorInputMessage = "Please enter a valid number";
      }
    },
    countdown() {
      this.totalTime--;
      if (this.totalTime === 0) this.endTimer();
    },
    startTimer() {
      if (!this.totalTime) {
        this.timerSpeed = 1000;
        this.selectedDuration = this.inputNumber * 60;
        this.totalTime = this.selectedDuration;
      }
      this.timer = setInterval(() => this.countdown(), this.timerSpeed);
      this.timerIsRunning = true;
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timerIsRunning = false;
    },
    endTimer() {
      this.stopTimer();
      this.timer = null;
      document.getElementById("timer-text").classList.remove("blinking", "red");
    },
    resetTimer() {
      clearInterval(this.timer);
      this.totalTime = null;
      this.selectedDuration = null;
      this.timer = null;
      this.timerIsRunning = false;
    },
    changeTimerSpeed(speed) {
      const ms = 1000 / speed;
      this.timerSpeed = ms;
      if (this.timerIsRunning) {
        clearInterval(this.timer);
        this.timer = setInterval(() => this.countdown(), ms);
      }
    },

    formatTime(time) {
      return (time < 10 ? "0" : "") + time;
    }
  }
};
</script>

<style scoped>
#timer-text.red {
  color: red;
}
#timer-text.blinking {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
