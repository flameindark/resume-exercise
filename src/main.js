import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'normalize.css'
import './styles/index.scss'

// table组件
import { Table, TableColumn } from 'element-ui';
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

import * as echarts from 'echarts/src/echarts'
import  'echarts/theme/macarons'
// 饼图
import 'echarts/src/chart/pie'

Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
