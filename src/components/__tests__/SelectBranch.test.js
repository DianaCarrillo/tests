/* eslint-disable no-undef*/

import { createLocalVue, mount } from "@vue/test-utils";
import {
  getQueriesForElement,
  prettyDOM,
  fireEvent
  // fireEvent
} from "dom-testing-library";

import SelectBranch from "../Diana/SelectBranch.vue";
import BranchesList from "../Diana/BranchesList.vue";
import CompanyList from "../Diana/CompanyList.vue";
// import CompanyListItem from "../Diana/CompanyListItem.vue";

function render(component, options) {
  const localVue = createLocalVue();
  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
    ...options
  });

  return {
    wrapper,
    ...getQueriesForElement(wrapper.element),
    debug: () => console.log(prettyDOM(wrapper.element))
  };
}

describe("SelectBranch", () => {
  it("It has only two active companies", () => {
    const { wrapper } = render(SelectBranch);

    let trueCount = 0;
    for (let i = 0; i < wrapper.vm.companiesFromServer.length; i++) {
      if (wrapper.vm.companiesFromServer[i].active) {
        trueCount++;
      }
    }
    expect(trueCount).toEqual(2);
  });

  it("has one non-active company", () => {
    const { wrapper } = render(SelectBranch);
    let nonActive;
    if (wrapper.vm.companiesFromServer.active === false) {
      nonActive++;
    }
    // for (let j = 0; j < wrapper.vm.companiesFromServer.length; j++) {
    //   if (!wrapper.vm.companiesFromServer[j].active) {
    //     nonActive++;
    //   }
    // }
    expect(nonActive).toEqual(1);
    const disabled = wrapper.findAll("button:disabled");
    expect(disabled.length).toEqual(nonActive);
  });

  it("It has two component children", () => {
    const { wrapper } = render(SelectBranch);
    const children = wrapper.vm.$children;
    expect(children.length).toBe(2);

    expect(wrapper.find(CompanyList).exists()).toBe(true);
    expect(wrapper.find(BranchesList).exists()).toBe(true);
  });
  // it("Highlights the currently selected item");
});

describe("BranchesList", () => {
  it("Hides the BranchList component", async () => {
    const { wrapper } = render(BranchesList, {
      propsData: {
        isHidden: true,
        companiesFromServer: [
          {
            name: "Empresa Alpha",
            taxId: "1234567890",
            active: true,
            branches: [
              {
                name: "Almacén de la Ciudad de México y EDOMEX",
                key: "12408416",
                active: true,
                type: "Almacén",
                icon: "icon warehouses"
              }
            ]
          }
        ]
      }
    });

    const div = wrapper.findAll("div").at(0);
    expect(div.classes()).toContain("is-hidden");
  });

  it("It renders braches column correctly", async () => {
    const { wrapper, getByText } = render(SelectBranch);
    const company = wrapper.vm.companiesFromServer[0].name;
    const companyName = getByText(company);

    await fireEvent.click(companyName);
    const div = wrapper.findAll("div").at(0);
    expect(div.classes("is-hidden")).toBe(false);
  });
});
