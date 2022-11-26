<script setup lang="ts">
const route = useRoute();

useHead({
  title: "2022 F2E WEEK 3 | Scrum 新手村",
  meta: [
    { name: 'description', 
      content: '你想變強嗎？你想獲得力量嗎？你想透過前端 / UI 改變你的生活，但找不到地方修練嗎？如果你的答案是「Yes」那麼你來對地方了！' 
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ]
})

const showArrow = computed(() => {
  if (route.name !== "index") return false;
  else return true;
});

</script>

<template>
  <div id="main">
    <div class="left-cloth cloth">
      <Transition>
        <p v-show="showArrow" class="cloth-text">THE F2E THE F2E</p>
      </Transition>
      <img class="cloth-img" src="@/assets/images/arrows.png" alt="箭頭" />
    </div>
    <NuxtPage />
    <div class="right-cloth cloth">
      <img class="cloth-img" src="@/assets/images/arrows.png" alt="箭頭" />
      <Transition>
        <p v-show="showArrow" class="cloth-text">THE F2E THE F2E</p>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
body {
  &::-webkit-scrollbar {
    position: absolute;
    opacity: 0;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: $color-dark-01;
    width: 0px;
    opacity: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    width: 0px;
    opacity: 0;
    background-color: #0bc1d95d;
  }
}

#main {
  @include flex(flex-start, center);
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 0 8vw;
  background-color: $color-dark-01;
  overflow-x: hidden;
}

.cloth {
  @include size(100%, 4vw);
  @include flex();
  flex-wrap: wrap;
  opacity: 0.4;
  padding: 4vh 0;
  transition: 0.2s;
  > .cloth-img {
    width: 3.2vw;
  }
  > .cloth-text {
    font-family: "Tomorrow";
    font-style: normal;
    -webkit-text-stroke: 1.5px #e0e0e0;
    color: $color-dark-01;
    font-size: 3.6vw;
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }
}

.right-cloth {
  @include flex(flex-start);
}

.left-cloth {
  @include flex(flex-end);
  > .cloth-img,
  .cloth-text {
    transform: rotate(180deg);
  }
}

.page-enter-active, .page-leave-active {
  transition: all 0.4s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>