<template>
  <van-search v-model="value" placeholder="请输入搜索地点/景点/游记" />
  <!-- 宫格 -->
  <van-grid :column-num="5">
    <van-grid-item
      v-for="item in gridArr"
      :key="item.id"
      :icon="item.icon"
      :text="item.text"
    />
  </van-grid>
  <!-- 推荐 -->
  <p>推荐</p>
  <div class="Mainstream-view">
    <!-- 左侧 -->
    <div class="Mainstream-left">
      <img
        class="Mainstream-left-image"
        :src="recommendsArr[actionIndex].cover_image.url"
      />
      <div class="Mainstream-left-bottom">
        <p class="title">{{ recommendsArr[actionIndex].title }}</p>
        <div
          class="name"
          v-for="item in recommendsArr[actionIndex].author_data"
          :key="index"
        >
          <img :src="item.avatarUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="Mainstream-right">
      <img
        v-for="(item, index) in recommendsArr"
        :src="item.cover_image.url"
        @click="itemClick(index)"
        alt=""
      />
    </div>
  </div>
  <!-- 瀑布流 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :immediate-check="false"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
  <tabbar></tabbar>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import tabbar from "@/components/tabbar/index.vue";
import http from "@/api/request";
import { compileStyle } from "vue/compiler-sfc";

const value = ref("");
// 激活的下标
const actionIndex = ref(0);
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
//宫格分类
const gridArr = ref([
  {
    id: 1,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 2,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 3,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 4,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 5,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 6,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 7,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 8,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 9,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
  {
    id: 10,
    text: "文字",
    icon: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  },
]);
// 推荐
const recommendsArr = ref([
  {
    id: 1,
    address: "大排档",
    author_data: [
      {
        avatarUrl: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "张小姐",
      },
    ],
    cover_image: {
      height: 1024,
      width: 768,
      url: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    },
    title: "中山陵一日游",
  },
  {
    id: 2,
    address: "大排档",
    author_data: [],
    cover_image: {
      height: 1024,
      width: 768,
      url: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    },
    title: "中山陵一日游",
  },
  {
    id: 3,
    address: "大排档",
    author_data: [],
    cover_image: {
      height: 1024,
      width: 768,
      url: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    },
    title: "中山陵一日游",
  },
  {
    id: 4,
    address: "大排档",
    author_data: [],
    cover_image: {
      height: 1024,
      width: 768,
      url: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    },
    title: "中山陵一日游",
  },
]);

onMounted(async (res) => {
  let result = await http.get("/recomm_trave").catch((err) => {
    console.log("err", err);
  });
  console.log("result", result);
});
const itemClick = (index) => {
  actionIndex.value = index;
};
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
</script>
<style lang="less" scoped>
.Mainstream-view {
  width: 100%;
  height: 500px;
  display: flex;
  position: relative;
  .Mainstream-left {
    width: 100%;
    height: 100%;
    position: relative;
    .Mainstream-left-image {
      width: 100%;
      height: 100%;
    }
    .Mainstream-left-bottom {
      position: absolute;
      bottom: 0;
      left: 5px;
      p {
        font-size: 54px;
      }
      .name {
        display: flex;
        align-items: center;
        margin-left: 10px;
        img {
          height: 50px;
          width: 50px;
        }
        p {
          font-size: 34px;
        }
      }
    }
  }
  .Mainstream-right {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 10px;
    top: 10px;

    img {
      width: 100px;
      height: 100px;
      border: 2px solid mintcream;
    }
  }
}
</style>
