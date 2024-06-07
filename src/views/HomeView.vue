<template>
  <main>
    <Title/>
    <FadeListWithTOC>
      <template #about-me>
        <h2 title="about me" class="typing">$ whoami</h2>
        <span class="hrule"/>
        <p>
        I'm Pepijn Bakker, a 3rd year undergraduate student in computer science at 
        <a href="https://uu.nl" target="_blank">Utrecht University</a>. I've been programming
        in my free time since around 2016, mostly in game development in the beginning.
        </p>
        <p>
        I've always found computers and electronics to be infinitely fascinating. My growing
        passion for indie video games led me to start programming myself when I was 14. Not long after
        I was making games in Unity for game jams. Fast forward to today, I am soon getting my bachelor
        degree after an additional semester, and I cannot wait to put my knowledge to practice.
        </p>
        <p>
        
        </p>
        <p>
        When I am not programming I play the piano, read manga, go out with friends or play games.
        I also make educational content on <a href="https://youtube.com/@peppidesu" target="_blank">YouTube</a>, and
        do music production from time to time.
        </p>
      </template>
      <template #education>
        <h2 title="education">education</h2>
        <span class="hrule"/>
        <div class="subsection">
          <h3>BACHELOR | COMPUTER SCIENCE</h3>
          <i style="color:#73D0FF">Utrecht University · ongoing (early 2025)</i>
          <div class="subsection-list subsection-list-border"           
          style="display: flex; flex-wrap: wrap;"  
          >
            <ul>
              <li>Graphics (OpenGL)</li>
              <li>Concurrency</li>
              <li>Functional programming</li>
            </ul>
            <ul>
              <li>Computational Intelligence</li>
              <li>Game Design</li>
              <li>Modelling & System Dev. (OOP)</li>
            </ul>
            <ul>
              <li>Research Methods</li>
              <li>Interaction Technology</li>
              <li>Software Testing</li>
            </ul>
          </div>
        </div>
        <div class="subsection">
          <h3>EXCHANGE STUDY</h3>
          <i style="color:#73D0FF">University of Copenhagen · 2023</i>
          <div class="subsection-list subsection-list-border">
            <ul>
              <li>Numerical Methods</li>
              <li>Virtual Reality</li>
              <li>Reactive & Event-based Systems</li>
            </ul>
            
          </div>
        </div>
      </template>
      <template #skills>
        <h2 title="skills">skills</h2>
        <span class="hrule"/>
        <div class="subsection-list"              
            style="
              display: flex; 
              margin-left: 0em; 
              padding-left: 0em; 
              flex-wrap: wrap;
              justify-content: space-between;
            "
        >          
          <div>
            <h3>FRONTEND</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li>Vue.js</li>
                <li>React</li>
                <li>Typescript</li>                
              </ul>              
            </div>
            <h3>BACKEND</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Zod</li>
                <li>Rust</li>                
              </ul>              
            </div>
          </div>
          <div>
            <h3>INRASTRUCTURE</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li>Linux <span style="color: #343946">(arch btw)</span></li>
                <li>nginx</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>              
            </div>
            <h3>DEVOPS</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li>Docker</li>
                <li>GitHub Actions</li>
                <li>Jest</li>
                <li>ESLint</li>                
              </ul>              
            </div>
          </div>
          <div>
            <h3>GAME DEV</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li>Unity</li>
                <li>C#</li>
                <li>HLSL</li>
              </ul>              
            </div>
            <h3>LANGUAGES</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li>Dutch<br><small>(native)</small></li>
                <li>English<br><small>(Camebridge C2)</small></li>
              </ul>              
            </div>
          </div>
        </div>
        
      </template>
      <template #projects>
        <h2 title="projects">things i made</h2>
        <span class="hrule"/>
        <div class="subsection-list"              
            style="
              display: flex; 
              margin-left: 0em; 
              padding-left: 0em; 
              flex-wrap: wrap;
              justify-content: space-between;
            "
        >   
          <div>
            <h3>GAME JAM SUBMISSIONS</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li><a href="https://ldjam.com/events/ludum-dare/44/soul-checkout" target="_blank">Ludum Dare 44 (2019)</a></li>
                <li><a href="https://ldjam.com/events/ludum-dare/46/hanging-by-a-copper-wire" target="_blank">Ludum Dare 46 (2020)</a></li>
                <li><a href="https://ldjam.com/events/ludum-dare/47/swingshot-stuck-in-a-musical-loop" target="_blank">Ludum Dare 47 (2020)</a></li>
                <li><a href="https://itch.io/jam/gmtk-2020/rate/696850" target="_blank">GMTK Game Jam 2020</a></li>
                <li><a href="https://itch.io/jam/gmtk-jam-2022/rate/1621856" target="_blank">GMTK Game Jam 2022</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3>OTHER</h3>
            <div class="subsection-list subsection-list-border">
              <ul>
                <li>
                  <a href="https://github.com/peppidesu/bad-apple-flut" target="_blank">Pixelflut video player</a><br>
                  <small>Pixelflut was an online coding challenge<br>where you send pixels over plaintext TCP<br>to a canvas</small>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>BACHELOR FINAL PROJECT</h3>
            <p>GraphPolaris - Addon Marketplace</p>
          </div>
        </div>
      </template>
      <template #contact>
        <h2 title="contact">let's get in touch</h2>
        <div class="subsection-list subsection-list-border">
              <ul>
                <li><s>contact@peppidesu.dev</s> (soon)</li>
                <li><a href="https://linkedin.com/in/pepijn-bakker-87a057215/" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
      </template>
    </FadeListWithTOC>
  </main>
</template>

<style scoped>
main {
  padding: 0 4em;
}
.hrule {
  display: block;
  border-bottom: 1px solid #707A8C;
  margin: 0.5em 0 0.75em 0;
}
.typing::after {
  content: '_';
  margin-left: 0.1em;
  animation: blink 0.8s infinite;
}
.subsection {
  margin-bottom: 2em;
}
.subsection-list {
  margin: 0.5em 0.5ch;
  padding: 0 0.5em;
  min-width: fit-content;
  justify-content: start;
  gap: 0.25em 1.5em;
}
.subsection-list-border {
  border-left: 1px solid #707A8C;
}
.subsection-list ul {  
  list-style-type: ":: ";
  min-width: fit-content;
  font-size: 0.9em;
}
.subsection-list li::marker {
  color: #707A8C;
}

p {
  margin-bottom: 1em;
}

@keyframes blink {
  0%, 15%, 85%, 100% {
    opacity: 1;
  }
  50%, 35%, 65% {
    opacity: 0;
  }
}
</style>

<script lang="ts">
import Title from '@/components/Title.vue';
import FadeListWithTOC from '@/components/FadeListWithTOC.vue';
// @ts-ignore
import LoremIpsum from 'vue-lorem-ipsum';
import { ref } from 'vue';
export default {
  name: 'HomeView',
  components: {
    Title,
    FadeListWithTOC,
    LoremIpsum
  },
  setup() {
    return {
      clientWidth: ref(0)
    }
  },
  mounted() {
    this.clientWidth = this.$el.clientWidth;
    window.addEventListener('resize', () => {
      this.clientWidth = this.$el.clientWidth;
    });
  }
}
</script>