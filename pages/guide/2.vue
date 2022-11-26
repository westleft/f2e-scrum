<script setup lang="ts">
import { useTextType } from "@/composables/timer";
const { result, typeEffect, done } = useTextType();
const { result: result2, typeEffect: typeEffect2, done: done2 } = useTextType();
const { result: result3, typeEffect: typeEffect3, done: done3 } = useTextType();
const text = `
  產品待辦清單好了之後，我們來召集Scrum Master開發團隊共同召開短衝規劃會議(Sprint Planning)。
  短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完哪些工作事項來達到商業需求，
  列出短衝待辦清單(Sprint Backlog)，並由開發團隊在接下來的產品開發期裡執行。
`;
const text2 = `
  嗨嗨你是新來的前端吧！我是這次的Scrum
  Master小捷，我的工作主要是促成開發團隊成員協作、
  引導團隊進行自省會議，提升隊成員 Scrum瞭解。<br /><br />

  這位是小斯，是我們開發團隊的成員唷！目前我們團隊一次Sprint是兩週的時間，依照我的觀察，
  目前團隊可以負擔的點數(Sprint Point)大約是20點左右。
`;

const text3 = `
  新來的，你應該不知道點數是什麼意思吧！哈哈~我來跟你介紹一下吧～Sprint
  Point目的是為了衡量速度， 是用大概花費的時間預估出的相對點數。<br /><br />

  我這邊已經把剛剛討論好的點數標上去囉！你來練習把任務排到短衝待辦清單吧！
  我們平常管理任是使用Jira 這套軟體，你有時間記得先去註冊和熟悉唷。
`;

onMounted(() => {
  typeEffect(text);
});

const typeingWatch = watch(done, (val) => {
  if (val === true) {
    typeEffect2(text2);
    typeingWatch();
  }
});

const typeingWatch2 = watch(done2, (val) => {
  if (val === true) {
    typeEffect3(text3);
    typeingWatch();
  }
});
</script>

<template>
  <div id="guide2">
    <div class="content">
      <div class="dialog-content">
        <img class="dialog-img" src="@/assets/images/npc01.png" alt="PO 小敏" />
        <p class="dialog-text">PO 小敏</p>
      </div>
      <p class="dialog-box" v-html="result"></p>
    </div>

    <div class="content">
      <div class="dialog-content">
        <img class="dialog-img" src="@/assets/images/npc02.png" alt="PO 小敏" />
        <p class="dialog-text">SM 小捷</p>
      </div>
      <Transition>
        <p v-show="done" class="dialog-box text2" v-html="result2"></p>
      </Transition>
    </div>

    <div class="content">
      <div class="dialog-content">
        <img class="dialog-img" src="@/assets/images/npc03.png" alt="PO 小敏" />
        <p class="dialog-text">開發 小斯</p>
      </div>
      <Transition>
        <p v-show="done2" class="dialog-box text3" v-html="result3"></p>
      </Transition>
    </div>

    <Transition>
      <Footer v-show="done3" :url="'/quiz/2'" :page="'2'" :text="'接受挑戰'" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
#guide2 {
  width: 100%;
  padding: 12vh 8vw;
}

.content {
  @include flex(flex-start, space-between);
  width: 100%;
  padding-bottom: 8vh;
  .dialog-content {
    @include flex(space-between, flex-start);
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
    position: relative;
    width: 70%;
    height: 32vh;
    &.text2, &.text3 {
      height: 40vh;
    }
    &::after,
    &::before {
      content: "";
      display: flex;
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      top: 30%;
      transform: translateY(-50%);
    }
    &::before {
      border-width: 2vw 2.5vw 2vw 0;
      border-color: transparent $color-blue transparent transparent;
      left: -2.6vw;
    }
    &::after {
      border-width: 1.7vw 2vw 1.7vw 0;
      border-color: transparent $color-dark-01 transparent transparent;
      left: -2.25vw;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(4vh);
}
</style>