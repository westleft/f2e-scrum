<script setup lang="ts">
import type { Ref } from "vue";
import { useTextType } from "@/composables/timer"
const { result, typeEffect } = useTextType()

const text = `我是資訊，開發A組的PO，小敏。<br /> <br />
  PO也就是產品負責人(ProductOwner)。產品負責人會負責評估產品待辦清單的價值與重要性，
  依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(ProductBacklog)唷！<br /><br />
  剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
`
onMounted(() => {
  typeEffect(text)
})

</script>

<template>
  <div id="guide">
    <div class="dialog-content">
      <img class="dialog-img" src="@/assets/images/npc01.png" alt="PO 小敏" />
      <p class="dialog-text">PO 小敏</p>
    </div>
    <p class="dialog-box" v-html="result">

    </p>
    <Footer :url="'/quiz/1'" :page="'1'" :text="'接受挑戰'"/>
  </div>
</template>

<style lang="scss" scoped>
#guide {
  @include flex(flex-start, flex-start);
  @include size(100%, 100%);
  padding: 12vh 8vw;
  flex-direction: column;
}

.dialog-content {
  @include flex(flex-start, flex-start);
  flex-direction: column;
  position: relative;
  > .dialog-img {
    width: 12vw;
  }
  > .dialog-text {
    font-family: "Noto Sans TC";
    color: $color-white;
    font-size: 1.2vw;
    padding: 1.6vh 0;
  }
}

.dialog-box {
  font-family: "Noto Sans TC";
  color: $color-white;
  border: solid $color-blue 0.2vw;
  padding: 2.8vw;
  font-size: 1.2vw;
  line-height: 140%;
  margin: 8vh 0 16vh;
  position: relative;
  width: 100%;
  height: 38vh;
  &::after, &::before {
    content: "";
    display: flex;
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
  }
  &::before {
    border-width: 2.8vw 0 0 2.8vw;
    border-color: transparent transparent transparent $color-blue;
    top: -2.8vw;
    left: -0.2vw;
  }
  &::after {
    border-width: 2.2vw 0 0 2.2vw;
    border-color: transparent transparent transparent $color-dark-01;
    top: -2.4vw;
    left: -0.05vw;
  }
}



.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>