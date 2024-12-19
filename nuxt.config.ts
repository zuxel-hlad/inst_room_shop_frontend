import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: process.env.NODE_ENV !== 'production' },
    modules: ['@nuxt/eslint', '@nuxt/fonts'],
    css: ['~/styles/scss/global.scss'],
    vite: {
        plugins: [svgLoader()],
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: '@use "@/styles/scss/_variables.scss" as *;',
                },
            },
        },
    },
    fonts: {
        families: [
            { name: 'Raleway', provider: 'google', weights: [400, 500, 600, 700] },
            { name: 'Prosto One', provider: 'google', weights: [400] },
        ],
    },
})
