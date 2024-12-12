<template>
  <el-config-provider :locale="locale" :message="config">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import { reactive } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn
const config = reactive({
  max: 1
})
</script>
<style lang="scss" scoped>
</style>


<!-- <script setup>
</script>

<template>
  <div>我的第一个桌面应用</div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style> -->