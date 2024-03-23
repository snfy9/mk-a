<template>
  <div class="index-page">
    <div class="contents-grid">
      <div class="emptySpace"></div>
      <div class="projects">
        <div class="project-container" v-for="item in items" :key="item.id">
          <NuxtLink :to="'/cn/projects/' + item.projectName" class="project">
            <img :src="item.src" alt="Image" />
            <div class="text-container">
              <div class="captions">
                <p class="caption">{{ item.caption }}</p>
                <p class="captionCN">{{ item.captionCN }}</p>
              </div>
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
</template>

<script>
import HeaderDesktop from "@/components/cn/HeaderDesktop.vue";
import HeaderMobile from "@/components/cn/HeaderMobile.vue";
import Footer from "@/components/cn/Footer.vue";
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
      items: [
        {
          id: 1,
          src: "/projects/beyond-coffee.webp",
          order: 1,
          caption: "beyond coffee",
          location: "北京, 中国",
          projectName: "beyond-coffee",
        },
        {
          id: 2,
          src: "/projects/house-mk.webp",
          order: 2,
          caption: "House MK - ",
          captionCN: "胡同房子的改造",
          location: "北京, 中国",
          projectName: "house-mk",
        },
        {
          id: 3,
          src: "/projects/fanglang.webp",
          order: 3,
          caption: "FANGLANG - ",
          captionCN: "胡同社区酒吧改造",
          location: "北京, 中国",
          projectName: "fanglang",
        },
      ],
    };
  },

  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
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
.captions {
  display: flex;
  align-items: center;
}
.captionCN {
  padding-left: 3px;
}

@media (min-width: 768px) {
  .contents-grid {
    display: grid;
    grid-template-columns: 33% 1fr;
    padding-top: 120px;
    /* min-height: 100vh; */
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
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
  .captionCN {
    font-size: 12px;
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
    padding-bottom: 28px;
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
  .captionCN {
    font-size: 10px;
  }
  .location {
    font-size: 9px;
    letter-spacing: 0.06em;
    padding-top: 1px;
  }
  .emptySpace {
    display: none;
  }
}
</style>