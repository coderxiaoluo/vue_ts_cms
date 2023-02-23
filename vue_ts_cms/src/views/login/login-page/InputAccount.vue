<template>
  <div class="input-account">
    <el-form
      :model="formLabelAlign"
      :rules="accountRules"
      label-width="60px"
      ref="formRef"
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <!--  show-password 切换为密码文本框 -->
        <el-input v-model="formLabelAlign.pwd" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useLoginStores } from '@/stores/login/login'
import { ElMessage } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'

// 状态管理
const loginStores = useLoginStores()

const formLabelAlign = reactive({
  name: localStorage.getItem('name') ?? '',
  pwd: localStorage.getItem('password') ?? ''
})

// 表单校验
const accountRules: FormRules = {
  // 帐号校验
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      min: 6,
      max: 18,
      trigger: 'blur',
      pattern: /^[A-Za-z0-9]+$/,
      message: '必须是 6 ~ 18 数字或字母组成'
    }
  ],
  // 密码校验
  pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      trigger: 'blur',
      pattern: /^[a-zA-Z0-9]{4,16}$/,
      message: '长度为 4 ~ 16 数字或字母'
    }
  ]
}
//  获取 el-form 组件
const formRef = ref<FormInstance>()
// 登录校验
const loginAction = (isRememberPassword) => {
  // 是否登录成功业务逻辑
  formRef.value?.validate((valid, fields) => {
    // console.log(valid, fields)
    if (valid) {
      // console.log('成功')
      // 获取用户 name 和 pwd
      const name = formLabelAlign.name
      const password = formLabelAlign.pwd
      // 发送网络请求
      loginStores.accountLoginAction({ name, password }).then(() => {
        // 记住密码业务逻辑
        if (isRememberPassword) {
          localStorage.setItem('name', name)
          localStorage.setItem('password', password)
        } else {
          localStorage.removeItem('name')
          localStorage.removeItem('password')
        }
      })
      // 记住密码 业务逻辑
    } else {
      console.log('失败')
      ElMessage.error('请检查您的格式是否正确!')
    }
  })
}
// 将函数暴露出去，其它组件就可以调用
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
