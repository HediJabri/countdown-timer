<template>
  <div class="timer-speed-buttons">
    <div
      class="btn btn-speed"
      :class="{ active: isActiveValue(value) }"
      @click="changeSpeed(value)"
      v-for="value in speedValues"
      :key="value"
    >
      {{ value }}x
    </div>
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

<style scoped lang="scss">
.btn {
  font-weight: 700;
  transition: 0.3s;
  border: none;
  margin: 0 4px;
  border: 1px solid;
}
.btn.active {
  color: white;
  font-weight: 700;
  transition: 0.3s;
  background: linear-gradient(to top right, #0c2b4d, #556a82);
}
</style>
