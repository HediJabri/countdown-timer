<template>
  <div>
    <div>
      <countdown-timer-form
        :timer="timer"
        @resetTimer="resetTimer()"
        @startTimer="startTimer($event)"
      />
    </div>
    <div class="timer">
      <countdown-timer-text :time="totalTime" :duration="duration" />
      <h3 class="timer-total">
        <span class="minutes">{{ minutes }}</span>
        <span class="separator">:</span>
        <span class="seconds">{{ seconds }}</span>
      </h3>
    </div>
    <countdown-timer-stop-button
      v-if="timer"
      :timerIsRunning="timerIsRunning"
      @stopTimer="stopTimer()"
      @startTimer="startTimer()"
    />
    <br />
    <countdown-timer-speed-buttons
      v-if="timer"
      @changeSpeed="changeTimerSpeed($event)"
    />
  </div>
</template>

<script>
import CountdownTimerForm from "@/components/CountdownTimerForm";
import CountdownTimerText from "@/components/CountdownTimerText";
import CountdownTimerStopButton from "@/components/CountdownTimerStopButton";
import CountdownTimerSpeedButtons from "@/components/CountdownTimerSpeedButtons";

export default {
  name: "CountDownTimer",
  components: {
    CountdownTimerForm,
    CountdownTimerText,
    CountdownTimerStopButton,
    CountdownTimerSpeedButtons
  },
  data() {
    return {
      duration: null,
      timer: null,
      totalTime: null,
      timerIsRunning: false,
      timerSpeed: 1000
    };
  },
  computed: {
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
    countdown() {
      this.totalTime--;
      if (this.totalTime === 0) this.endTimer();
    },
    startTimer(inputNumber) {
      if (inputNumber && !this.totalTime) {
        this.timerSpeed = 1000;
        this.duration = inputNumber * 60;
        this.totalTime = this.duration;
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
    },
    resetTimer() {
      clearInterval(this.timer);
      this.totalTime = null;
      this.duration = null;
      this.timer = null;
      this.timerIsRunning = false;
    },
    changeTimerSpeed(ms) {
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

<style scoped></style>
