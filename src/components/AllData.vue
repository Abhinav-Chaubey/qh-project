<template>
    <div>
    <v-container style="border: 1px solid #80808030;border-radius:5px;" class="mt-5 pl-0 pr-0 pt-0 ">
      <div class="bg-498a3a white--text text-left" style="border-radius: 5px 5px 0 0;padding:10px">
        <span>Data for Main Banner Settings</span>
        <v-btn @click="$parent.activateTab('home')" color="cursor-pointer elevation-0" style="height: 25px;float:right">Edit</v-btn>
      </div>
      <v-row class="ma-0">
        <v-col cols="12" class="text-left break-word p-30px mh-300px overflow-auto" v-html="formattedJsonBanner">
        </v-col>
      </v-row>
    </v-container>
    <v-container style="border: 1px solid #80808030;border-radius:5px;" class="mt-5 pl-0 pr-0 pt-0 ">
        <div class="bg-498a3a white--text text-left" style="border-radius: 5px 5px 0 0;padding:10px">
          <span>Data for Banner Systems Settings</span>
        <v-btn @click="$parent.activateTab('homeSystems')" color="cursor-pointer elevation-0" style="height: 25px;float:right">Edit</v-btn>
        </div>
        <v-row class="ma-0">
          <v-col cols="12" class="text-left break-word p-30px mh-300px overflow-auto" v-html="formattedJsonSystem">
          </v-col>
        </v-row>
      </v-container>
  </div>
  </template>
  
  <script>
     import {mapState} from 'vuex';
  export default {
    name: 'AllData',
    data() {
      return {
      };
    },
    computed: {
    ...mapState({
        bannerDataSettings: state => state.bannerDataSettings,
        mainBannerData: state => state.mainBannerData
    }),
    formattedJsonBanner() {
      const jsonString = JSON.stringify(this.mainBannerData, null, 2);
      let formattedString = jsonString.replace(/"(\w+)"(?=:)/g, '<span class="json-key">"$1"</span>');
      formattedString = formattedString.replace(/:\s*("[^"]*"|\b\d+\b)/g, ': <span class="json-value">$1</span>');
      return formattedString;
    },
    formattedJsonSystem() {
      const jsonString = JSON.stringify(this.bannerDataSettings, null, 2);
      let formattedString = jsonString.replace(/"(\w+)"(?=:)/g, '<span class="json-key">"$1"</span>');
      formattedString = formattedString.replace(/:\s*("[^"]*"|\b\d+\b)/g, ': <span class="json-value">$1</span>');
      return formattedString;
    }
  },
  watch: {
  },
    methods: {
    },
  };
  </script>
  
  <style lang="css">
  .json-key {
    color: #1e88e5;
    font-size: 12px;
  }
  
  .json-value {
    color: #4caf50;
    font-size: 11px;
  }
  .break-word {
    word-wrap: break-word;
  }
  .mh-300px {
    max-height: 300px;
  }
  .overflow-auto {
    overflow-y: auto;
  }
  </style>