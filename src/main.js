import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { MotionPlugin } from '@vueuse/motion'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(MotionPlugin)
  .mount('#app')  

