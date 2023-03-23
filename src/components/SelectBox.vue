<script>
export default {
  data() {
    return {
      options: [],
    }
  },

  methods: {
    async loadWeapons() {
      const req = await fetch('https://jgalat.github.io/ds-weapons-api/')
      const data = await req.json()
      this.filterData(data)
    },

    textFormat(text){
      return text
                .replace('-', ' ')
                  .toLowerCase()
                    .split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
    },

    filterData(data){
      let arr = []
      let newArr = []

      for(let d in data) {
        arr.push(data[d].weapon_type)
      }

      newArr = arr.filter((item, index) => 
        arr.indexOf(item) === index)

      this.options = newArr
    }
  },

  mounted() {
    this.loadWeapons()
  }
}
</script>
<template>
  <div class="selectBox">
    <label>Filter by:</label>
    <select>
      <option value="All">All</option>
      <option 
        v-for="option in options" 
        :key="option"
        :value="option"
      >
        {{this.textFormat(option)}}
      </option>
    </select>
  </div>
</template>
<style>
  .selectBox {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 15px;
  }

  .selectBox label {
    font-size: 20px;
    color: #FFFFF0;
  }

  .selectBox select {
    background: #72070F;
    color: #FFFFF0;
    border-radius: 16px;
    border: 2px solid rgba(15, 14, 14, 0.585);
    padding: 10px 10px;
    font-size: 20px;
  }

  .selectBox select option {
    background: rgba(29, 27, 27, 0.15);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    color: #FFFFF0;
    padding: 10px 10px;
  }

  .selectBox select::-webkit-scrollbar {
    width: 18px;               /* width of the entire scrollbar */
  }
  
  .selectBox select::-webkit-scrollbar-track {
    background: rgba(15, 14, 14, 0.585);      /* color of the tracking area */
  }
  
  .selectBox select::-webkit-scrollbar-thumb {
    background-color: rgba(15, 14, 14, 0.585);   /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid rgba(15, 14, 14, 0.585); /* creates padding around scroll thumb */
  }
</style>