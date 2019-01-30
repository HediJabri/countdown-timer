<template>
  <div class="timer-form">
    <p v-if="errorInputMessage">{{ errorInputMessage }}</p>
    <span>Countdown</span>
    <input type="number" v-model.number="inputNumber" min="1" />
    <button v-if="!timer" @click="validateInput">
      START
    </button>
    <button v-else @click="$emit('resetTimer')">
      RESET
    </button>
  </div>
</template>

<script>
export default {
  name: "CountdownTimerForm",
  props: {
    timer: {
      require: true
    }
  },
  data() {
    return {
      inputNumber: null,
      errorInputMessage: null
    };
  },
  methods: {
    validateInput() {
      if (this.inputNumber && typeof this.inputNumber == "number") {
        this.errorInputMessage = null;
        this.$emit("startTimer", this.inputNumber);
      } else {
        this.errorInputMessage = "Please enter a valid number";
      }
    }
  }
};
</script>

<style scoped></style>
