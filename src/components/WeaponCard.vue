<script>
  import Image from '../components/Image.vue'
  import SelectBox from '../components/SelectBox.vue'
  import Button from '../components/Button.vue'
  import Input from '../components/Input.vue'
  import BarChart from '../components/BarChart.vue'

  export default {
    components: {
      Image,
      SelectBox,
      Button,
      Input,
      BarChart
    },
    
    data() {
      return {
        weapons: [],
        filteredWeapons: [],
        category: null,
        toggleButton: 'Normal View',
      }
    },

    methods: {
      async loadWeapons(params) {
        const req = await fetch('https://jgalat.github.io/ds-weapons-api/' + params)
        const data = await req.json()
        console.log(data)
        this.weapons = data
        this.filteredWeapons = [...this.weapons]
      },

      changeWeaponType(event) {
        let input = event.target.value

        let newWeapons = 
          this.weapons.filter(x =>
            x.weapon_type === input
          )

        this.filteredWeapons = newWeapons
      },

      searchWeapon(event) {
        let input = event.target.value
        let newSearch = ''

        if(input != '' && input.length > 3) {
            newSearch =
              this.weapons.filter(y =>
                y.name.toLowerCase().includes(input.toLowerCase())
              )
            this.filteredWeapons = newSearch
        } else {
          this.filteredWeapons = this.weapons
        }
      },

      textFormat(text){
      return text
                .replace(/[. ]/g, '-')
                  .toLowerCase()
      },

      toggleButtons(e){
        e.preventDefault()
        let button = e.target.value

        if(button == 'Normal View'){
          this.toggleButton = 'Normal View'
          console.log()
        } else {
          this.toggleButton = 'Graphic View'
        }
      }
    },

    mounted() {
      this.loadWeapons('')
    },
  }
</script>

<template>
  <div class="choosenMenu">
    <div>
      <Input @input="this.searchWeapon($event)"/>
    </div>
    <div class="btnGroup">
      <Button value="Normal View" icon="table-cells-large" @click="this.toggleButtons($event)"/>
      <Button value="Graphic View" icon="chart-simple" @click="this.toggleButtons($event)"/>
      <SelectBox @change="this.changeWeaponType($event)"/>
    </div>
  </div>
  <div v-if="category" class="category">
    <h2>Category: {{category}}</h2>
  </div>
  <div v-if="filteredWeapons.length" class="container">
    <div class="weapon-card" v-for="weapon in filteredWeapons" :key="weapon.name">
      <div class="weapon-container" v-if="this.toggleButton == 'Normal View'">
        <div class="weapon-image">
          <Image :imageSrc="weapon.name"/>
        </div>
        <div class="weapon-title">
          <h1>{{weapon.name}}</h1>
        </div>
      </div>
      <div class="weapon-container" v-if="this.toggleButton == 'Graphic View'">
        <BarChart :weapons="weapon" />
      </div>
    </div>
  </div>
  <div v-else class="container" style="algin-items: center">
    <div class="weapon-card">
      <div class="weapon-image">
        <Image :imageSrc="filteredWeapons.name"/>
      </div>
      <div class="weapon-title">
        <h1>{{filteredWeapons.name}}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .btnGroup {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 15px;
  }

  .category {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFF0;

    padding: 15px;
  }

  .choosenMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px;
  }
  .container {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 4rem;
    grid-template-columns: repeat(4, 1fr);  

    padding: 40px;
  }

  .weapon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px;

    /* From https://css.glass */
    background: rgba(29, 27, 27, 0.15);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(29, 27, 27, 0.19);
  }

  .weapon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 360px;
    min-height: 420px;
    padding: 15px;
  }

  .weapon-title {
    text-align: center;
    min-height: 180px;
    color: #FFFFF0;
    padding: 15px;
  }

  .weapon-image {
    border-radius: 50%;
    width: 180px;
    padding: 15px;
    text-align: center;

    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22587.291%22 height=%22689.037%22 viewBox=%22201.748 117.677 587.291 689.037%22%3E%3Cdefs%3E%3CradialGradient id=%22b%22 r=%22100%25%22 cx=%2250%25%22 cy=%220%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23f70e1f%22%2F%3E%3Cstop offset=%22100%25%22%2F%3E%3C%2FradialGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M741 647.5Q671 795 494 806T240 658.5Q163 500 241 343t292-213.5q214-56.5 246 157t-38 361Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M741 647.5Q671 795 494 806T240 658.5Q163 500 241 343t292-213.5q214-56.5 246 157t-38 361Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");    
  }

  .isClicked {
    font-weight: bold;
    padding: 12px;
    background: hsl(356, 88%, 35%);
  }
</style>
