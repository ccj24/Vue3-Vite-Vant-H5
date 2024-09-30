<!-- <template>
  <button>按钮</button>
  <van-button type="primary" size="large" @click="handClick">按钮</van-button>
  <van-button type="success" size="large">按钮</van-button>
  <van-button type="default" size="large">按钮</van-button>
  <van-button type="warning" size="large">按钮</van-button>
  <van-button type="danger" size="large">按钮</van-button>

  <van-cell-group inset>
    <van-field v-model="userName" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
  <van-button type="warning">警告按钮</van-button>
<img src="@/assets/girl.png" alt="">
</template>

<script setup>
import { ref,reactive  } from 'vue';
const userName=ref("")
const handClick = () => {
  console.log("我被点击了");
};
</script>
<style scoped></style> -->
<template>
  <!-- 路由出口 -->
  <router-view></router-view>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style lang="less" scoped></style>
