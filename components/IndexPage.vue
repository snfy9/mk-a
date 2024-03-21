<template>
  <div class="fade-in_page">
    <div class="index-page">
      <div class="contents-grid">
        <div class="emptySpace"></div>
        <div class="projects">
          <div class="project-container" v-for="item in items" :key="item.id">
            <NuxtLink :to="'/projects/' + item.projectName" class="project">
              <img :src="item.src" alt="Image" />
              <div class="text-container">
                <p class="caption">{{ item.caption }}</p>
                <p class="location">{{ item.location }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="emptySpace"></div>
        <Footer />
      </div>
      <HeaderDesktop v-if="isDesktop" />
      <HeaderMobile v-else />
      <Fixed v-if="isDesktop" />
    </div>
  </div>
</template>

<script>
import HeaderDesktop from "@/components/HeaderDesktop.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
import Footer from "@/components/Footer.vue";
import Fixed from "@/components/Fixed.vue";

export default {
  components: {
    HeaderDesktop,
    HeaderMobile,
    Footer,
    Fixed,
  },

  data() {
    return {
      isDesktop: false,
      items: [
        {
          id: 1,
          src: "/projects/beyond-coffee.jpg",
          order: 1,
          caption: "beyond coffee",
          location: "BEIJING, CHINA",
          projectName: "beyond-coffee",
        },
        {
          id: 2,
          src: "/projects/house-mk.jpg",
          order: 2,
          caption: "House MK - Hutong House Renovation",
          location: "BEIJING, CHINA",
          projectName: "house-mk",
        },
        {
          id: 3,
          src: "/projects/fanglang.jpg",
          order: 3,
          caption: "FANGLANG - Hutong Community Bar Renovation",
          location: "BEIJING,CHINA",
          projectName: "fanglang",
        },
      ],
    };
  },

  mounted() {
    this.handleResize();

    window.addEventListener("resize", this.handleResize);

    setTimeout(() => {
      this.$el.style.opacity = 1;
    }, 800);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 768;
    },
  },
};
</script>

<style scoped>
@keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in_page {
  transition: opacity 1.5s ease;
  opacity: 0;
  will-change: opacity;
}

/* zero */
.project-container,
.project {
  font-size: 0;
}

.index-page {
  letter-spacing: 1em;
}
p,
a {
  letter-spacing: 0.08em;
  color: #333;
  text-decoration: none;
  padding: 0;
  margin: 0;
}
.project {
  position: relative;
}
img {
  width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .contents-grid {
    display: grid;
    grid-template-columns: 33% 1fr;
    padding-top: 120px;
    min-height: 100vh;
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px;
    margin-right: 80px;
  }
  .project {
    display: grid;
  }
  .project::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    transition: opacity 0.6s ease;
    opacity: 0;
  }
  .project:hover::before {
    opacity: 1;
  }
  .project:hover .text-container {
    opacity: 1;
  }
  .text-container {
    position: absolute;
    bottom: 0px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  .text-container p {
    color: #fff;
  }
  .caption {
    font-size: 14px;
  }
  .location {
    font-size: 11px;
    padding-top: 2px;
  }
}

@media (max-width: 767px) {
  .contents-grid {
    padding-top: 100px;
    margin: 0 16px;
  }
  .project-container {
    padding-bottom: 32px;
  }
  .project-container:last-child {
    padding-bottom: 0;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
  .caption {
    font-size: 11px;
    letter-spacing: 0.06em;
  }
  .location {
    font-size: 10px;
    letter-spacing: 0.06em;
  }
  .emptySpace {
    display: none;
  }
}
</style>
