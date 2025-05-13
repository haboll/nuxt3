<template>
  <Swiper class="swiper" direction="vertical" :slides-per-view="5">
    <SwiperSlide>
      <div class="slide-item">1</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">2</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">3</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">4</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">5</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">6</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">6</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">6</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">6</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide-item">6</div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import BorderWrap from '../../components/borderWrap.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

definePageMeta({
  layout: 'mobile',// 你的页面解构文件名 对应layouts文件夹中的文件名
})
</script>
<style lang="less">
.swiper {
  width: 100%;
  height: 100%;
}
.slide-item {
  width: 90%;
  height: 400px;
  border: 1px solid #000;
}
</style>
