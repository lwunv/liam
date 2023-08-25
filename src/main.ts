
import '@/assets/scss/main.scss'
// import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { InstallCodemirro } from "codemirror-editor-vue3"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(InstallCodemirro);

app.mount('#app')
