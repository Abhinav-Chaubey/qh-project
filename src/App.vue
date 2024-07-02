<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',


  data: () => ({
    //
  }),
};
</script>
<style lang="css">
.bg-498a3a {
  background-color: #498a3a;
}
.color-498a3a {
  color: #498a3a;
}
.bd-10-left {
  border-radius: 5px 0 0 5px;
}
.am-table-sub-title {
  font-size: 11px !important;
  color: #737070;
  font-weight: 400 !important;
}
.am-table-sub-title-small {
  font-size: 8px !important;
  font-weight: 400 !important;
}
.am-table-sub-title-small-grey {
  font-size: 12px !important;
  color: #737070b5;
  font-weight: 500 !important;
}
.am-banner-title {
  font-size: 12px !important;
  font-weight: 500 !important;
}
.am-banner-heading {
  font-size: 16px !important;
  font-weight: 500 !important;
}
.h-100 {
  height: 100%;
}
.self-center {
  align-self: center;
}
.remove {
  font-size: x-large;
  padding: 0px 8px;
  border-radius: 50%;
  background-color: #009fff1c;
  cursor: pointer;
}
.remove1 {
  font-size: x-large;
  padding: 0px 8px;
  border-radius: 50%;
  background-color: #e91e1ead;
  color: white;
  cursor: pointer;
}
.elevation-0 {
  box-shadow: none;
}
</style>