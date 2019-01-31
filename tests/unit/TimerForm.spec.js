import { shallowMount } from "@vue/test-utils";
import TimerForm from "@/components/TimerForm.vue";

describe("TimerForm", () => {
  describe("Start button when timer is not running", () => {
    let wrapper;
    const propsData = { timer: null };
    beforeEach(() => {
      wrapper = shallowMount(TimerForm, { propsData });
    });

    it("has a start button", () => {
      expect(wrapper.contains(".btn-form-start")).toBe(true);
    });

    it("set errorInputMessage on click if inputNumber is not valid", () => {
      wrapper.setData({ inputNumber: -1, errorInputMessage: null });
      const btn = wrapper.find(".btn-form-start");
      btn.trigger("click");
      expect(wrapper.vm.errorInputMessage).toBe("Please enter a valid number");
    });

    it("emit an initTimer event on click if inputNumber is valid", () => {
      wrapper.setData({ inputNumber: 1, errorInputMessage: null });
      const btn = wrapper.find(".btn-form-start");
      btn.trigger("click");
      expect(wrapper.emitted().initTimer).toBeTruthy();
    });
  });

  describe("Reset button when timer is running", () => {
    let wrapper;
    const propsData = { timer: 1 };
    beforeEach(() => {
      wrapper = shallowMount(TimerForm, { propsData });
    });

    it("has a reset button", () => {
      expect(wrapper.contains(".btn-form-reset")).toBe(true);
    });

    it("emit a resetTimer on click", () => {
      wrapper.setData({ inputNumber: 1, errorInputMessage: null });
      const btn = wrapper.find(".btn-form-reset");
      btn.trigger("click");
      expect(wrapper.emitted().resetTimer).toBeTruthy();
    });
  });
});
