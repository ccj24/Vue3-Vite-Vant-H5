<template>
  <van-search v-model="value" placeholder="请输入搜索地点/景点/游记" />
  <tabbar></tabbar>
</template>

<script setup>
import { ref, reactive } from "vue";
import tabbar from "@/components/tabbar/index.vue";

const value = ref("");
</script>
<style scoped></style>
