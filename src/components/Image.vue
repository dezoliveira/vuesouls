<script>
export default {
  name: "Image",
  props: {
    imageSrc: String,
  },
  data() {
    
  }
}
</script>
<template>
  <div>
    <img :src="`../../src/assets/weapons/${imageSrc}.png`">
  </div>
</template>
<style>
</style>