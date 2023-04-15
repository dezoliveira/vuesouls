<script>
  import WeaponCard from './components/WeaponCard.vue';

  export default {
    name: 'App',
    components: {
      WeaponCard
    }
  }
</script>

<template>
  <div class="background">
    <WeaponCard />
  </div>
</template>

<style scoped>
  .background {
    background-image: url("");
  }
</style>
