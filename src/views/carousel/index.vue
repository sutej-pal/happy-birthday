<template>
  <div class="carousel-main">
    <carousel :per-page="1" :mouse-drag="true" :autoplay="false" :autoplayTimeout="2500" :loop="true"
              :navigationEnabled="true" :pagination-enabled="false"
              navigationPrevLabel="<span style='color: red;background: #ffffff2e;padding: 5px 10px;'>Prev</span>"
              navigationNextLabel="<span style='color: red;background: #ffffff2e;padding: 5px 10px;'>Next</span>">
      <slide>
        <div class="w-100 h-100" style="background: rgba(255,255,255,0.55)">
          <div style="font-family: Mochary, sans-serif;line-height: 1.2;font-size: 8vw;color: #000;">Happy Birthday</div>
<!--          <div style="font-family: Mochary, sans-serif;line-height: 1.2;font-size: 6vw;color: #000;">To you</div>-->
          <div style="font-family: Mochary, sans-serif;line-height: 1.2;font-size: 9vw;color: darkred">Shubham</div>
          <div style="font-family: Mochary, sans-serif;line-height: 1.2;font-size: 3vw;color: darkred">(DeadPool)</div>
          <div style="line-height: 1.2;font-size: 1vw;padding-top: 20px;color: #000;">Please click on Next to start ---->></div>
        </div>
      </slide>
      <slide>
        <img src="../../assets/images/shubham (1).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (2).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (3).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (4).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (5).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (6).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (7).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (8).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (9).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (10).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (11).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (12).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (13).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (14).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (15).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (16).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (17).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (18).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (19).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (20).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (21).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (22).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (23).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (24).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (25).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (26).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (27).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (28).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (29).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (30).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (31).jpg" alt="">
      </slide>
      <slide>
        <img src="../../assets/images/shubham (32).jpg" alt="">
      </slide>
    </carousel>
  </div>
</template>
<script src="./carousel.js"></script>
<style scoped lang="scss">
  .carousel-main {
    color: red;
    margin: 0 auto;
    padding: 40px 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;

    .VueCarousel {
      width: 70%;
      margin: 0 auto;

      .VueCarousel-slide {
        width: 100%;
        height: 500px;

        img {
          height: -webkit-fill-available;
          width: auto;
        }
      }

      .VueCarousel-navigation-button:focus {
        outline: none;
      }
    }
  }

  .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
    outline: 1px solid #e68200;
  }
  .VueCarousel-navigation-button[data-v-453ad8cd]{
    color: red;
    background: #ffffff26;
  }
</style>
