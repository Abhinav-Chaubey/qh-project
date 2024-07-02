export default {
  mainBannerData ({ commit }, data) {
    commit('MAIN_BANNER_DATA', data);
  },
  bannerDataSettings ({ commit }, data) {
    commit('BANNER_DATA_SETTINGS', data);
  },
  appLoading ({ commit }, data) {
    commit('APP_LOADING', data);
  },
  isAuthUser ({ commit }, data) {
    commit('IS_AUTH_USER', data);
  },
}