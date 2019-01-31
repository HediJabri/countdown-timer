import { shallowMount } from "@vue/test-utils";
import TimerStopButton from "@/components/TimerStopButton.vue";

describe("TimerStopButton", () => {
  describe("Stop button when timer is running", () => {
    let wrapper;
    const propsData = { timerIsRunning: true };
    beforeEach(() => {
      wrapper = shallowMount(TimerStopButton, { propsData });
    });

    it("has a stop button", () => {
      expect(wrapper.contains(".btn-stop")).toBe(true);
    });

    it("emit a stopTimer event on click", () => {
      const btn = wrapper.find(".btn-stop");
      btn.trigger("click");
      expect(wrapper.emitted().stopTimer).toBeTruthy();
    });
  });
  describe("Start button when timer is not running", () => {
    let wrapper;
    const propsData = { timerIsRunning: false };
    beforeEach(() => {
      wrapper = shallowMount(TimerStopButton, { propsData });
    });

    it("has a start button", () => {
      expect(wrapper.contains(".btn-start")).toBe(true);
    });

    it("emit a startTimer event on click", () => {
      const btn = wrapper.find(".btn-start");
      btn.trigger("click");
      expect(wrapper.emitted().startTimer).toBeTruthy();
    });
  });
});
