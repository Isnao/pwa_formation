// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts', '@nuxt/ui', '@vite-pwa/nuxt', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#E9DAD8' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      routes: ['/', '/session']
    }
  },
  imports: {
    autoImport: true
  },
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png'],
    manifest: {
      name: 'Application Formation Acadia',
      short_name: 'FormationAcadia',
      description: "Application pour aider à la formation de l'association Acadia",
      theme_color: '#E9DAD8',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'pwa-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'pwa-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ],
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
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
  },
  future: {
    typescriptBundlerResolution: true
  }
})