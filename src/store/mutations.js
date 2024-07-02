export default {
  MAIN_BANNER_DATA (state, data) {
    state.mainBannerData = data;
  },
  BANNER_DATA_SETTINGS (state, data) {
    state.bannerDataSettings = data;
  },
  APP_LOADING (state, data) {
    state.appLoading = data;
  },
  IS_AUTH_USER (state, data) {
    state.isAuthUser = data;
  }
}