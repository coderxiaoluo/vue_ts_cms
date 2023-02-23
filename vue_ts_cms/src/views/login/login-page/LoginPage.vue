<template>
  <div class="login-page">
    <!-- title -->
    <h1 class="title">codeLuo后台管理系统</h1>
    <!-- tabs-box -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="isActive">
        <el-tab-pane name="username">
          <!-- 具名插槽 -->
          <template #label>
            <!-- 里面是你要替换的内容 -->
            <div class="label">
              <el-icon><User /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <!-- InputAccount Components (input context )  -->
          <InputAccount ref="inputAccountComponents"></InputAccount>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </div>
          </template>
          <!-- InputPhone Components  (phone context) -->

          <InputPhone></InputPhone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--  记住密码 | 忘记密码 -->
    <div class="controls">
      <el-checkbox v-model="isRememberPassword" label="记住密码" size="large" />
      <el-link type="primary" :underline="underlinePassword">忘记密码?</el-link>
    </div>
    <!-- 登录 -->
    <div class="login-action">
      <el-button type="primary" size="large" @click="handleLoginBtnClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import InputAccount from './InputAccount.vue'
import InputPhone from './InputPhone.vue'
// controls 记住密码
let isRememberPassword = ref<any>(
  Boolean(localStorage.getItem('isRememberPassword') ?? false)
)

// 监听 isRememberPassword 的值
watch(isRememberPassword, (newValue: any) => {
  localStorage.setItem('isRememberPassword', newValue)
})

// controls 忘记密码
const underlinePassword = ref(false)

// 获取子组件实例 通过 ref 来获取     InstanceType<typeof InputAccount> : 类型为 InputAccount组件
const inputAccountComponents = ref<InstanceType<typeof InputAccount>>()

// 判断哪一个tabs页面
const isActive = ref('username')

// handleLoginBtnClick 点击判断是哪个tabs
const handleLoginBtnClick = () => {
  if (isActive.value === 'username') {
    // console.log('帐号登录')
    // 调用子组件中的方法
    inputAccountComponents.value?.loginAction(isRememberPassword.value)
  } else {
    // console.log('密码登录')
  }
}
</script>

<style lang="less" scoped>
.login-page {
  width: 330px;
  .title {
    text-align: center;
    height: 50px;
    font-size: 30px;
    font-weight: 900;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
  .login-action {
    width: 100%;
    text-align: center;
    // 立即登录样式
    :deep(.el-button--large) {
      width: 100%;
      --el-border-radius-base: 0px;
    }
  }
  .tabs {
    // :deep(.el-tabs__nav) {
    //   width: 100%;
    //   .el-tabs__item {
    //     width: 50%;
    //     text-align: center;
    //   }
    // }
    .label {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        margin-left: 8px;
      }
    }
  }
}
</style>
