import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, { theme: {
  primary: "#7B1C3B",
  accent: '#FFC525',
  secondary: '#353535',
  info: '#0D47A1',
  warning: '#ffb300',
  error: '#B71C1C',
  success: '#2E7D32'
}})