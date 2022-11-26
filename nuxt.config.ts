// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          //需要在 assets 下建立對應的檔案 global.scss
          additionalData: '@import "./assets/style/_main.scss";',
        },
      },
    },
  },
  app: {
    baseURL: '/f2e-scrum/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
