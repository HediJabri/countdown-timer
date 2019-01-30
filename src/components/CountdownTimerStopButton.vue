<template>
  <div class="timer-stop-button">
    <button v-if="timerIsRunning" @click="$emit('stopTimer')">
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button v-else @click="$emit('startTimer')">
      <i class="glyphicon glyphicon-play"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "CountdownTimerStopButton",
  props: {
    timerIsRunning: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped></style>
