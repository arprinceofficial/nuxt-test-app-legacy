import legacy from '@vitejs/plugin-legacy'

export default defineNuxtConfig({
  vite: {
    esbuild: {
      target: 'es2015',
      include: /\.(ts|tsx|js|jsx|vue)$/,
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome61',
    },
    plugins: [
      legacy({
        targets: ['chrome >= 64', 'edge >= 79', 'safari >= 11.1', 'firefox >= 67'],
        renderLegacyChunks: true,  // Generate legacy chunks for older browsers
        modernPolyfills: ['es/global-this'],  // Add polyfill for globalThis
      }),
    ],
  },
})
