<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <p>nama : {{ name }}</p>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      label="Password"
      hint="At least 8 characters"
      counter
      :rules="pwdRules"
      required
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" to="/">Create</v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

    <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
  </v-form>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    valid: true,
    name: "",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    pwdRules: [
      (v) => !!v || "Required.",
      (v) => v.length >= 8 || "Min 8 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>