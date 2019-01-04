/* eslint-disable no-undef*/
import { shallowMount } from "@vue/test-utils";
import HistoricalFooter from "../Historical/HistoricalFooter";

const wrapper = shallowMount(HistoricalFooter);

describe("HistoricalFooter", () => {
  it("Renders footer", () => {
    expect(wrapper.contains("a")).toBe(true);
    expect(wrapper.find("a").classes("historical-footer")).toBe(true);
  });
});
