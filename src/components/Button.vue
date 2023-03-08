<script>
export default {
  props: {
    value: String
  }
}
</script>
<template>
  <div class="btnFilter">
    <input type="button" :value="this.value"/>
  </div>
</template>
<style>
  .btnFilter {
    width: 200px;
  }

  .btnFilter input {
    background: hsl(356, 88%, 24%);
    color: #FFFFF0;
    border-radius: 16px;
    border: 2px solid rgba(15, 14, 14, 0.585);
    padding: 10px 10px;
    font-size: 20px;
    width: 100%;
    transition: 0.3s all;
  }

  .btnFilter input:hover {
    font-weight: bold;
    padding: 12px;
    background: hsl(356, 88%, 35%);
  }
</style>