import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import MyList from './components/MyList.vue'


Vue.config.productionTip = false

Vue.component(Header.name, Header)
Vue.component(MyList.name, MyList)


new Vue({
  render: h => h(App),
}).$mount('#app')
