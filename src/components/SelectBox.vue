<script>
export default {
  props: {
    options: [],
  },
  data() {
    
  },

  methods: {
    textFormat(text){
      return text
                .replace('-', ' ')
                  .toLowerCase()
                    .split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
    }
  },
}
</script>
<template>
  <div class="selectBox">
    <label>Filter by:</label>
    <select>
      <option 
        v-for="option in options" 
        :key="option.name"
        :value="option.weapon_type"
      >
        {{this.textFormat(option.weapon_type)}}
      </option>
    </select>
  </div>
</template>
<style>
  .selectBox {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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