<template>
  <div>
    <div class="fade-in-out_logo" v-if="showLogo">
      <img :src="svgPath" class="mk-architects_logo" />
    </div>

    <div class="fade-in_page" v-if="!showLogo">
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
  transition: "fade",

  data() {
    return {
      isDesktop: false,
      showLogo: true,
      svgPath: "/mk-architects.svg",

      items: [
        {
          id: 1,
          src: "/projects/fanglang.jpg",
          order: 1,
          caption: "FANGLANG - Hutong Community Bar Renovation",
          location: "Beijing, CHINA",
          projectName: "fanglang",
        },
        {
          id: 2,
          src: "/projects/house-mk.jpg",
          order: 2,
          caption: "House MK - Hutong House Renovation",
          location: "Beijing, CHINA",
          projectName: "house-mk",
        },
        {
          id: 3,
          src: "/projects/beyond-coffee.jpg",
          order: 3,
          caption: "beyond coffee",
          location: "Beijing, CHINA",
          projectName: "beyond-coffee",
        },
      ],
    };
  },

  mounted() {
    this.handleResize(); // 初回実行
    window.addEventListener("resize", this.handleResize);

    this.handleFade();

    this.handleLogoAnimation();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 768;
    },

    handleFade() {
      const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore");

      if (!hasVisitedBefore) {
        sessionStorage.setItem("hasVisitedBefore", "true");
        this.showLogo = true;
        this.handleLogoAnimation();
      } else {
        this.showLogo = false;
      }
    },

    handleLogoAnimation() {
      setTimeout(() => {
        this.showLogo = false;
      }, 4000); // 遅延
    },
  },
};
</script>

<style scoped>
/* fade-in-out_logo */
@keyframes fade-in-out {
  0%,
  10% {
    opacity: 0;
  }
  30%,
  70% {
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
}
.fade-in-out_logo {
  animation: fade-in-out 4.2s ease-in-out;
  width: 260px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  perspective: 1000; /* 追加 */
}
.mk-architects_logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* fade-in_page */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in_page {
  animation: fadeIn 1.2s ease-in-out;
}

/* zero */
.project-container,
.project {
  font-size: 0;
}
/* index-page */
.index-page {
  letter-spacing: 1em;
}
p,
a {
  font-size: 10px;
  letter-spacing: 0.05em;
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
    left: 26px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  .text-container p {
    color: #fff;
  }
  .caption {
    font-size: 13px;
    letter-spacing: 0.06em;
  }
  .location {
    font-size: 11px;
    letter-spacing: 0.06em;
    padding-top: 1px;
  }
}

@media (max-width: 767px) {
  .fade-in-out_logo {
    width: 200px;
  }
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
    padding-top: 8px;
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
