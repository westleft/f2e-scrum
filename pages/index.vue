<template>
  <div id="home">
    <h1 class="home-title">
      Scrum
      <div class="stripe"></div>
      <span class="ch">新手村</span>
    </h1>
    <p class="home-text">
      哈囉，歡迎加入TT資訊，<br />
      在正式加入專案開發之前，<br />
      需要請你先了解 Scrum 的流程與精神！<br />
      請接受挑戰任務，<br />
      成功通過 Scrum 新手村的挑戰任務吧～
    </p>
    <NuxtLink to="/guide/1" class="start-btn">接受挑戰</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
#home {
  @include flex(center, space-around);
  @include size(100%, 100%);
  min-height: 100vh;
  flex-direction: column;
  padding: 12vh 0;
}

.home-title {
  @include flex(flex-end, center);
  font-family: "Tomorrow";
  font-size: 6vw;
  font-weight: 600;
  color: $color-yellow;
  white-space: nowrap;
  > .stripe {
    background-size: 100% 50px;
    width: 2vw;
    min-height: 7vh;
    height: auto;
    margin: 0 1.2vw 1vh;
    opacity: 0.5;
    background: linear-gradient(
      45deg,
      #dcd51f 0,
      #dcd51f 5%,
      $color-dark-01 0,
      $color-dark-01 10%,
      #dcd51f 0,
      #dcd51f 15%,
      $color-dark-01 0,
      $color-dark-01 20%,
      #dcd51f 0,
      #dcd51f 25%,
      $color-dark-01 0,
      $color-dark-01 30%,
      #dcd51f 0,
      #dcd51f 35%,
      $color-dark-01 0,
      $color-dark-01 40%,
      #dcd51f 0,
      #dcd51f 45%,
      $color-dark-01 0,
      $color-dark-01 50%,
      #dcd51f 0,
      #dcd51f 55%,
      $color-dark-01 0,
      $color-dark-01 60%,
      #dcd51f 0,
      #dcd51f 65%,
      $color-dark-01 0,
      $color-dark-01 70%,
      #dcd51f 0,
      #dcd51f 75%,
      $color-dark-01 0,
      $color-dark-01 80%,
      #dcd51f 0,
      #dcd51f 85%,
      $color-dark-01 0,
      $color-dark-01 90%,
      #dcd51f 0,
      #dcd51f 95%,
      $color-dark-01 0
    );
  }
  > .ch {
    font-family: "Noto Sans TC";
    margin-bottom: 1vh;
    font-size: 400;
  }
}

.home-text {
  font-family: "Noto Sans TC";
  color: $color-white;
  font-size: 1.2vw;
  line-height: 200%;
  text-align: center;
  padding: 4vh 0;
}

.start-btn {
   @include defaultBtn();
}
</style>