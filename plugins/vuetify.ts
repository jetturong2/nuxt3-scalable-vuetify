// import createVuetify from "vuetify"
import { createVuetify } from "vuetify" //คือการนําเข้า createVuetify จาก vuetify
import 'vuetify/styles' //คือการนําเข้าไฟล์ css ของ vuetify

// import custom icons from helpers
import { aliases, custom } from "@/helpers/customIcons" //คือการนําเข้าชื่อย่อและไอคอนที่กําหนดเอง

// import theme from "@/helpers/themes"
import { LIGHT_THEME, lightTheme, DARK_THEME, darkTheme } from "@/helpers/themes"//คือการนําเข้าธีมทั้งสองฝั่ง

// import defaults from "@/helpers/defaults"
import { defaults } from "@/helpers/defaults" //คือการนําเข้าค่าเริ่มต้น

export default defineNuxtPlugin((nuxtApp ) => {
    // Create a new Vuetify instance
    const vuetify = createVuetify({
        ssr: true,//คือการกําหนดการใช้งานบนเซิร์ฟเวอร์
        defaults,
        theme: {
            defaultTheme: LIGHT_THEME,//คือการกําหนดธีมเริ่มต้น
            themes: {
                lightTheme,//คือการกําหนดธีมสว่าง
                darkTheme,//คือการกําหนดธีมมืด
            },
            // add color variations
            variations: {
                colors: ["primary", "secondary"],//คือการกําหนดสี
                lighten: 3,//คือการเพิ่มความสว่าง
                darken: 3,//คือการเพิ่มความมืด
            }
        },
        // Add the custom iconset
        icons: {
            defaultSet: "custom",//คือการกําหนดชุดไอคอนเริ่มต้น
            aliases,//คือการกําหนดชื่อย่อ
            sets: {
                custom,//คือการกําหนดชุดไอคอน
            },
        },
    })

    // Inject it to nuxtApp
    nuxtApp.vueApp.use(vuetify) //คือการใช้งาน vuetify
})
