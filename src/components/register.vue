<template>
  <v-container>
    <h1>halaman register {{name}}</h1>
    <formUser />
    <p class="mt-2">
      Sudah punya akun? Log in
      <router-link to="/">disini</router-link>
    </p>
  </v-container>
</template>

<script>
import formUser from "./formUser";
export default {
  components: {
    formUser,
  },

  // resetValidation() {
  //   this.$refs.form.resetValidation();
  // },
};
</script>

<style></style>
