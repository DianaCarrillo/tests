<template>
  <div class="select-branch" style="border: 2px solid purple;">
    <div class="outer-20-b">
      <a href="#">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList
        :companies="companies"
        :companiesFromServer="companiesFromServer"
        :handle-company-select="handleCompanySelect"
      />
      <StorePicker :companies="companies"/>
    </div>
  </div>
</template>
<script>
import CompanyList from "./CompanyList.vue";
import StorePicker from "./StorePicker.vue";

export default {
  name: "SomeComponent",
  data() {
    return {
      companiesFromServer: [
        {
          name: "Empresa Alpha ",
          taxId: "1234567890",
          branches: [
            {
              id: 11,
              name: "Almacén de la Ciudad de México y EDOMEX",
              key: "12408416",
              active: true,
              icon: "icon warehouses",
              locations: [
                {
                  address: "Montevideo",
                  key: "12408416",
                  active: true
                },
                {
                  address: "Calzada de Guadalupe CDMX",
                  key: "12408416",
                  active: false
                }
              ]
            },
            {
              id: 12,
              name: "Almacén Sonora Grill",
              key: "90078434",
              active: false,
              locations: [
                {
                  name: "Aragón",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 13,
              name: "Almacén ASFSDFAD",
              key: "12408416",
              active: true,
              locations: [
                {
                  name: "Indios Verdes",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 21,
              name: "Oficinas Sureste",
              key: "12408416",
              active: true,
              icon: "icon offices",
              locations: [
                {
                  name: "Indios Vallejo",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 22,
              name: "Oficinas Pueblos de Santa Fe",
              key: "90078434",
              active: false,
              locations: [
                {
                  name: "Mazatlán",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 23,
              name: "Oficinas Puerto Madero",
              key: "34567895",
              active: true,
              locations: [
                {
                  name: "Indios Riío Nazas",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 24,
              name: "Oficinas Río Amazonas",
              key: "98324534",
              active: true,
              locations: [
                {
                  name: "Chilpancingo",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 31,
              name: "Tienda Mixcoac",
              key: "34657890",
              active: true,
              icon: "icon stores",
              locations: [
                {
                  name: "Guanajuato",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 32,
              name: "Tienda centralizada Cancún A",
              key: "32344456",
              active: false,
              locations: [
                {
                  name: "Morelos",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 33,
              name: "Tienda condesa",
              key: "25678965",
              active: true,
              locations: [
                {
                  name: "Indios San Lazaro",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              id: 34,
              name: "Tienda metro chilpancingo",
              key: "25670005",
              active: true,
              locations: [
                {
                  name: "Nuevo León",
                  key: "34564459",
                  active: true
                }
              ]
            }
          ]
        },
        {
          name: "Empresa no patito S.A de C.V",
          taxId: "sdfghjkiuh"
        },
        {
          name: "Almacén Sonora Grill ",
          taxId: "jhsadf98ad"
        }
      ],
      activeCompanyTaxId: "1234567890"
    };
  },
  computed: {
    activeCompany() {
      return this.companiesFromServer[0];
    },
    companies() {
      return this.companiesFromServer.map(company => {
        return {
          ...company,
          ...{ active: company.taxId === this.activeCompanyTaxId }
        };
      });
    }
  },
  methods: {
    handleCompanySelect(taxId) {
      this.activeCompanyTaxId = taxId;
      // this.branchesList = companiesFromServer.branches;
      // si this.activeCompanyTaxId es true, renderee storepicker
    }
  },
  components: {
    CompanyList,
    StorePicker
  }
};
</script>
