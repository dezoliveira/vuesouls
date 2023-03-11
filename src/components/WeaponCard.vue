<script>
  import Image from '../components/Image.vue'
  import SelectBox from '../components/SelectBox.vue'
  import Button from '../components/Button.vue'
  import Input from '../components/Input.vue'

  export default {
    components: {
      Image,
      SelectBox,
      Button,
      Input
    },
    
    data() {
      return {
        weapons: null,
        category: null
      }
    },

    methods: {
      async loadWeapons(params) {
        const req = await fetch('https://jgalat.github.io/ds-weapons-api/' + params)
        const data = await req.json()
        this.weapons = data
        console.log(data)
      },

      changeWeaponType(event) {
        let weaponType = ''
        if(event.target.value != '') {
          console.log(event.target.value)
          weaponType = 'weapon_type/' + event.target.value
          this.category = event.target.value
        }else {
          this.category = null
        }
        this.loadWeapons(weaponType)
      },
    },

    mounted() {
      this.loadWeapons('')
    }
  }
</script>

<template>
  <div class="choosenMenu">
    <div>
      <Input />
    </div>
    <div class="btnGroup">
      <Button value="Normal View"/>
      <Button value="Graphic View"/>
      <SelectBox @change="this.changeWeaponType($event)"/>
    </div>
  </div>
  <div v-if="category" class="category">
    <h2>Category: {{category}}</h2>
  </div>
  <div class="container">
    <div class="weapon-card" v-for="weapon in weapons" :key="weapon.name">
      <div class="weapon-image">
        <Image :imageSrc="weapon.name"/>
      </div>
      <div class="weapon-title">
        <h1>{{weapon.name}}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .btnGroup {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .category {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFF0;
  }

  .choosenMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 6rem;
    grid-template-columns: repeat(4, 1fr);  
  }

  .weapon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* From https://css.glass */
    background: rgba(29, 27, 27, 0.15);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(29, 27, 27, 0.19);
  }

  .weapon-title {
    text-align: center;
    min-height: 180px;
    color: #FFFFF0;
  }

  .weapon-image {
    border-radius: 50%;
    width: 180px;
    text-align: center;

    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22587.291%22 height=%22689.037%22 viewBox=%22201.748 117.677 587.291 689.037%22%3E%3Cdefs%3E%3CradialGradient id=%22b%22 r=%22100%25%22 cx=%2250%25%22 cy=%220%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23f70e1f%22%2F%3E%3Cstop offset=%22100%25%22%2F%3E%3C%2FradialGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M741 647.5Q671 795 494 806T240 658.5Q163 500 241 343t292-213.5q214-56.5 246 157t-38 361Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M741 647.5Q671 795 494 806T240 658.5Q163 500 241 343t292-213.5q214-56.5 246 157t-38 361Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");    
  }
</style>
