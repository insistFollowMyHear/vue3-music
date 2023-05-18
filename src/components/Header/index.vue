<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Chicken Music</h1>
    <router-link class="mine" to="/user">
      <i class="iconfont icon-wode"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'm-header'
  }
</script>

<style lang="less" scoped>
  .header {
    height: 40px;
    text-align: center;
    color: @color-theme;
    .icon {
      width: 30px;
      height: 42px;
      @bg-image(logo);
      background-size: 30px 42px;
    }
  }
</style>
