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
        <!-- <v-card class="mx-auto" max-width="600" outlined>
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

                <v-btn color="success" type="submit" @click.prevent="login">Log-in</v-btn>
                <v-col md-12 class="mt-2">
                  <p>
                    Belum Punya Akun?
                    <router-link to="register">Klik disini</router-link>
                  </p>
                </v-col>
              </v-form>
            </v-list-item-content>
          </v-list-item>
        </v-card> -->

        <div class="login">
          <form action="" class="form">
            <div class="form-group">
              <input type="text" placeholder="Email" class="form-control" v-model="credentials.email">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Password" class="form-control" v-model="credentials.password">
            </div>
            <button class="btn btn-primary" @click="login">Login</button>
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '../services/http'
// import axios from 'axios'
export default {
  token: '',
  name:"login",
  data: () => ({
    sementara: [],
    show1: false,
    email1:'',
      credentials:{
        email: '',
        password: ''
      },
    return:{
      loading: true
  
    },

        
  }),
  mounted(){
    // this.token = localStorage.getItem('token')
    // if(localStorage.state.token !== ''){
    //   this.$router.push('/customer')
    // }
    // console.log(this.token)
  },
  methods: {
    // reset() {
    //   this.$refs.form.reset();
    // },
    // async login() {
    //         const url = 'http://localhost:8000/api/login';
    //         const response = await axios.post(url, this.credentials, {
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         console.log(response);
    //         // this.$router.replace({ name: 'home' });
    //     },
    login(){
      api.post('/login', this.credentials)
        .then(res=>{
          // console.log(res.data.token)
          
          localStorage.setItem('token', res.data.token)
          if(res.data.status == false){
            console.log('email atau password salah')
            alert('Email Atau Passwrd Salah')
          } else {
            alert('Login Succes')
            this.$router.push('/customer')
          }

          // if(res.data.success){
          //   this.res.push(this.sementara)
          //   localStorage.email1 = this.email1
          //   // this.$store.commit('LOGIN_SUCCESS', res)
          //   // this.$store.state.user.token
          //   // // console.log(res.data)
          //   // this.$store.commit('setToken', this.$store.state.user.token)
          //   // localStorage.setItem('token', this.$store.state.user.token)
          //   // localStorage.setItem('token', JSON.stringify(res.data))
          //   // localStorage.getItem(res.data.token)
          //   // cookies.setItem('token',res.data.token)
          //   this.result = res.data
          //   this.$store.state.token = this.result.token
          //   console.log(this.sementara)
          // }
        })
        .catch(err=>{
          console.log(err)
          console.log('email atau password salah')
        })
        // localStorage.setItem('token', res.data.token)
        //     localStorage.getItem(res.token)
    }
  },
};

// vue.component("login", {
//   props: ["email"],
// });
</script>

<style>
</style>