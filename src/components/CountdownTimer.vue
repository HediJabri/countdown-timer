<template>
  <div>
    <h3 class="timer-title">Countdown Timer</h3>
    <div class="timer">
      <div class="timer-header">
        <timer-form
          :timer="timer"
          @resetTimer="resetTimer()"
          @initTimer="initTimer($event)"
        />
      </div>
      <div class="timer-body">
        <timer-body
          :timer="timer"
          :totalTime="totalTime"
          :selectedDuration="selectedDuration"
        />
        <timer-stop-button
          v-if="timer"
          :timerIsRunning="timerIsRunning"
          @stopTimer="stopTimer()"
          @startTimer="startTimer()"
        />
      </div>
      <div class="timer-footer">
        <timer-speed-buttons
          v-if="timer"
          @changeSpeed="changeTimerSpeed($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TimerForm from "@/components/TimerForm";
import TimerBody from "@/components/TimerBody";
import TimerStopButton from "@/components/TimerStopButton";
import TimerSpeedButtons from "@/components/TimerSpeedButtons";

export default {
  name: "CountDownTimer",
  components: {
    TimerForm,
    TimerBody,
    TimerStopButton,
    TimerSpeedButtons
  },
  data() {
    return {
      selectedDuration: null,
      timer: null,
      totalTime: null,
      timerIsRunning: false,
      timerSpeed: null
    };
  },
  methods: {
    countdown() {
      this.totalTime--;
      if (this.totalTime === 0) this.endTimer();
    },
    initTimer(inputNumber) {
      if (this.totalTime) return;
      this.timerSpeed = 1000;
      this.selectedDuration = inputNumber * 60;
      this.totalTime = this.selectedDuration;
      this.startTimer();
    },
    startTimer() {
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
      this.selectedDuration = null;
      this.timer = null;
      this.timerIsRunning = false;
      this.timerSpeed = null;
    },
    changeTimerSpeed(ms) {
      this.timerSpeed = ms;
      if (this.timerIsRunning) {
        clearInterval(this.timer);
        this.timer = setInterval(() => this.countdown(), ms);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.timer {
  width: 400px;
  min-height: 310px;
  margin: 20px auto;
  background: #fff;
  padding: 25px;
  border-radius: 3px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
}
.timer-title {
  color: white;
  height: 42px;
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 3.5px;
}
.timer-header {
  margin-top: 25px;
}
.timer-body {
  position: relative;
}
.timer-footer {
  margin-top: 30px;
}
</style>
