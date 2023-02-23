<template>
  <div class="input-phone">
    <el-form :model="formLabelAlign" :rules="phoneRules">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="验证码" prop="region">
        <div class="verity-code">
          <el-input v-model="formLabelAlign.region" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
const formLabelAlign = reactive({
  name: '',
  region: ''
})

const phoneRules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入您的手机号', trigger: 'blur' },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '手机号格式不正确',
      trigger: 'blur'
    }
  ]
})
</script>

<style lang="less" scoped>
.input-phone {
  .verity-code {
    display: flex;

    .el-button--primary {
      margin-left: 8px;
    }
  }
}
</style>
