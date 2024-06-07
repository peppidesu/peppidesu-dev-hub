<template>
  <div class="wrapper">
    <span :id="id" class="anchor" ref="scrollTarget"/>
    <div 
      ref="target" 
      class="scroll-fade-card" 
      :style="style"
    >
      <slot></slot>
    </div>    
  </div>
</template>

<style scoped>
.scroll-fade-card {
  opacity: 1;
  transition: all 0.1s;
}
.anchor {
  visibility: hidden;
  display: block;
  transform: v-bind(anchorOffset);
}
</style>

<script setup lang="ts">    
import { ref, onMounted, computed } from 'vue';

type FadeCardProps = {
    id: string;
    fadeTreshold?: number;
}

const props = withDefaults(defineProps<FadeCardProps>(), {
    fadeTreshold: 0.2
});

const target = ref<Element>();
const scrollTarget = ref<Element>();

const animate = ref(0);
const targetHeight = ref(0);

window.addEventListener('load', () => {
  targetHeight.value = target.value!.clientHeight;
});

const style = computed(() => ({
    opacity: animate.value,
    transform: `translateX(-${(1 - animate.value) * 2}em)`
}));

const anchorOffset = computed(() => 
  `translateY(calc(-50vh + ${targetHeight.value * 0.5}px))`
)

const thresholds = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

const fadeObserver = new IntersectionObserver(
    ([entry]) => {        
        animate.value = entry.intersectionRatio * (1 + props.fadeTreshold) - props.fadeTreshold;        
    },
    {
        threshold: thresholds,
        rootMargin: '-10% 0%'
    }
);


onMounted(() => { 
    fadeObserver.observe(target.value as Element);
}); 
</script>