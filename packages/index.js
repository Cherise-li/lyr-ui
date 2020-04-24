// 整个组件库的入口文件
import Button from './button/button.vue'
import HeadLine from './headline/headline.vue'

export default {
    install(v) {
        v.component('MyButton', Button)
        v.component(HeadLine.name, HeadLine)
    }
}