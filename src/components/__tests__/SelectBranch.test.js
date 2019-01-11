/* eslint-disable no-undef*/

import { createLocalVue, mount } from "@vue/test-utils";
import {
  getQueriesForElement,
  prettyDOM,
  fireEvent
} from "dom-testing-library";

import SelectBranch from "../Diana/SelectBranch.vue";
import BranchesListItem from "../Diana/BranchesListItem.vue";

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

describe("BranchesListItem", () => {
  it("Renders Branches column correcly", () => {
    const { wrapper, getByText } = render(BranchesListItem);

    wrapper.vm.handleCompanySelect(wrapper.vm.companiesFromServer[0]);
    expect(wrapper.find("button").classes("is-hidden")).toBe(true);
    // // Encontrar la clase isHidden. is hidden está después de un click
    // const companyName = wrapper.vm.companiesFromServer[0].name;
    // const textCompany = getByText(companyName);
    // await fireEvent.click(textCompany);
    // const isHidden = wrapper.find(".is-hidden");
    // expect(isHidden).toBe(true);
  });
});

describe("SelectBranch", () => {
  it("It always has TWO and only TWO active company", () => {
    const { wrapper } = render(SelectBranch);

    let trueCount = 0;
    for (let i = 0; i < wrapper.vm.companiesFromServer.length; i++) {
      if (wrapper.vm.companiesFromServer[i].active) {
        trueCount++;
      }
    }
    expect(trueCount).toEqual(2);
  });

  it("it highlights the currently selected item", async () => {
    const { wrapper, getByText } = render(SelectBranch);

    const item1Name = wrapper.vm.companiesFromServer[0].name;
    // const item3Name = wrapper.vm.companies[2].name;
    const item1 = getByText(item1Name);
    // const item2 = getByText(item2Name);

    await fireEvent.click(item1);

    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).toContain("Empresa Alpha");

    // await fireEvent.click(item3);

    // const activeItem3 = wrapper.find(".active");
    // expect(activeItem3.text()).toContain("Almacén Sonora Grill");

    // await fireEvent.click(item2);

    // const activeItem2 = wrapper.find(".active");
    // expect(activeItem2.text()).toContain("Beta");
  });
});
