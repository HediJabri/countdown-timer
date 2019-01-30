<template>
  <div class="timer-speed-buttons">
    <button @click="changeSpeed(1)">
      1 X
    </button>
    <button @click="changeSpeed(1.5)">
      1.5 X
    </button>
    <button @click="changeSpeed(2)">
      2 X
    </button>
  </div>
</template>

<script>
export default {
  name: "CountdownTimerSpeedButtons",
  methods: {
    changeSpeed(speed) {
      const ms = 1000 / speed;
      this.$emit("changeSpeed", ms);
    }
  }
};
</script>

<style scoped></style>
