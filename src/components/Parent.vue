<template>
    <div class="text-center my-6">
      <div class="am-banner-heading mb-3">Switch between Main Banner Settings and Banner Systems Settings</div>
      <div class="mb-10">
        <v-btn
          rounded
          outlined
          :class="{ 'active-tab': activeTab === 'home' }"
          class="px-12 py-6 mr-5"
          @click="activateTab('home')"
          color="#498a3a"
        >
          <span>Main Banner Settings</span>
        </v-btn>
        <v-btn
          rounded
          outlined
          class="px-12 py-6 mr-5"
          :class="{ 'active-tab': activeTab === 'homeSystems' }"
          @click="activateTab('homeSystems')"
          color="#498a3a"
        >
          <span>Banner Systems Settings</span>
        </v-btn>
        <v-btn
          rounded
          outlined
          class="px-12 py-6"
          :class="{ 'active-tab': activeTab === 'allData' }"
          @click="activateTab('allData')"
          color="#498a3a"
        >
          <span>Go To All Data Section</span>
        </v-btn>
      </div>
      <div v-if="activeTab === 'home'">
        <Home />
    </div>
    <div v-if="activeTab === 'homeSystems'">
        <HomeSystems />
    </div>
    <div v-if="activeTab === 'allData'">
        <AllData />
    </div>
    </div>
  </template>
  
  <script>
    import Home from './Home.vue';
    import HomeSystems from './HomeSystems.vue';
    import AllData from './AllData.vue';
    import {mapState} from 'vuex';
  export default {
    name: 'HelloWorld',
    components: {
        Home,
        HomeSystems,
        AllData
    },
    data() {
        return {
            activeTab: 'home'
        }
    },
    computed: {
    ...mapState({
        bannerDataSettings: state => state.bannerDataSettings,
        mainBannerData: state => state.mainBannerData
    }),
    },
    mounted () {
        if (localStorage.getItem('mainBannerData')) {
            this.$store.dispatch('mainBannerData', JSON.parse(localStorage.getItem('mainBannerData')))
        }
        if (localStorage.getItem('bannerDataSettings')) {
            this.$store.dispatch('bannerDataSettings', JSON.parse(localStorage.getItem('bannerDataSettings')))
        }
    },
    methods: {
        activateTab(tab) {
            this.activeTab = tab;
        },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .active-tab {
    background-color: #498a3a !important;
    color: white !important;
  }
  </style>
  