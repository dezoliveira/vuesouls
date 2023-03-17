<script>
export default {
  props: {
    value: String
  }
}
</script>
<template>
  <div class="btnFilter">
    <button type="button">{{this.value}}<i><font-awesome icon="phone"></font-awesome></i></button>
  </div>
</template>
<style>
  .btnFilter {
    width: 100%;
  }

  .btnFilter button {
    background: hsl(356, 88%, 24%);
    color: #FFFFF0;
    border-radius: 16px;
    border: 2px solid rgba(15, 14, 14, 0.585);
    padding: 0;
    font-size: 20px;
    width: 100%;
    transition: 0.3s all;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btnFilter button:hover {
    font-weight: bold;
    padding: 3px;
    background: hsl(356, 88%, 35%);
  }

  .btnFilter button i {
    font-size: 15px;
    padding: 0;
  }
</style>