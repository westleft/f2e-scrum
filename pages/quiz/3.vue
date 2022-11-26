<script setup lang="ts">
import { useTextType } from "@/composables/timer";
import Sortable from "sortablejs";
const { result, typeEffect, done } = useTextType();
const text = "那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？"
const questionDOM = ref();
const answerDOM = ref();

const doms = ref([]);
const getDOM = (el: HTMLElement) => {
  doms.value.push(el);
};

onMounted(() => {
 typeEffect(text);
  doms.value.forEach((item) => {
    new Sortable(item, {
      group: {
        name: "shared",
        pull: () => {
          item.classList.remove("hasAnswer")
        },
        put: () => {
          if(item.children.length < 1){
            item.classList.add("hasAnswer")
          } 
          return item.children.length < 1;
        },
      }, 
      animation: 150,
      dataIdAttr: "data-idx",
      dragClass: "drag",
    });
  });

  const answerList = new Sortable(answerDOM.value, {
    group: {
      name: "shared",
    }, // set both lists to same group
    animation: 150,
    dataIdAttr: "data-idx",
    dragClass: "drag",
    onEnd: function () {
      console.log();
    },
  });
});
</script>

<template>
  <div id="quiz3">
    <div class="content">
      <div class="dialog-content">
        <img
          class="dialog-img"
          src="@/assets/images/npc02.png"
          alt="PO 小敏"
        />
        <p class="dialog-text">開發 小斯</p>
      </div>
      <p class="dialog-box">
        {{ result }}
      </p>
    </div>

    <div class="quiz-content">
      <div class="quiz-box">
        <h3>短衝<br /><span>Sprint</span></h3>
      </div>

      <div class="box-outer">
        <div class="quiz-box1">
          <div class="drag-box" :ref="getDOM"></div>
        </div>
        <div class="quiz-box2">
          <div class="drag-box" :ref="getDOM"></div>
          <div class="drag-box" :ref="getDOM"></div>
        </div>
      </div>
    </div>
    <p class="quiz-text">提示：將目標標籤拖移至對應方框位置</p>
    <div class="answer-content" ref="answerDOM">
      <div class="answer">
        <p>每日站立會議<br />Daily Scrum</p>
      </div>
      <div class="answer">
        <p>短衝檢視會議<br />Sprint Review</p>
      </div>
      <div class="answer">
        <p>短衝自省會議<br />Sprint Retrospective</p>
      </div>
    </div>


    <Footer :url="'/quiz/4'" :page="'6'" :text="'完成'"/>
  </div>
</template>

<style lang="scss" scoped>
#quiz3 {
  @include flex(flex-start);
  flex-direction: column;
  width: 100%;
  padding: 12vh 8vw;

  > .quiz-text {
    font-family: "Noto Sans TC";
    font-size: 1.2vw;
    color: $color-white;
    padding: 2.8vh 0 1vh 0;
  }
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
  @include flex(flex-end);
  width: 100%;

  > .quiz-box {
    @include flex();
    position: relative;
    padding: 20vh 8vw;
    background-image: url("@/assets/images/line1.png");
    background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;
    width: 30%;
    > h3 {
      font-family: "Noto Sans TC";
      color: $color-white;
      font-size: 1.4vw;
      line-height: 160%;
      text-align: center;
      transform: translate(32%, 40%);
      > span {
        font-family: "Tomorrow";
      }
    }
  }

  > .box-outer {
    @include flex(flex-start, flex-start);
    flex-direction: column;
    width: 70%;
    height: 50vh;
    .hasAnswer {
      border: none !important;
    }
    .answer {
      @include flex();
      background-color: $color-yellow;
      color: $color-dark-01;
      font-weight: 600;
      padding: 1.4vh 4vw;
      cursor: pointer;
      > p {
        font-size: 1vw;
        text-align: center;
        line-height: 160%;
      }
    }
    > .quiz-box1 {
      width: 70%;
      height: 60%;
      background-image: url("@/assets/images/line2.png");
      background-size: contain;
      background-position: left top;
      background-repeat: no-repeat;
      position: relative;
      > .drag-box {
        border: dashed 0.2vw $color-white;
        width: 19vw;
        height: 12vh;
        background-color: $color-dark-01;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12%;
      }
    }

    > .quiz-box2 {
      @include flex(center, space-around);
      width: 100%;
      height: 40%;
      border-bottom: solid 0.15vw $color-yellow;
      margin-left: 0.4vw;
      > .drag-box {
        border: dashed 0.2vw $color-white;
        width: 19vw;
        height: 12vh;
      }
    }
  }
}

.answer-content {
  @include flex(center, flex-start);
  width: 100%;
  height: 24vh;
  > .answer {
    display: flex;
    background-color: $color-yellow;
    color: $color-dark-01;
    font-weight: 600;
    padding: 1.4vh 4vw;
    margin-right: 2vw;
    cursor: pointer;
    > p {
      font-size: 1vw;
      text-align: center;
      line-height: 160%;
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
</style>