export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "languageFront",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/custom.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/countdown-timer.js", mode: "client" },
    { src: "~/plugins/carousel.js", mode: "client" },
    { src: "~/plugins/apexcharts.js", mode: "client" },
    { src: "~/plugins/video-player.js", mode: "client" },
    { src: "~/plugins/truncate.js", mode: "client" },
    { src: "~/plugins/vuesax.js" },
    { src: "~/plugins/dataApi.js" },
    { src: "~/plugins/vee-validate.js" },
    { src: "~/plugins/lodash.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  auth: {
    redirect: {
      home: "/panel/dashboard",
    },
    strategies: {
      laravelPassport: {
        name: "laravelPassport",
        provider: "laravel/passport",
        url: "http://127.0.0.1:8000",
        endpoints: {
          login: {
            url: "/api/user/login",
          },
          register: {
            url: "/api/register",
          },
          logout: "/api/logout",
          user: {
            url: "/api/user",
          },
        },
        clientId: "95c2ed0f-72a7-467e-8b52-0ddf57a75454",
        clientSecret: "PL8mgIZLaxponLtUFmEXgHhh8LlD5pkCo0tf3g8K",
        grantType: "password",
        scope: "*",
      },

      local: {
        url: "http://lang.local",
        token: {
          property: "access_token",
          global: true,
          required: true,
          type: "Bearer",
        },
        // user: {
        //   property: "user",
        //   autoFetch: false,
        // },
        user: false,
        endpoints: {
          login: {
            url: "/v1/application/auth/login",
            method: "post",
          },
          register: {
            url: "/api/user/register",
            method: "post",
          },
          logout: {
            url: "/logout",
            method: "post",
          },
          user: {
            url: "/user",
            method: "get",
          },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://lang.local/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate"],
  },
};
