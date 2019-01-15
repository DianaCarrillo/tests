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
import BranchesListItem from "../Diana/BranchesListItem.vue";

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

  it("It renders braches column correctly", async () => {
    const { wrapper, getByText } = render(SelectBranch);
    const company = wrapper.vm.companiesFromServer[0].name;
    const companyName = getByText(company);

    await fireEvent.click(companyName);
    const div = wrapper.findAll("div").at(0);
    expect(div.classes("is-hidden")).toBe(false);
  });

  it("has one non-active company", () => {
    const { wrapper } = render(SelectBranch);
    let nonActive = 0;
    wrapper.vm.companiesFromServer.forEach(function(company) {
      if (company.active == false) {
        nonActive++;
      }
    });
    expect(nonActive).toEqual(1);
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
  it("Hides the BranchList component", async () => {
    const div = wrapper.findAll("div").at(0);
    expect(div.classes()).toContain("is-hidden");
  });
  it("returns the information for 'Almacén", () => {
    expect(wrapper.text()).toBe(
      `Almacenes 
        Almacén de la Ciudad de México y EDOMEX
          RFC: 12408416    Oficinas    Tiendas`
    );
  });

  it("has select-title and column classes", () => {
    const div = wrapper.findAll("div").at(0);
    expect(div.classes("column")).toBe(true);
    const secondDiv = wrapper.findAll("div").at(1);
    expect(secondDiv.classes("select-title")).toBe(true);
  });
});

describe("BranchesListItem", () => {
  it("Disables the elements", () => {
    const { wrapper } = render(BranchesListItem, {
      propsData: {
        branch: {
          active: false,
          key: "90078434",
          name: "Almacén Sonora Grill",
          type: "Almacén"
        }
      }
    });
    // const button = wrapper.findAll("button").at(0);
    // expect(button.props("disabled")).toBe("");
    expect(wrapper.html()).toBe(
      `<div class="item"><button disabled="disabled" class="select-item"><div class="info"><p>
        Almacén Sonora Grill
        <span class=""></span> <i class="fas fa-lock"></i> <span>RFC: 90078434</span></p></div> <div class="popover_wrapper"><a class="fas fa-question-circle"></a> <div class="push popover_content up"><p class="popover_message">
          No tienes
          <strong>permiso</strong> para modificar esta empresa.
        </p> <p class="popover_message"><span>Solicítalo</span> <a href="#" class="requestbranch">aquí</a> <span>.</span></p></div></div></button></div>`
    );
    // expect(wrapper.vm.find("button").props()["disabled"]).toBe(true);
  });
});
