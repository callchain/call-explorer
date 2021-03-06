import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar'

// 字体图标
import '@mdi/font/css/materialdesignicons.css'

// 中文
import zhHans from 'vuetify/es5/locale/zh-Hans'
import en from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})

const VuetifyObj = new Vuetify({
    lang: {
      current: 'zhHans',
      locales: { en, zhHans },
    },
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
})
  
Vue.use(VuetifyToast, {
    $vuetify: VuetifyObj.framework,
    x: 'right',
    y: 'bottom',
    timeout: 3000,
    multiLine: true,
    showClose: false
})
  
export default VuetifyObj
  