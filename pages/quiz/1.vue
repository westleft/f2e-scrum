<script setup lang="ts">
import Sortable from "sortablejs";
import type { Ref } from "vue";
import { useTextType } from "@/composables/timer"

const { result, typeEffect } = useTextType()

const qusetionLength = ref<number>(4)

const text = "請試著把需求放到產品待辦清單，並調整待辦的優先度順序。我們公司也推薦使用Jira來做任務的管理呢！"
  

onMounted(() => {
  typeEffect(text)

  const questionList = new Sortable(questionDOM.value, {
      group: {
        name: 'shared'
      }, // set both lists to same group
      animation: 150,
      dataIdAttr: "data-idx",
       dragClass: 'drag',
      onEnd: async function() {
        qusetionLength.value = questionList.toArray().length;
        // await nextTick()
        // console.log(answerList.toArray())
      }
  });

  // doms.value.forEach(item => {
  //   console.log(item)
  //    new Sortable(item, {
  //     group: {
  //       name: 'shared',
  //        put: () => {
  //         console.log(item.children.length)
  //         return item.children.length < 1;
  //       }
  //     }, // set both lists to same group
  //     animation: 150,
  //     dataIdAttr: "data-idx",
     
  // });
  // })
  // console.log()
  const answerList = new Sortable(answerDOM.value, {
      group: {
        name: 'shared',
      }, // set both lists to same group
      animation: 150,
      dataIdAttr: "data-idx",
     
  });
})

const questionDOM = ref()
const answerDOM = ref()


const doms = ref([]);
const getDOM = (el) => {
  doms.value.push(el)
}


</script>

<template>
  <div id="quiz-1">
    <div class="content">
      <div class="dialog-content">
        <img
          class="dialog-img"
          src="@/assets/images/npc01.png"
          alt="PO 小敏"
        />
        <p class="dialog-text">PO 小敏</p>
      </div>
      <p class="dialog-box">
        {{ result }}
      </p>
    </div>

    <div class="quiz-content">
      <div class="quiz-qusetion">
        <h3 class="q-title">產品待辦清單<span>Product Backlog</span></h3>
        <div class="quiz-inner-box" ref="questionDOM">
          <div class="drag-quiz-box" data-idx="1">
            <h4>會員系統</h4>
            <p>登入、註冊、權限管理</p>
          </div>
          <div class="drag-quiz-box" data-idx="2">
            <h4>應徵者的線上履歷編輯器</h4>
          </div>
          <div class="drag-quiz-box" data-idx="3">
            <h4>前台職缺列表</h4>
            <p>職缺詳細內容、點選可發送應徵意願</p>
          </div>
          <div class="drag-quiz-box" data-idx="4">
            <h4>後台職缺管理功能</h4>
            <p>資訊上架、下架、顯示應徵者資料</p>
          </div>
        </div>
        <div class="recommend">
          <p>推薦工具：</p>
          <a target="_blank" href="https://www.atlassian.com/zh/software/jira">
            <img src="@/assets/images/jira.png" alt=""> 
          </a>
        </div>
      </div>

      <div class="quiz-text-box">
        <p>優先度高</p>
        <div class="arrow"></div>
        <p>優先度低</p>
      </div>

      <div class="quiz-answer" ref="answerDOM">
        <TransitionGroup  name="list">
          <div class="quiz-box" v-for="i in qusetionLength" :key="i"></div>
        </TransitionGroup>
      </div>
    </div>

    <Footer :url="'/guide/2'" :page="'2'" :text="'完成'"/>
  </div>
</template>

<style lang="scss" scoped>
#quiz-1 {
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
    height: 20vh;
    &::after,
    &::before {
      content: "";
      display: flex;
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      top: 50%;
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

.quiz-content {
  @include flex(flex-start, space-between);
  width: 100%;

  > .quiz-qusetion {
    width: 45%;
    > .q-title {
      @include flex(center, flex-start);
      font-family: "Noto Sans TC";
      font-size: 1.4vw;
      color: $color-white;
      text-align: left;
      padding-bottom: 4vh;
      > span {
        font-size: 1vw;
        padding-left: 0.6vw;
      }
    }

    > .quiz-inner-box {
      @include flex(center, flex-start);
      flex-direction: column;
      font-family: "Noto Sans TC";
      width: 100%;
      min-height: 60vh;
      > .drag-quiz-box {
        width: 100%;
        color: $color-white;
        padding: 2.4vh 1.2vw;
        margin-bottom: 4vh;
        border: solid 0.2vw $color-yellow;
        position: relative;
        background-color: $color-dark-01;
        cursor: pointer;
        > h4 {
          font-size: 1.2vw;
          font-weight: 500;
        }
        > p {
          font-size: 1vw;
          font-weight: 400;
          padding-top: 3.2vh;
        }

        &::after {
          position: absolute;
          content: "";
          width: 4vw;
          height: 0.8vh;
          background-color: $color-yellow;
          bottom: -1vh;
          left: -0.2vw;
          clip-path: polygon(0 0, 100% 0, 84% 100%, 0 100%);
        }
      }
    }

    > .recommend {
      @include flex(center, flex-start);
      > p {
        font-family: "Noto Sans TC";
        font-size: 1vw;
        color: $color-white;
        padding-right: 0.4vw;
      }
      > img {
        width: 4.8vw;
      }
    }
  }

  > .quiz-text-box {
    @include flex();
    flex-direction: column;
    font-family: "Noto Sans TC";
    width: 20%;
    color: $color-white;
    font-size: 1vw;
    > p {
      writing-mode: vertical-lr;
      letter-spacing: 1vh;
    }
    > .arrow {
      position: relative;
      width: 0.2vw;
      height: 40vh;
      margin: 2vh 0;
      background-color: $color-white;
      &::after {
        position: absolute;
        display: flex;
        content: "";
        width: 0;
        height: 0;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        border-style: solid;
        border-width: 0.6vw 0.4vw 0 0.4vw;
        border-color: $color-white transparent transparent transparent;
      }
    }
  }

  > .quiz-answer {
    width: 45%;
    // height: 65vh;
    // background-image: url("@/assets/images/box-once.png");
    // background-size: 95%;
    // // background-repeat: no-repeat;
    // background-repeat: repeat-y ;
    // background-position: contain;
    > .quiz-box {
      height: 14vh;
      width: 100%;
      border: dashed 0.2vw $color-white;
      margin-bottom: 4vh;
      box-sizing: border-box;
    }
    .drag-quiz-box {
      width: 100%;
      color: $color-white;
      padding: 2.4vh 1.2vw;
      margin-bottom: 4vh;
      border: solid 0.2vw $color-yellow;
      position: relative;
      background-color: $color-dark-01;
      cursor: pointer;
      > h4 {
        font-size: 1.2vw;
        font-weight: 500;
      }
      > p {
        font-size: 1vw;
        font-weight: 400;
        padding-top: 3.2vh;
      }

      &::after {
        position: absolute;
        content: "";
        width: 4vw;
        height: 0.8vh;
        background-color: $color-yellow;
        bottom: -1vh;
        left: -0.2vw;
        clip-path: polygon(0 0, 100% 0, 84% 100%, 0 100%);
      }
    }
  }
}

.btn-outer {
  @include flex(center, flex-end);
  width: 100%;
  .start-btn {
    @include defaultBtn();
  }
}

.current-page {
  font-family: "Noto Sans TC";
  color: $color-white;
  width: 100%;
  font-size: 1.2vw;
  padding-bottom: 4vh;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}

@keyframes caret {
  50% { border-color: transparent; }
}
</style>