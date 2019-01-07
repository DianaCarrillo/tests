/* eslint-disable no-undef*/

import { mount } from "@vue/test-utils";
import Historical from "../Historical/Historical";
import HistoricalBody from "../Historical/HistoricalBody";
import HistoricalFooter from "../Historical/HistoricalFooter";

describe("Historical", () => {
 const wrapper = mount(Historical);

  it("Has three children components", () => {
    const children = wrapper.vm.$children;
    expect(children.length).toBe(3);

    expect(wrapper.find(HistoricalFooter).exists()).toBe(true);
    expect(wrapper.find(HistoricalBody).exists()).toBe(true);
  });
});

describe("HistoricalFooter", () => {
const wrapper = mount(HistoricalFooter);

  it("has a class", () => {
    expect(wrapper.contains("a")).toBe(true);
    expect(wrapper.find("a").classes("historical-footer")).toBe(true);
  });
});
