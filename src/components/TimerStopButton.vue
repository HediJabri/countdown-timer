<template>
  <div class="timer-stop-button">
    <div class="btn btn-stop" v-if="timerIsRunning" @click="$emit('stopTimer')">
      <i class="fa fa-pause"></i>
    </div>
    <div class="btn btn-start" v-else @click="$emit('startTimer')">
      <i class="fa fa-play"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerStopButton",
  props: {
    timerIsRunning: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.timer-stop-button {
  .btn {
    color: white;
    font-weight: 700;
    transition: 0.3s;
    border: none;
    background: linear-gradient(to top right, #0c2b4d, #556a82);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    position: absolute;
    right: 30px;
    top: 20px;
    i {
      font-size: 13px;
      margin: 5px 0 0 0;
    }
    i.fa-play {
      margin-left: 1px;
    }
  }
}
</style>
