import { shallowMount } from "@vue/test-utils";
import TimerSpeedButtons from "@/components/TimerSpeedButtons.vue";

describe("TimerSpeedButtons", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TimerSpeedButtons);
    wrapper.setData({ speedValues: [1, 1.5, 2], activeValue: 1 });
  });

  it("has speed buttons", () => {
    const speedValuesLength = wrapper.vm.speedValues.length;
    expect(wrapper.findAll(".btn-speed").length).toBe(speedValuesLength);
  });

  it("emit a changeSpeed event on click with the correct payload value", () => {
    const btn = wrapper.find(".btn-speed");
    btn.trigger("click");
    expect(wrapper.emitted().changeSpeed).toBeTruthy();
    expect(wrapper.emitted().changeSpeed[0]).toEqual([1000]);
  });
});
