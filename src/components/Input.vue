<script>
export default {
  props: {

  },

  data() {
    return {
      
    }
  }
}
</script>
<template>
  <div class="search">
    <label>Search Weapon: </label>
    <input type="text"/>
  </div>
</template>
<style>
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search label {
    font-size: 20px;
    color: #FFFFF0;
  }

  .search input {
    background: hsl(356, 88%, 24%);
    color: #FFFFF0;
    border-radius: 16px;
    border: 2px solid rgba(15, 14, 14, 0.585);
    padding: 10px 10px;
    font-size: 20px;

    transition: 0.3s all;
  }
</style>