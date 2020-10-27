<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

import Navigation from "./components/Nav";
import { loadCldr,setCurrencyCode } from '@syncfusion/ej2-base';
import * as currencies from "../currencies.json";
import {setCulture} from '@syncfusion/ej2-base';
import * as gregorian from "../ca-gregorian.json";
import * as numbers from "../numbers.json";

loadCldr(currencies, gregorian, numbers)
setCulture("es");
setCurrencyCode("IDR");

export default {
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
