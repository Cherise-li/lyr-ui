# lyr-ui

## 安装
```
npm install lyr-ui
```

### 导入组件库
```
import lyr-ui from 'lyr-ui'
```
### 注册组件
```
Vue.use(lyr-ui)
```

### 组件列表

#### MyButton
```
<my-button animated @click="hClick">
 <div slot="hidden">$1231231</div>
      <div slot="visible">买买买！！！！</div>
    </my-button>

    <my-button animated="vertical">
      <div slot="hidden">$1231231</div>
      <div slot="visible">买买买！！！！</div>
    </my-button>

    <my-button animated="fade">
      <div slot="hidden">$1231231</div>
      <div slot="visible">买买买！！！！</div>
    </my-button>

    <my-button></my-button>
  
    <my-button size="mini">按钮1-mini</my-button>

    <my-button size="large">large-买买买！！！！</my-button>
    
    <my-button size="massive">large-买买买！！！！</my-button>
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
