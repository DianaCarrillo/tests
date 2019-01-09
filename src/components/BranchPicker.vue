<template>
  <div class="select-branch" style="border: 2px solid purple;">
    <div class="outer-20-b">
      <a href="#">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList
        :companiesFromServer="companiesFromServer"
        :handle-company-select="handleCompanySelect"
      />
      <StorePicker :companiesFromServer="companiesFromServer"/>
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
          active: true,
          branches: [
            {
              // Almacenes: [
              // {
              name: "Almacén de la Ciudad de México y EDOMEX",
              key: "12408416",
              active: true,
              type: "Almacén",
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
              name: "Almacén Sonora Grill",
              key: "90078434",
              active: false,
              type: "Almacén",
              locations: [
                {
                  name: "Aragón",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              name: "Almacén ASFSDFAD",
              key: "12408416",
              active: true,
              type: "Almacén",
              locations: [
                {
                  name: "Indios Verdes",
                  key: "34564459",
                  active: true
                }
              ]
              // }
              // ]
            },
            {
              // Oficinas: [
              // {
              name: "Oficinas Sureste",
              key: "12408416",
              active: true,
              type: "Oficinas",
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
              name: "Oficinas Pueblos de Santa Fe",
              key: "90078434",
              active: false,
              type: "Oficinas",
              locations: [
                {
                  name: "Mazatlán",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              name: "Oficinas Puerto Madero",
              key: "34567895",
              active: true,
              type: "Oficinas",
              locations: [
                {
                  name: "Indios Riío Nazas",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              name: "Oficinas Río Amazonas",
              key: "98324534",
              active: true,
              type: "Oficinas",
              locations: [
                {
                  name: "Chilpancingo",
                  key: "34564459",
                  active: true
                }
              ]
              // }
              // ]
            },
            {
              // Tiendas: [
              // {
              name: "Tienda Mixcoac",
              key: "34657890",
              active: true,
              type: "Tiendas",
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
              name: "Tienda centralizada Cancún A",
              key: "32344456",
              active: false,
              type: "Tiendas",
              locations: [
                {
                  name: "Morelos",
                  key: "34564459",
                  active: true
                }
              ]
            },
            {
              name: "Tienda condesa",
              key: "25678965",
              type: "Tiendas",
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
              name: "Tienda metro chilpancingo",
              key: "25670005",
              active: true,
              type: "Tiendas",
              locations: [
                {
                  name: "Nuevo León",
                  key: "34564459",
                  active: true
                }
              ]
              // }
              // ]
            }
          ]
        },
        {
          name: "Empresa no patito S.A de C.V",
          taxId: "sdfghjkiuh",
          active: false
        },
        {
          name: "Almacén Sonora Grill ",
          taxId: "jhsadf98ad",
          active: true
        }
      ],
      activeCompanyTaxId: "1234567890",
      branchesList: []
    };
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
