<template>
 <ul class="menu-list">
   <MainItems 
   :active="active"
   :options="options" 
   :showAndActive="showAndActive"
   :submenu="submenu">
   </MainItems>
 </ul>
</template>

<script>
import MainItems from "./MainItems.vue";

export default {
  name: "Menu",
  components: {
    MainItems: MainItems
  },
  data() {
    return {
      active: false,
      submenu: [],
      options: [
        {
          item: "Mi gestionix",
          icon: "fas fa-building"
        },
        {
          item: "Compras y Proveedores",
          icon: "fas fa-shopping-basket",
          submenu: [
            { subitem: "Compras y Proveedores", icon: "fas fa-sales" },
            { subitem: "Proveedores", icon: "fas fa-hand-holding-box" },
            { subitem: "Pagos", icon: "fas fa-money-bill" },
            { subitem: "Categorías de egresos", icon: "fas fa-folder-money" }
          ]
        },
        {
          item: "Inventario",
          icon: "fas fa-box",
          submenu: [
            { subitem: "Productos", icon: "fas fa-tag" },
            { subitem: "Traspasar inventario", icon: "fas fa-box-open" },
            { subitem: "Recontar inventario", icon: "fas fa-boxes" },
            { subitem: "Actualización masiva", icon: "fas fa-box-alt" }
          ]
        },
        {
          item: "Ventas y Clientes",
          icon: "fas fa-usd-circle",
          submenu: [
            { subitem: "Ventas", icon: "fas fa-money-check-alt" },
            { subitem: "Mis Facturas", icon: "fas fa-file-invoice" },
            { subitem: "Pedidos", icon: "fas fa-file-check" },
            { subitem: "Clientes", icon: "fas fa-user" },
            { subitem: "Cobros", icon: "fas fa-hand-holding-usd" },
            { subitem: "Categorías de ingresos", icon: "fas fa-pennant" }
          ]
        },
        {
          item: "Reportes Inteligentes",
          icon: "fas fa-clipboard-list-check",
          submenu: [
            { subitem: "Inicio", icon: "fas fa-chart-line" },
            { subitem: "Resumen de Operaciones", icon: "fas fa-screen" },
            { subitem: "Ventas Diarias", icon: "fas fa-file-invoice-dollar" },
            { subitem: "Cuentas por Cobrar", icon: "fas fa-calendar-income" },
            { subitem: "Cuentas por Pagar", icon: "fas fa-calendar-payments" },
            { subitem: "Cambios en Inventarios", icon: "fas fa-dolly" }
          ]
        },
        {
          item: "Cuentas",
          icon: "fas fa-money-bill-alt"
        },
        {
          item: "Contabilidad",
          icon: "fas fa-calculator"
        }
      ]
    };
  },
  methods: {
    show(id) {
      let newArray = [];
      this.options.forEach(function(option) {
        if (id === option.item) {
          let arraySubmenu = option.submenu;
          arraySubmenu.forEach(function(submenu) {
            newArray.push(submenu);
          });
        }
      });

      return (this.submenu = newArray);
    },
    isActive() {
      return (this.active = !this.active);
    },
    showAndActive(id) {
      this.show(id);
      this.isActive();
    }
  }
};
</script>
