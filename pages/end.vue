<script setup lang="ts">
import {} from "vue";
</script>

<template>
  <div id="end">
    <h1 class="end-title">Congratulation !</h1>
    <p class="end-text">
      恭喜通過 Scrum 新手村！<br />
      正式加入 TT 資訊 開發 A 組
    </p>
    <div class="end-npcs">
      <img src="../assets/images/m_npc03.png" alt="npc">
      <img src="../assets/images/m_npc02.png" alt="npc">
      <img src="../assets/images/m_npc01.png" alt="npc">
    </div>

    <div class="fire-box default">
      <img src="../assets/images/fire.png" alt="">
      <div class="mask fire1"></div>
    </div>
    <div class="fire-box default">
      <img src="../assets/images/fire.png" alt="">
      <div class="mask fire2"></div>
    </div>

    <div class="fire-box small">
      <img src="../assets/images/fire.png" alt="">
      <div class="mask fire1"></div>
    </div>
    <div class="fire-box small">
      <img src="../assets/images/fire.png" alt="">
      <div class="mask fire2"></div>
    </div>

    <div class="fire-box white">
      <img src="../assets/images/fire2.png" alt="">
      <div class="mask fire1"></div>
    </div>

    <div class="fire-box white">
      <img src="../assets/images/fire2.png" alt="">
      <div class="mask fire2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#end {
  @include flex();
  flex-direction: column;
  width: 100%;
  padding: 12vh 8vw;
  position: relative;
  > .end-title {
    font-family: "Tomorrow";
    color: $color-yellow;
    font-size: 6vw;
    font-weight: 600;
  }

  > .end-text {
    font-family: "Noto Sans TC";
    line-height: 160%;
    font-size: 1.4vw;
    color: $color-white;
    text-align: center;
    padding: 16vh 0;
  }

  > .end-npcs {
    @include flex();
    width: 100%;
    > img {
      width: 8%;
      margin: 0 2vw;
    }
  }

  .fire-box:nth-child(4) {
    right: 8vw;
  }
  .fire-box:nth-child(5) {
    left: 8vw;
  }
  .fire-box:nth-child(6) {
    left: 20vw;
    bottom: 2vh;
  }
  .fire-box:nth-child(7) {
    right: 20vw;
    bottom: 2vh;
  }
  .fire-box:nth-child(8) {
    left: 10vw;
    bottom: 20vh;
  }
  .fire-box:nth-child(9) {
    right: 10vw;
    bottom: 20vh;
  }
}

.fire-box {
  @include size(8vw, 8vw);
  position: absolute;
  > img {
    width: 100%;
  }
  > .mask {
    width: 100%;
    height: 100%;
    border: 0vw solid $color-dark-01; 
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

}

.default {
  > .fire1 {
    animation: 1.5s fire infinite linear;
  }

  > .fire2 {
    animation: 1.5s fire infinite linear 0.5s;
  }
}

.small {
  @include size(4vw, 4vw);
  > .fire1 {
    animation: 1.5s fire infinite linear 1.2s;
  }
  > .fire2 {
    animation: 1.5s fire infinite linear 0.4s;
  }
}

.white {
  @include size(5.2vw, 5.2vw);
  > .fire1 {
    animation: 1.5s fire infinite linear;
  }
  > .fire2 {
    animation: 1.5s fire infinite linear 0.2s;
  }
}


@keyframes fire {
  0% { opacity: 0; border: 6vw solid $color-dark-01 }
  40% { opacity: 1; border: 2vw solid $color-dark-01 }
  80% { border: 0vw solid $color-dark-01 }
  100% { opacity: 0}
}
</style>