<template>
  <div class="main">
    <a-card class="login-form" style="height: 262px; width: 416px">
      <a-form
        :model="formState"
        name="normal_login"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <h2 style="text-align: center">vue3-admin</h2>

        <a-form-item name="username" :rules="[{ required: true, message: '请输入账户名' }]">
          <a-input
            v-model:value="formState.username"
            style="width: 368px; height: 40px"
            placeholder="账户：admin or guest"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
          <a-input-password
            style="width: 368px; height: 40px"
            v-model:value="formState.password"
            placeholder="密码：admin or guest"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            block
            style="height: 40px"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useAppStore } from "@/stores";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

const appStore = useAppStore();
console.log(appStore, import.meta.env);

const formState = reactive({
  username: "",
  password: "",
  remember: true,
});

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  min-height: 100%;

  // * this is how you import imgs in style, do not forget double quotes
  background: #f0f2f5 url("@/assets/background.svg") no-repeat 50%;

  background-size: 100%;
  position: relative;

  .login-form {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
