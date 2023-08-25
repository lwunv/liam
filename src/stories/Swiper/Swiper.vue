<template>
  <swiper 
    :pagination="{
      dynamicBullets: true,
    }"
    effect="fade"
    :loop="true"
    :lazy="true"
    :modules="modules" 
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :autoHeight="true"
    :navigation="true"
    :class="classes"
    :style="styles"
  >
    <swiper-slide><img src="https://picsum.photos/1920/1600?random" alt="" loading="lazy" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1920/1600?random" alt="" loading="lazy" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1920/1600?random" alt="" loading="lazy" /></swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Lazy, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { CLASS_PREFIX, PREFIX } from '@/utils/constants';
import { computed } from 'vue';
import { setPropSize } from '@/utils/helpers';

defineOptions({ name: `${PREFIX}Swiper` })

const props = defineProps({
  items: [Array as any],
  active: [Number],
  height: [Number, String],
})

const classes = computed(() => ({
  [`${CLASS_PREFIX}swiper`]: true,
}))

const styles = computed(() => {
  const styleObj: any = {}
  
  if (props.height) {
    let size = setPropSize(props.height)
    styleObj.height = size
  }

  return styleObj
})

const modules = [Autoplay, Pagination, Navigation]
</script>

<style lang="scss" scoped>
@import './Swiper.scss';
</style>