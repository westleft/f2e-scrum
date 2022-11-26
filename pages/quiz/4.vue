<script setup lang="ts">
// import {  } from 'vue';
</script>

<template>
  <div id="quiz4">
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
        <p>
          哇新來的，你真的很幸運，今天剛好是開發B組的Retro，你也來見識一下，看看Retro都該做些什麼吧！<br />
          我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方，並記錄在Confluence 中。
        </p>
        <p>
          重點在於『正面表述』，你也思考看看，哪一些是適合 Retro 的回饋吧。
        </p>
      </div>
    </div>

    <div class="quiz-content">
      <div class="quiz">
        <h3>做得好的地方</h3>
        <div class="quiz-inner">
          <label class="container"
            >這次我幫了很多人救火耶。
            <input type="radio" checked="checked" name="q1" />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >大家在開發上都會互相cover，讓任務都有準時在時間內完成。
            <input type="radio" name="q1" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div class="quiz">
        <h3>有哪些可以做得更好？</h3>
        <div class="quiz-inner">
          <label class="container"
            >可以記錄這次的開發時間，讓預估團隊點數更精準。
            <input type="radio" checked="checked" name="q2" />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >開發時間預估不準確，請後端下次改進，避免Delay到我。
            <input type="radio" name="q2" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>

    <p class="recommend">
      推薦工具：<img src="@/assets/images/confluence.png" alt="" />
    </p>

    <Footer :url="'/end'" :page="'7'" :text="'完成'"/>
  </div>
</template>

<style lang="scss" scoped>
#quiz4 {
  @include flex(flex-start);
  flex-direction: column;
  width: 100%;
  padding: 12vh 8vw;
  > .recommend {
    @include flex();
    font-family: "Noto Sans TC";
    font-size: 1.2vw;
    padding: 4vh 0;
    color: $color-white;
    > img {
      width: 8vw;
    }
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

.quiz-content {
  @include flex(flex-start, space-between);
  width: 100%;
  > .quiz {
    @include flex(flex-start);
    flex-direction: column;
    width: 48%;
    > h3 {
      font-family: "Noto Sans TC";
      color: $color-white;
      font-size: 1.4vw;
      padding: 2vh 0;
    }
    > .quiz-inner {
      border: solid 0.2vw $color-blue;
      width: 100%;
      padding: 1.6vw;
      height: 24vh;
      > label {
        @include flex(flex-start, flex-start);
        color: $color-white;
        font-size: 1.2vw;
        line-height: 140%;
      }
    }
  }
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0.4vh;
  left: 0;
  height: 1.2vw;
  width: 1.2vw;
  background-image: url("@/assets/images/checkbox.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.2vw;
  width: 1.2vw;

  background-image: url("@/assets/images/checked.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>