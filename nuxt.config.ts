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
    styleResources: {
        sass: [
            './assets/sass/style-resources/_custom.sass',
            './assets/sass/style-resources/_bootstrap.sass',
        ],
    },
    css: [
        './assets/sass/style.sass',
    ]
}