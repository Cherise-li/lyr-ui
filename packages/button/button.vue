<template>
  <div class="ui button" :class="cClass" @click="onClick">
      <template v-if="animated">
          <div class="visible content">
              <slot name="visible"></slot>
          </div>
          <div class="hidden content">
              <slot name="hidden"></slot>
          </div>
      </template>
      <template v-else>
          <slot>
            全局ui按钮
          </slot> 
      </template>
  </div>
</template>

<script>
export default {
    name: 'MyButton',
    props:{
        size: {
            type: String,
            default: 'medium',
            validator (val) {
            return ['mini','tiny','small','medium','large','big','huge','massive'].includes(val)              
            } // 对size的值进行检查
        },
        animated: {
            type: [Boolean,String],
        }
    },
    computed: {
        cClass () {
            var classList = [this.size]
            if (this.animated) {
                classList.push('animated')
                if (typeof this.animated === 'string') {
                    classList.push(this.animated)
                }
                
            }
            return classList.join(' ')
        }
    },
    data() {
        return {

        }
    },
    methods: {
        onClick () {
            this.$emit('click')
        }
    }
}
</script>

<style scoped lang='less'></style>