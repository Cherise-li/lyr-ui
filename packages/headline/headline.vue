

<script>
export default {
    name: 'MyHeadline',
    props: {
      level: {
         type: Number,
         default: 1
      }
    },
    render (h) {
      let content = null
      if(this.$slots.sub) {
        content = [
          this.$slots.default,
          h('div',{class: 'sub header'},[this.$slots.sub])
        ]
      }else {
        content = [this.$slots.default]
      }
      return h('h' + this.level,{class: 'ui header'},content)
    }
}
</script>

<style scoped lang='less'></style>