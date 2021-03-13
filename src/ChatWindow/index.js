import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import ChatWindow from './ChatWindow'

Vue.use(vueCustomElement)
Vue.customElement('chat-window', ChatWindow)
