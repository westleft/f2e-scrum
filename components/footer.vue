<script setup lang="ts">
const props = defineProps({
  url: String,
  page: String,
  text: String,
});
</script>

<template>
  <div class="footer">
    <div class="btn-outer">
      <NuxtLink :to="props.url" class="start-btn">
        <span v-html="props.text"></span>
      </NuxtLink>
    </div>
    <p class="current-page">{{ props.page }}/7</p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 12vh;
  width: 100%;
}
.btn-outer {
  @include flex(center, flex-end);
  width: 100%;
  .start-btn {
    @include defaultBtn();
    > span {
      @include flex();
      line-height: 140%;
      text-align: center;
    }
  }
}

.current-page {
  font-family: "Noto Sans TC";
  color: $color-white;
  width: 100%;
  font-size: 1.2vw;
  padding-bottom: 4vh;
}
</style>