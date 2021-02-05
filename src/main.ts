import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'

const app = createApp(App)

app.use(createI18n({
  locale: 'en',
  messages: {
    en
  }
}))

app.mount('#app')
