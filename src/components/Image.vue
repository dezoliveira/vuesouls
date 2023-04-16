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
  <div class="image" v-if="imageSrc">
    <img :src="`./weapons/${imageSrc}.png`"/>
  </div>
</template>
<style>
  div .image {
    padding: 30px;
  }
</style>