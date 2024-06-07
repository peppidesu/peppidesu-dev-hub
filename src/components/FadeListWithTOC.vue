
<template>
  <div class="root">
    <nav>      
      <a href="#">peppidesu.dev</a>
      <ul>
        <li class="toc-item" v-for="(id, i) in ids" :key="id">
          <a :href="'#' + id">{{ titles[i] }}</a>
        </li>
      </ul>
    </nav>
    <div class="list">
      <FadeCard class="card" v-for="(id, i) in ids" :key="id" :id="id">
        <slot :name="id"></slot>
      </FadeCard>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, ref, render, useSlots} from 'vue';
import FadeCard from './FadeCard.vue';

export default {
  components: {
    FadeCard
  },
  setup() {    
    const slots = useSlots();
    
    // Get section ids and titles
    const ids = computed(() => Object.keys(slots));
    const titles = computed(() => ids.value.map(id => slots[id]?.()[0]?.props?.title || id));

    const firstCardHeight = ref(0);
    const lastCardHeight = ref(0);
    const leftColumnWidth = computed(() => renderTOC.value ? '20em' : '0');
    const tocOpacity = computed(() => renderTOC.value ? 1 : 0);
    
    const renderTOC = ref(document.documentElement.clientWidth > 1000);
    window.addEventListener('resize', () => {
      renderTOC.value = document.documentElement.clientWidth > 1000;
    });

    const lastCardMargin = computed(() => 
      `calc(50vh - ${lastCardHeight.value * 0.5}px)`
    );
    const tocTopMargin = computed(() => 
      `${firstCardHeight.value * 0.5}px`
    );
    

    return {
      ids,
      titles,
      firstCardHeight,
      lastCardHeight,
      lastCardMargin,
      tocTopMargin,
      leftColumnWidth,
      tocOpacity,
    };
  },
  created() {
    window.addEventListener('load', () => {
      this.firstCardHeight = this.$el.querySelector('.card').clientHeight;
      this.lastCardHeight = this.$el.querySelector('.card:last-child').clientHeight;
    })
    window.addEventListener('resize', () => {
      this.firstCardHeight = this.$el.querySelector('.card').clientHeight;
      this.lastCardHeight = this.$el.querySelector('.card:last-child').clientHeight;
    });
  },
  mounted() {
    this.firstCardHeight = this.$el.querySelector('.card').clientHeight;
    this.lastCardHeight = this.$el.querySelector('.card:last-child').clientHeight;
  }
}
</script>

<style scoped>
.card {
  display: block;
  margin-bottom: 15em; /* TODO: directive */
  scroll-snap-align: center;
}
.card:last-child {
  margin-bottom: v-bind("lastCardMargin");
}

.root {
  display: grid;
  grid-template-columns: v-bind(leftColumnWidth) 2fr;
  transition: grid-template-columns 0.5s;
  width: 100%;
  margin: 0 auto;
  
}

a {
  color: #707A8C;
  font-size: 1.1em;
  box-shadow: none;
}
a:hover {
  color: #ffcc66;
  box-shadow: none;
}

nav {
  position: sticky;
  top: 50%;
  align-self: start;
  transform: translateY(-50%);
  text-wrap: nowrap; /* Prevents wrapping when TOC gets hidden by window resize */
  opacity: v-bind(tocOpacity);
  margin-top: v-bind(tocTopMargin);
  
  transition: margin-top 0.5s, opacity 0.5s; 
}

nav > a {
  padding: 0px;
}

nav > ul {
  margin-top: 0.5em;
  list-style-type: none;
  box-shadow: -1px 0 0 0 #707A8C;
  padding-left: 1em;
  margin-left: 0.75em;
}

.toc-item {
  margin-bottom: 0.5em; 
}
.toc-item:last-child {
  margin-bottom: 0;
}
</style>
