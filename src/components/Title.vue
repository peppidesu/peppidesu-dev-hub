<template>
  <div class="title">
    <img src="../assets/icon.png" width="256" height="256" class="logo">
    <div class="navbar">
      <a target="_blank" href="https://github.com/peppidesu">github</a>      
      <a target="_blank" href="https://linkedin.com/in/pepijn-bakker-87a057215/">linkedin</a>
      <a target="_blank" href="https://youtube.com/@peppidesu">youtube</a>
    </div>
    <h1>{{ display }}</h1>
    <div class="subtitle">
      gnu/linux · rust · webdev · gamedev · devops · educational content
    </div>
  </div>
</template>

<style scoped>
.logo {
  animation: fade-in 1s;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1f2430;
  z-index: -1;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1em 2em 5em 2em;
  width: 100%;
  background: linear-gradient(0, #1f243000 0%, #1f2430ff 60%);
  z-index: 100;
}
.subtitle {
  bottom: 1em;
  color: #73D0FF;
}
.navbar a {
  margin-right: 1em;
  color: #707A8C;
  box-shadow: none;
}
.navbar a:hover {
  color: #73D0FF;
  box-shadow: none;
}

h1 {
  text-align: center;
  color: #ffcc66;
  font-size: 4em;
}
h1::before {
  content: '_';
  visibility: hidden;
}
h1::after {
  content: '_';
  color: #ffcc66;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 15%, 85%, 100% {
    opacity: 1;
  }
  50%, 35%, 65% {
    opacity: 0;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script lang="ts">
import Menubar from 'primevue/menubar';
export default {
  components: {
    Menubar
  },
  name: 'Title',
  data() {
    return {
      text: 'peppidesu.dev',
      display: '',
      delay: 70,
      delayVariation: 0.6,
      startDelay: 1000,
    }
  },
  methods: {
    startTyping() {
      let delay = 0;
      for (let i = 0; i < this.text.length; i++) {
        delay += this.delay + Math.random() * this.delayVariation * this.delay;
        setTimeout(() => {
          this.display += this.text[i];
        }, delay);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.startTyping();
    }, this.startDelay);
  }
}
</script>