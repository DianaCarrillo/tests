/* eslint-disable no-undef*/
import { shallowMount } from "@vue/test-utils";
import SomeComponent from "../SideBar/SomeComponent.vue";

describe("someComponent.vue", () => {

  it("displays a welcome message", () => {
    const msg = "Welcome to Your Vue.js App";
    const wrapper = shallowMount(SomeComponent, {
      propsData: {
        msg: msg
      }
    });
  expect(wrapper.find("h1").text()).toBe("Welcome to Your Vue.js App");
  });
});
