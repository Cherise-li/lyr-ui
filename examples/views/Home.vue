<template>
  <div class="home">
    <my-button size='large' animated @click="hClick">
      <div slot="hidden">hidden</div>
      <div slot="visible">visible</div>
    </my-button>
     <my-button size='large' animated='vertical'>
      <div slot="hidden">hidden</div>
      <div slot="visible">visible</div>
    </my-button>
    <my-button size='large' animated='fade'>
      <div slot="hidden">hidden</div>
      <div slot="visible">visible</div>
    </my-button>
   <my-button size='mini'></my-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    hClick () {
      alert(1)
    }
  }
}
</script>
