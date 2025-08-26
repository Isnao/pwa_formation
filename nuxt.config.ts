// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Application Formation Acadia',
      short_name: 'FormationAcadia',
      description: "Application pour aider à la formation de l'association Acadia",
      theme_color: '#E9DAD8',
      icons: [
        {
          src: 'ic_launcher_icon_192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'ic_launcher_icon_512.png',
          sizes: '512x512',
          type: 'image/png'
        },
      ]
    },
    devOptions: {
      enabled: true
    }
  }
})