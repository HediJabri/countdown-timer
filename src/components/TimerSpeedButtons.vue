<template>
  <div class="timer-speed-buttons">
    <button
      :class="{ active: isActiveValue(value) }"
      @click="changeSpeed(value)"
      v-for="value in speedValues"
      :key="value"
    >
      {{ value }} X
    </button>
  </div>
</template>

<script>
export default {
  name: "TimerSpeedButtons",
  data() {
    return {
      speedValues: [1, 1.5, 2],
      activeValue: 1
    };
  },
  methods: {
    isActiveValue(value) {
      return value === this.activeValue;
    },
    changeSpeed(value) {
      this.activeValue = value;
      const ms = 1000 / value;
      this.$emit("changeSpeed", ms);
    }
  }
};
</script>

<style scoped>
button.active {
  color: blue;
}
</style>
