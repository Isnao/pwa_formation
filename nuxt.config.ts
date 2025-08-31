// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts', '@nuxt/ui', '@vite-pwa/nuxt', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      routes: ['/']
    }
  },
  imports: {
    autoImport: true
  },
  appConfig: {
    buildDate: new Date().toISOString()
  },
  pwa: {
    strategies: 'generateSW',
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
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 86400,
    },
    devOptions: {
      enabled: process.env.NODE_ENV !== 'production'
    }
  },
  googleFonts: {
    families: {
      Inter: true,
      'Baloo Thambi 2': true
    }
  },
  pinia: {
    storesDirs: ['./app/stores/**'],
  },
  ssr: true,
  experimental: {
    payloadExtraction: true,
    appManifest: true,
    asyncEntry: true,
  },
  features: {
    inlineStyles: true
  },
  future: {
    typescriptBundlerResolution: true
  }
})