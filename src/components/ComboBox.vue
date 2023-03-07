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
  <div class="comboBox">
    <label>Filter by:</label>
    <select>
      <option 
        v-for="option in options" 
        :key="option.name"
      >
        {{this.textFormat(option.weapon_type)}}
      </option>
    </select>
  </div>
</template>
<style>
  .comboBox {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .comboBox label {
    font-size: 20px;
    color: #FFFFF0;
  }

  .comboBox select {
    background: #72070F;
    color: #FFFFF0;
    border-radius: 16px;
    border: 1px solid rgba(29, 27, 27, 0.19);
    padding: 10px 10px;
    font-size: 22px;
  }

  .comboBox select option {
    background: rgba(29, 27, 27, 0.15);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    color: #FFFFF0;
    padding: 10px 10px;
  }
</style>