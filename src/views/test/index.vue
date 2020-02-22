<template>
  <div>
    <canvas id="birthday"></canvas>
    <div v-if="stopTimer" class="timer d-flex justify-content-between w-50 mx-auto">
      <div class="days">
        <div>{{days}}</div>
        <div class="heading">days</div>
      </div>
      <div class="hours">
        <div>{{timer.hours}}</div>
        <div class="heading">hours</div>
      </div>
      <div class="minutes">
        <div>{{timer.minutes}}</div>
        <div class="heading">minutes</div>
      </div>
      <div class="seconds">
        <div>{{timer.seconds}}</div>
        <div class="heading">seconds</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script src="./test.js"></script>
<style scoped lang="scss">
  @font-face {
    font-family: 'digital-7';
    src: url('../../assets/fonts/digital-7.ttf');
  }

  .timer {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 200px;
    font-family: digital-7, sans-serif;
    font-size: 10vw;
    color: red;
    background: #ffffff17;
    padding: 10px 20px;
    border: 1px solid #ff000038;

    .days, .hours, .minutes, .seconds {
      text-align: center;

      div {
        line-height: 0.9;
      }

      .heading {
        content: 'HOURS';
        font-size: 25px;
        font-family: monospace;
        text-transform: uppercase;
      }
    }
  }
</style>
