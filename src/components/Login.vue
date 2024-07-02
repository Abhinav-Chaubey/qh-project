<template>
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="7">
            <v-card class="elevation-12">
              <v-row class="fill-height">
                <v-col cols="5" class="bg-498a3a d-flex align-center justify-center bd-10-left">
                  <v-card-text class="white--text my-7">
                    <h1 class="text-center pb-5">Welcome Back!</h1>
                    <h5 class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, odit repudiandae quae debitis optio sed accusantium explicabo quibusdam. Fugit, doloremque.</h5>
                  </v-card-text>
                </v-col>
                <v-col cols="7" class="d-flex align-center justify-center">
                  <v-card-text class="my-7">
                    <h1 class="text-center color-498a3a">Login</h1>
                      <v-text-field label="Email" name="Email" type="text" v-model="email" />
                      <v-text-field id="password" label="Password" name="password" v-model="password" type="password" />
                    <div class="text-center mt-5">
                      <v-btn rounded dark color="#498a3a" class="pl-12 pr-12 pt-5 pb-5" @click="login()"><h3>Login</h3></v-btn>
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

  
  <script>
    import {mapState} from 'vuex';
  export default {
    name: 'LoginPage',
    data: () => ({
      email: '',
      password: ''
    }),
    computed: {
    ...mapState({
        isAuthUser: state => state.isAuthUser
    })
  },
    props: {
      source: String
    },
    methods: {
      login () {
        if (this.email && this.password) {
          this.$store.dispatch('isAuthUser', true);
          this.$router.push({path: '/'})
        }
      }
    },
  };
  </script>
