<template>
  <div class="home">
    <p>home</p>
    <button @click="outClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

// 退出登录逻辑
const outClick = () => {
  localStorage.removeItem('token')
  setTimeout(() => {
    router.replace('/login')
  }, 1000)
}
</script>

<style lang="less" scoped></style>
