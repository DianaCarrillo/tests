/* eslint-disable no-undef*/

import { createLocalVue, mount } from "@vue/test-utils";
import {
  getQueriesForElement,
  prettyDOM,
  fireEvent
} from "dom-testing-library";

import BranchPicker from "../BranchPicker.vue";
import CompanyListItem from "../CompanyListItem.vue";

function render(component, options) {
  const localVue = createLocalVue();
  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
    ...options
  });

  return {
    // puedes extrar propiedades de un objectos devueve todas las opciones para que laspuedas extraer fácilmente
    wrapper,
    ...getQueriesForElement(wrapper.element),
    debug: () => console.log(prettyDOM(wrapper.element))
  };
}

describe("BranchPicker", () => {
  it("Updates active company correctly", () => {
    const { wrapper } = render(BranchPicker);

    expect(wrapper.vm.companies[0].active).toBe(true);
    wrapper.vm.handleCompanySelect(wrapper.vm.companies[2].taxId);
    expect(wrapper.vm.companies[0].active).toBe(false);
    expect(wrapper.vm.companies[2].active).toBe(true);
  });

  it("It always has ONE and only ONE active company", () => {
    const { wrapper } = render(BranchPicker);

    let trueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].active) {
        trueCount++;
      }
    }
    expect(trueCount).toEqual(1);

    wrapper.vm.handleCompanySelect(wrapper.vm.companies[2].taxId);

    let secondTrueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].active) {
        secondTrueCount++;
      }
    }
    expect(secondTrueCount).toEqual(1);
  });
  it("it highlights the currently selected item", async () => {
    const { getByText, wrapper, debug } = render(BranchPicker);

    const item2Name = wrapper.vm.companies[1].name;
    const item3Name = wrapper.vm.companies[2].name;
    const item3 = getByText(item3Name);
    const item2 = getByText(item2Name);

    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).toContain("Alpha");

    await fireEvent.click(item3);

    const activeItem3 = wrapper.find(".active");
    expect(activeItem3.text()).toContain("Gamma");

    await fireEvent.click(item2);

    const activeItem2 = wrapper.find(".active");
    expect(activeItem2.text()).toContain("Beta");
  });
});
