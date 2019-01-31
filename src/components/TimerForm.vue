<template>
  <div class="timer-form">
    <form class="form-inline">
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          placeholder="(Min)"
          v-model.number="inputNumber"
          min="1"
        />
      </div>
      <div v-if="!timer" @click="validateInput" class="btn btn-form-start">
        START
      </div>
      <div v-else @click="$emit('resetTimer')" class="btn btn-form-reset">
        RESET
      </div>
    </form>
    <p class="form-error">
      <span v-show="errorInputMessage">{{ errorInputMessage }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "TimerForm",
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
      if (typeof this.inputNumber == "number" && this.inputNumber > 0) {
        this.errorInputMessage = null;
        this.$emit("initTimer", this.inputNumber);
      } else {
        this.errorInputMessage = "Please enter a valid number";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form-control {
  margin-right: 10px;
  width: 90px;
}
.form-error {
  color: #da4f46;
  height: 20px;
  padding-top: 8px;
  font-size: 12px;
}
.btn-form-start,
.btn-form-reset {
  border: none;
  color: white;
  font-weight: 700;
  transition: 0.3s;
  letter-spacing: 1px;
  background: linear-gradient(to top right, #41b782, #86d169);
  &:hover {
    opacity: 0.8;
  }
}
</style>
