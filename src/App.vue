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
