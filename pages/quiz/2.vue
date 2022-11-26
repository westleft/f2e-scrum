<script setup lang="ts">
import Sortable from "sortablejs";

const questionDOM = ref();
const answerDOM = ref();

onMounted(() => {
  const questionList = new Sortable(questionDOM.value, {
    group: {
      name: "shared",
    }, // set both lists to same group
    animation: 150,
    dataIdAttr: "data-idx",
    dragClass: "drag",
    onEnd: function () {},
  });

  const answerList = new Sortable(answerDOM.value, {
    group: {
      name: "shared",
    }, // set both lists to same group
    animation: 150,
    dataIdAttr: "data-idx",
    dragClass: "drag",
    onEnd: function () {},
  });
});
</script>

<template>
  <div id="quiz2">
    <div class="quiz-content">
      <div class="quiz-qusetion">
        <h3 class="q-title">產品待辦清單<span>Product Backlog</span></h3>
        <div class="quiz-inner-box" ref="questionDOM">
          <div class="drag-outer" data-idx="1">
            <p>13</p>
            <div class="drag-quiz-box" >
              <h4>會員系統</h4>
              <p>登入、註冊、權限管理</p>
            </div>
          </div>
          <div class="drag-outer" data-idx="2">
            <p>5</p>
            <div class="drag-quiz-box" >
              <h4>應徵者的線上履歷編輯器</h4>
            </div>
          </div>
          <div class="drag-outer" data-idx="3">
            <p>8</p>
            <div class="drag-quiz-box">
              <h4>前台職缺列表</h4>
              <p>職缺詳細內容、點選可發送應徵意願</p>
            </div>
          </div>
          <div class="drag-outer" data-idx="4">
            <p>8</p>
            <div class="drag-quiz-box">
              <h4>後台職缺管理功能</h4>
              <p>資訊上架、下架、顯示應徵者資料</p>
            </div>
          </div>
        </div>
      </div>

      <div class="quiz-answer">
        <p class="quiz-answer-title">開發 A 組的短衝待辦清單</p>
        <div class="quiz-inner" ref="answerDOM"></div>
      </div>
    </div>


      <!-- 
         -->


    <Footer :url="'/guide/3'" :page="'4'" :text="'準備好了！<br />開始 Sprint'"/>
  </div>
</template>

<style lang="scss" scoped>
#quiz2 {
  width: 100%;
  padding: 12vh 8vw;
}

.quiz-content {
  @include flex(flex-start, space-between);
  width: 100%;
}

.quiz-qusetion {
  width: 45%;
  > .q-title {
    @include flex(center, flex-start);
    font-family: "Noto Sans TC";
    font-size: 1.4vw;
    color: $color-white;
    text-align: left;
    padding-bottom: 4vh;
    width: 100%;
    // background-color: #fff;
    position: relative;
    > span {
      font-size: 1vw;
      padding-left: 0.6vw;
    }
    &::after {
      content: "";
      display: flex;
      position: absolute;
      right: 0;
      width: 8vw;
      height: 0.2vh;
      background-color: $color-white;
    }

    &::before {
      content: "";
      display: flex;
      position: absolute;
      right: 0;
      border-style: solid;
      border-width: 0.4vw 0 0.4vw 0.6vw;
      border-color: transparent transparent transparent $color-white;
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

.drag-outer {
  @include flex(flex-start);
  flex-direction: column;
  width: 100%;
  > p {
    @include flex();
    clip-path: polygon(
      20% 0,
      100% 0,
      100% 30%,
      100% 80%,
      80% 100%,
      30% 100%,
      0 100%,
      0 20%
    );
    background-color: $color-yellow;
    // width: 2vw;
    // height: 3.2vh;
    padding: 0.4vw 0.6vw;
  }
  .drag-quiz-box {
    width: 100%;
    color: $color-white;
    padding: 2.4vh 1.2vw;
    margin-bottom: 4vh;
    border: solid 0.2vw $color-yellow;
    position: relative;
    background-color: $color-dark-01;
    margin-top: 1vh;
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

.quiz-answer {
  width: 45%;
  height: 90vh;
  > .quiz-answer-title {
    font-family: "Noto Sans TC";
    font-size: 1.4vw;
    color: $color-white;
    text-align: left;
    padding-bottom: 4vh;
  }
  > .quiz-inner {
    border: dashed 0.2vw $color-white;
    height: 100%;
    padding: 4%
  }
}

.btn-outer {
  @include flex(center, flex-end);
  width: 100%;
  padding-top: 12vh;
  .start-btn {
    @include defaultBtn();
    line-height: 140%;
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