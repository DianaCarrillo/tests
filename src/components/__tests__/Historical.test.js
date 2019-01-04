/* eslint-disable no-undef*/

import { shallowMount } from "@vue/test-utils";
import Historical from "../Historical/Historical";
import HistoricalBody from "../Historical/HistoricalBody";

const wrapper = shallowMount(Historical);

describe("Historical", () => {
  it("Has HistoricalBody as a child", () => {
    expect(wrapper.find(HistoricalBody).exists()).toBe(true);
  });
});
