export default {
  config: {
    locales: ['de', 'it', 'en'],
    // set logos
    // auth: {
    //   logo: AuthLogo
    // },
    // head: {
    //   favicon: favicon
    // },
    // menu: {
    //   logo: MenuLogo
    // },
    notifications: { release: false },
    tutorials: false
  },
  bootstrap(app) {
    console.log(app);
  }
};
