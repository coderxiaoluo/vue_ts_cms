<template>
  <div class="login">
    <LoginPage> </LoginPage>
  </div>
</template>

<script setup lang="ts">
import LoginPage from './login-page/LoginPage.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/login-bg.svg);
  font-family: sans-serif;
  // background: linear-gradient(#2f3f5c, #385678);
}
</style>
