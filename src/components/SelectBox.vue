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
    border: 1px solid rgba(29, 27, 27, 0.19);
    padding: 10px 10px;
    font-size: 22px;
  }

  .selectBox select option {
    background: rgba(29, 27, 27, 0.15);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    color: #FFFFF0;
    padding: 10px 10px;
  }
</style>