<template>
  <nav>
    <!-- <v-toolbar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Todo</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="blue-grey lighten-5">
      <v-layout column align-center class="blue darken-4">
        <v-flex mt-2 mb-2>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="bay" />
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-navigation-drawer>-->
    <v-app-bar app color="primary" dark>   
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-btn class="mr-2" color="primary" to="invoice">invoice</v-btn>
      <v-btn class="mr-2" color="primary" to="home">Home</v-btn>
      <v-btn class="mr-2" color="primary" to="/">LogIn</v-btn>
      <v-btn class="mr-2" color="primary" to="pembelian">pembelian</v-btn>
      <v-btn class="mr-2" color="primary" to="invosync">InvoiceSync</v-btn>
      <v-btn class="mr-2" color="primary" to="customer">Customer</v-btn>
      <v-btn class="mr-2" color="primary" to="syncfusion">syncfusion</v-btn>
      <v-btn class="mr-2" color="primary" to="gridsyncfusion">gridSync</v-btn>
      <v-btn class="mr-2" color="primary" to="custsync">CustSync</v-btn>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      class="blue-grey lighten-5"
    >
      <v-layout column align-center class="blue darken-4">
        <v-flex mt-2 mb-2>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="bay" />
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="btn in button" :key="btn.text" link>
          <v-list-item-icon>
            <v-icon>{{ btn.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ btn.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      button: [
        { icon: "fa-home", text: "Dashboard", route: "/" },
        { icon: "fa-boxes", text: "Barang", route: "/" },
        { icon: "fa-truck", text: "Supplier", route: "/" },
        { icon: "fa-users", text: "Pelanggan", route: "/" },
        { icon: "fa-warehouse", text: "Gudang", route: "/" },
        { icon: "fa-cogs", text: "Pengaturan", route: "/" },
      ],
    };
  },
};
</script>

<style>
</style>