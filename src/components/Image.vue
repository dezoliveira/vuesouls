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
  <div v-if="imageSrc">
    <img :src="`../../src/assets/weapons/${imageSrc}.png`">
  </div>
</template>
<style>
</style>