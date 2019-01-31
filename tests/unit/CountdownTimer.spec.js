import { shallowMount } from "@vue/test-utils";
import CountdownTimer from "@/components/CountdownTimer";
import TimerForm from "@/components/TimerForm";
import TimerStopButton from "@/components/TimerStopButton";
import TimerSpeedButtons from "@/components/TimerSpeedButtons";

describe("CountdownTimer", () => {
  describe("Initialize timer", () => {
    const vmData = {
      selectedDuration: null,
      timer: null,
      totalTime: null,
      timerIsRunning: false,
      timerSpeed: null
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CountdownTimer, { vmData });
    });

    it("set the correct data values when initTimer event is emitted", () => {
      wrapper.find(TimerForm).vm.$emit("initTimer", 1);
      expect(wrapper.vm.timerSpeed).toBe(1000);
      expect(wrapper.vm.selectedDuration).toBe(60);
      expect(wrapper.vm.totalTime).toBe(60);
    });

    it("call the startTimer methods once", () => {
      const stub = jest.fn();
      wrapper.setMethods({ startTimer: stub });
      wrapper.vm.$on("startTimer", stub);
      wrapper.find(TimerForm).vm.$emit("initTimer", 1);
      expect(stub).toHaveBeenCalledTimes(1);
    });
  });

  describe("Start timer", () => {
    const vmData = {
      selectedDuration: 60,
      timer: 1,
      totalTime: 60,
      timerIsRunning: false,
      timerSpeed: 1000
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CountdownTimer);
      wrapper.setData(vmData);
    });
    it("contains TimerStopButton component ", () => {
      expect(wrapper.contains(TimerStopButton)).toBe(true);
    });

    it("set timerIsRunning value to true when startTimer event is emitted", () => {
      wrapper.find(TimerStopButton).vm.$emit("startTimer");
      expect(wrapper.vm.timerIsRunning).toBe(true);
    });
  });

  describe("Stop timer", () => {
    const vmData = {
      selectedDuration: 60,
      timer: 1,
      totalTime: 60,
      timerIsRunning: true,
      timerSpeed: 1000
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CountdownTimer);
      wrapper.setData(vmData);
    });
    it("contains TimerStopButton component ", () => {
      expect(wrapper.contains(TimerStopButton)).toBe(true);
    });

    it("set timerIsRunning value to false when stopTimer event is emitted", () => {
      wrapper.find(TimerStopButton).vm.$emit("stopTimer");
      expect(wrapper.vm.timerIsRunning).toBe(false);
    });
  });

  describe("End timer", () => {
    const vmData = {
      selectedDuration: 60,
      timer: 1,
      totalTime: 1,
      timerIsRunning: true,
      timerSpeed: 1000
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CountdownTimer);
      wrapper.setData(vmData);
    });
    it("call stopTimer when endTimer method is executed", () => {
      const stub = jest.fn();
      wrapper.setMethods({ stopTimer: stub });
      wrapper.vm.endTimer();
      expect(stub).toHaveBeenCalledTimes(1);
    });

    it("set timer value to null when endTimer method is executed", () => {
      wrapper.vm.endTimer();
      expect(wrapper.vm.timer).toBe(null);
    });
  });

  describe("Reset timer", () => {
    const vmData = {
      selectedDuration: 60,
      timer: 1,
      totalTime: 30,
      timerIsRunning: true,
      timerSpeed: 1000
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CountdownTimer);
      wrapper.setData(vmData);
    });
    it("contains TimerForm component ", () => {
      expect(wrapper.contains(TimerForm)).toBe(true);
    });

    it("reset the correct data values when resetTimer event is emitted", () => {
      wrapper.find(TimerForm).vm.$emit("resetTimer");
      expect(wrapper.vm.totalTime).toBe(null);
      expect(wrapper.vm.selectedDuration).toBe(null);
      expect(wrapper.vm.timer).toBe(null);
      expect(wrapper.vm.timerIsRunning).toBe(false);
      expect(wrapper.vm.timerSpeed).toBe(null);
    });
  });

  describe("Change timer speed", () => {
    const vmData = {
      selectedDuration: 60,
      timer: 1,
      totalTime: 30,
      timerIsRunning: true,
      timerSpeed: 1000
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CountdownTimer);
      wrapper.setData(vmData);
    });
    it("contains TimerSpeedButtons component ", () => {
      expect(wrapper.contains(TimerSpeedButtons)).toBe(true);
    });

    it("set the correct value to timerSpeed when changeSpeed event is emitted", () => {
      wrapper.find(TimerSpeedButtons).vm.$emit("changeSpeed", 500);
      expect(wrapper.vm.timerSpeed).toBe(500);
    });
  });

  describe("Count Down", () => {
    const vmData = {
      selectedDuration: 60,
      timer: 1,
      totalTime: 30,
      timerIsRunning: true,
      timerSpeed: 1000
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(CountdownTimer);
      wrapper.setData(vmData);
    });
    it("decrement the totalTime value when the countdown method is executed", () => {
      wrapper.vm.countdown();
      expect(wrapper.vm.totalTime).toBe(29);
    });

    it("call endTimer method if totalTime value equals 0", () => {
      const stub = jest.fn();
      wrapper.setMethods({ endTimer: stub });
      wrapper.vm.totalTime = 1;
      wrapper.vm.countdown();
      expect(stub).toHaveBeenCalledTimes(1);
    });
  });
});
