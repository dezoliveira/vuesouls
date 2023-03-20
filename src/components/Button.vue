<script>
export default {
  props: {
    value: String,
    icon: String
  },

  data() {
    return {
      selected: false
    }
  },

  methods: {

  }
}
</script>
<template>
  <div class="btnFilter">
    <button
      :value="this.value" 
      type="button">
        {{this.value}}
      <i>
        <font-awesome 
          :icon="this.icon"
        >
        </font-awesome>
      </i>
    </button>
  </div>
</template>
<style>
  .btnFilter {
    width: 100%;
    padding: 15px;
  }

  .btnFilter button {
    background: hsl(356, 88%, 24%);
    color: #FFFFF0;
    border-radius: 16px;
    border: 2px solid rgba(15, 14, 14, 0.585);
    padding: 10px;
    font-size: 20px;
    width: 100%;
    transition: 0.3s all;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btnFilter button:hover {
    font-weight: bold;
    padding: 12px;
    background: hsl(356, 88%, 35%);
  }

  .btnFilter button i {
    font-size: 15px;
    padding: 0 10px;
  }

  .btnFilter button svg {
    padding: 0;
  }

  .isClicked {
    font-weight: bold;
    padding: 12px;
    background: hsl(356, 88%, 35%);
  }
</style>