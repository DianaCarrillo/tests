<template>
  <div class="select-branch" style="border: 2px solid purple;">
    <div class="outer-20-b">
      <a href="#">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList
        :companiesFromServer="companiesFromServer"
        :handle-company-select="handleCompanySelect"
        :addActiveClass="addActiveClass"
        :activeClass="activeClass"
      />
      <BranchesList :companiesFromServer="companiesFromServer" :isHidden="isHidden"/>
    </div>
  </div>
</template>
<script>
import CompanyList from "./CompanyList.vue";
import BranchesList from "./BranchesList.vue";

export default {
  name: "SelectBranch",
  data() {
    return {
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
            },
            {
              name: "Almacén Sonora Grill",
              key: "90078434",
              active: false,
              type: "Almacén"
            },
            {
              name: "Almacén ASFSDFAD",
              key: "12408416",
              active: true,
              type: "Almacén"
            },
            {
              name: "Oficinas Sureste",
              key: "12408416",
              active: true,
              type: "Oficinas",
              icon: "icon offices"
            },
            {
              name: "Oficinas Pueblos de Santa Fe",
              key: "90078434",
              active: false,
              type: "Oficinas"
            },
            {
              name: "Oficinas Puerto Madero",
              key: "34567895",
              active: true,
              type: "Oficinas"
            },
            {
              name: "Oficinas Río Amazonas",
              key: "98324534",
              active: true,
              type: "Oficinas"
            },
            {
              name: "Tienda Mixcoac",
              key: "34657890",
              active: true,
              type: "Tiendas",
              icon: "icon stores"
            },
            {
              name: "Tienda centralizada Cancún A",
              key: "32344456",
              active: false,
              type: "Tiendas"
            },
            {
              name: "Tienda condesa",
              key: "25678965",
              type: "Tiendas",
              active: true
            },
            {
              name: "Tienda metro chilpancingo",
              key: "25670005",
              active: true,
              type: "Tiendas"
            }
          ]
        },
        {
          name: "Empresa no patito S.A de C.V",
          taxId: "sdfghjkiuh",
          active: false
        },
        {
          name: "Almacén Sonora Grill",
          taxId: "jhsadf98ad",
          active: true
        }
      ],
      isHidden: true,
      activeClass: false
    };
  },
  methods: {
    handleCompanySelect(id, active) {
      this.showBranch(id);
      this.addActiveClass(active, id);
    },
    addActiveClass(active, id) {
      // const button = document.getElementsByTagName("button");
      // console.log(button);
      // Lo estoy poniendo cada que handlecompanySelect se ativa, active se convierte en una class del button
      if (active == true && id === "1234567890") {
        return (this.activeClass = !this.activeClass);
      }
    },
    showBranch(id) {
      if (id === "1234567890") {
        return (this.isHidden = !this.isHidden);
      }
    }
  },
  components: {
    CompanyList,
    BranchesList
  }
};
</script>
