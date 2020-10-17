<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="150" />
      </v-col>

      <v-col>
        <h1 class="font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">Please log in first</p>
      </v-col>

      <v-col cols="12" class="mb-2">
        <v-card class="mx-auto" max-width="600" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Login Form</div>
              <v-form ref="form" @submit.prevent="submit">
                <v-text-field label="E-mail" v-model="email" required></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>

                <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

                <v-btn color="success" type="submit" @click="submit">Log-in</v-btn>
                <v-col md-12 class="mt-2">
                  <p>
                    Belum Punya Akun?
                    <router-link to="register">Klik disini</router-link>
                  </p>
                </v-col>
              </v-form>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  
  data: () => ({
    show1: false,
    
            
                email: '',
                password: '',
            
        
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    async submit() {
            const url = 'http://localhost:8000/api/login';
            const response = await axios.post(url, this.form, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            console.log(response);
            // this.$router.replace({ name: 'home' });
        },
  },
};

// vue.component("login", {
//   props: ["email"],
// });
</script>

<style>
</style>