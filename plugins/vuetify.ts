import { createVuetify } from "vuetify"

//create vuetify instance
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
    })
    nuxtApp.vueApp.use(vuetify)
})