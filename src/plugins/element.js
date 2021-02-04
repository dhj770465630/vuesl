import Vue from 'vue'

// 弹窗提示
import { Message, Form, FormItem, Button, Input } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
