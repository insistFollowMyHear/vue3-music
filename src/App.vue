<template>
  <div>
    <!-- 测试文件 -->
    <!-- <test-v1></test-v1>
    <test-v2></test-v2> -->

    <header-my></header-my>
  </div>
</template>

<script>
  import TestV1 from './components/test-v1.vue'
  import TestV2 from './components/test-v2.vue' 

  import Header from '@/components/Header/index.vue'

  export default {
    setup() {

    },
    components: {
      TestV1,
      TestV2,
      HeaderMy:Header
    }
  }
</script>

<style scoped>
</style>
