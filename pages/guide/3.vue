<script setup lang="ts">
import { useTextType } from "@/composables/timer";
const { result, typeEffect, done } = useTextType();
const { result: result2, typeEffect: typeEffect2, done: done2 } = useTextType();

const text = `
  等等等等等，你應該還不知道什麼是 Sprint 吧？<br />
  讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！
`;
const text2 = `
  Sprint是一個短衝，開發團隊會在這期間執行開發。
  在這段期間內，開發團隊舉辦每日站立會議(Daily Scrum)，
  追蹤成員間的工作狀況，除了每日站立會議，
  在Sprint的結束也會包含短衝檢視會議(Sprint Review)短衝自省會議(Sprint
  Retrospective)。
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

</script>

<template>
  <div id="guide3">
    <div class="content">
      <div class="dialog-content">
        <img
          class="dialog-img"
          src="@/assets/images/npc01.png"
          alt="PO 小敏"
        />
        <p class="dialog-text">PO 小敏</p>
      </div>
      <div class="dialog-box">
        <p class="text1" v-html="result"></p>
        <p class="text2" v-html="result2"></p>
      </div>
    </div>
    <Transition>
      <div v-if="done2" class="guide-box">
        <div class="guide-box-inner">
          <h3 class="box-title">每日站立會議 Daily Scrum</h3>
          <p class="box-text">每天都要進行的會議，以15分鐘為限制</p>
          <ul class="box-list">
            <li class="list-item">昨天為團隊的短衝目標(Sprint Goal)做了那些進度</li>
            <li class="list-item">今天我會如何準備來幫助團隊達到短衝目標</li>
            <li class="list-item">過程中有遇到什麼問題、難題</li>
          </ul>
          <p class="box-text">透過團隊分享，追蹤大家的工作狀況。</p>
        </div>

        <div class="guide-box-inner">
          <h3 class="box-title">短衝檢視會議 Sprint Review</h3>
          <p class="box-text">
            在短衝(Sprint)結束時，團隊會進行短衝檢視會議(Sprint Review)，
            向利害關係人(Stakeholder)展示工作結果，蒐集使用回饋，
            分享市場反應，並一起討論下一步工作方向。<br />

            在短衝檢視會議過程，會取得使用者或利害關係人對於本次短衝增量的回饋意見，
            討論哪些想法值得納入至產品待辦清單去實踐。
          </p>
          
        </div>

        <div class="guide-box-inner">
          <h3 class="box-title">短衝自省會議 Sprint Retrospective</h3>
          <p class="box-text">團隊在自省會議裡，會共同回顧該短衝歷程發生的事情：</p>
          <ul class="box-list">
            <li class="list-item">好的地方</li>
            <li class="list-item">可以改進的地方</li>
            <li class="list-item">如何維持我們已有的成功經驗</li>
          </ul>
          <p class="box-text">討論優化工作流程、讓團隊有變得更好的機會。</p>
          <br />
          <p>推薦工具：</p>
          <img class="box-img" src="@/assets/images/confluence.png" alt="confluence">
        </div>
      </div>
    </Transition>
    <Transition>
      <Footer v-if="done2"  :url="'/quiz/3'" :page="'5'" :text="'我了解了'"/>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
#guide3 {
  @include flex();
  flex-direction: column;
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
    @include flex(flex-end);
    flex-direction: column;
    width: 70%;
    > p {
      font-family: "Noto Sans TC";
      color: $color-white;
      border: solid $color-blue 0.2vw;
      padding: 2.8vw;
      font-size: 1.2vw;
      line-height: 140%;
      position: relative;
      width: 100%;
      margin-bottom: 2vh;
      &.text1 {
        height: 20vh;
      }
      &.text2 {
        height: 28vh;
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
}

.guide-box {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 2.8%;
  > .guide-box-inner {
    width: 100%;
    color: $color-white;
    line-height: 180%;
    font-size: 1vw;
    > .box-title {
      @include flex();
      background-color: $color-yellow;
      clip-path: polygon(4% 0, 70% 0%, 100% 0, 100% 90%, 96% 100%, 0 100%, 0% 70%, 0 10%);
      width: 100%;
      padding: 0.8vh 0;
      font-size: 1.1vw;
      color: $color-dark-01;
      font-weight: 600;
      margin-bottom: 2.8vh;
    }
    > .box-list {
      padding-left: 1.2vw;
      > .list-item {
        list-style:initial ;
      }
    }

    > .box-img {
      width: 12vw;
      margin-top: 1vh;
    }

    > .box-text {
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