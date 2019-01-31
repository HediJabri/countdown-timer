<template>
  <div id="app">
    <countdown-timer />
  </div>
</template>

<script>
import CountdownTimer from "./components/CountdownTimer.vue";

export default {
  name: "app",
  components: {
    CountdownTimer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8faff;
  background: linear-gradient(to top right, #41b782, #86d169);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
