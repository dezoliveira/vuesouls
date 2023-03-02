<script>
  import Image from '../components/Image.vue'
  
  export default {
    components: {
      Image
    },
    
    data() {
      return {
        count: 0,
        weapons: null
      }
    },

    methods: {
      async loadWeapons() {
        const req = await fetch('https://jgalat.github.io/ds-weapons-api/')
        const data = await req.json()
        this.weapons = data
        console.log(data)
      }
    },

    mounted() {
      this.loadWeapons()
    }
  }
</script>

<template>
  <div class="container">
    <div v-for="weapon in weapons" :key="weapon.name">
      <div class="weapon-title">
        <h1>{{weapon.name}}</h1>
      </div>
      <div class="weapon-image">
        <Image :imageSrc="weapon.name"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 2rem;
    grid-template-columns: repeat(5, 1fr);  
  }

  .weapon-title {
    text-align: center;
  }

  .weapon-image {
    text-align: center;
  }
</style>
