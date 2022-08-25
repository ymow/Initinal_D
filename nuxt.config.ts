import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
    /* ... */
    build: {
        loaders: {
            sass: {
                implementation: require('sass'),
            },
            scss: {
                implementation: require('sass'),
            }
        }
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    plugins: [
        {src: '~/plugins/bootstrap.js', mode: 'client'}
    ],
}