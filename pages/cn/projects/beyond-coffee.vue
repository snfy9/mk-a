<template>
  <div class="project-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="project_container">
        <div class="title_container">
          <p class="caption">beyond coffee</p>
          <p class="location">北京，中国</p>
        </div>
        <div class="project">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            alt="Image"
            class="fade-in"
            :ref="`image${index}`"
            :class="{ 'no-padding': index === images.length - 1 }"
          />
        </div>
        <div class="project_info">
          <div class="list_item">
            <p class="heading">项目名称</p>
            <p class="content">beyond coffee</p>
          </div>
          <div class="list_item">
            <p class="heading">项目类型</p>
            <p class="content"><span>室内设计 &lpar;咖啡+酒吧&rpar;</span></p>
          </div>
          <div class="list_item">
            <p class="heading">项目地点</p>
            <p class="content"><span>北京，中国</span></p>
          </div>
          <div class="list_item">
            <p class="heading">客户</p>
            <p class="content">beyond coffee</p>
          </div>
          <div class="list_item">
            <p class="heading">用地面积</p>
            <p class="content">87<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">建筑面积</p>
            <p class="content">73<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">设计周期</p>
            <p class="content">2023.5 - 2023.7</p>
          </div>
          <div class="list_item">
            <p class="heading">施工周期</p>
            <p class="content">2023.7 - 2023.10</p>
          </div>
          <div class="list_item" style="padding-bottom: 0">
            <p class="heading">摄影师</p>
            <p class="content"><span>柳生田昂仁</span></p>
          </div>
        </div>
        <hr />
        <div class="project_nav">
          <NuxtLink
            :to="nextProject ? `/cn/projects/${nextProject}` : '#'"
            class="arrow_left"
            :style="{
              opacity: nextProject ? 1 : 0.3,
              pointerEvents: nextProject ? 'auto' : 'none',
              cursor: nextProject ? 'pointer' : 'not-allowed',
            }"
            ><ArrowL
          /></NuxtLink>
          <p>项目</p>
          <NuxtLink
            :to="prevProject ? `/cn/projects/${prevProject}` : '#'"
            class="arrow_right"
            :style="{
              opacity: prevProject ? 1 : 0.3,
              pointerEvents: prevProject ? 'auto' : 'none',
              cursor: prevProject ? 'pointer' : 'not-allowed',
            }"
            ><ArrowR
          /></NuxtLink>
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
import ArrowL from "@/components/Icon/arrowL.vue";
import ArrowR from "@/components/Icon/arrowR.vue";
import { getAdjacentProjects } from "@/utils/cnProjectOrder";

export default {
  head() {
    return {
      title: "beyond coffee | mk-a",
    };
  },
  components: {
    HeaderDesktop,
    HeaderMobile,
    Footer,
    Fixed,
    ArrowL,
    ArrowR,
  },
  transition: "fade",

  data() {
    const { prev, next } = getAdjacentProjects("beyond-coffee");
    return {
      isDesktop: false,
      prevProject: prev,
      nextProject: next,
      images: [
        { src: "/projects/beyond-coffee/beyond-coffee_01.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_02.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_03.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_04.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_05.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_06.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_07.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_08.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_09.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_10.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_11.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_12.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_13.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_14.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_15.webp" },
        { src: "/projects/beyond-coffee/beyond-coffee_Plan_01.webp" },
      ],
      imagesInView: {},
      isImagesLoaded: false,
    };
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    const imageLoadPromises = this.images.map((image, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(index);
        img.src = image.src;
      });
    });

    Promise.all(imageLoadPromises).then((loadedImageIndexes) => {
      loadedImageIndexes.forEach((index) => {
        setTimeout(() => {
          const target = this.$refs[`image${index}`][0];
          const observer = new IntersectionObserver(this.handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
          });
          observer.observe(target);
        }, 0);
      });
    });
  },

  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 768;
    },

    handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
@import "~/assets/css/projects-style.css";

@media (min-width: 768px) {
  .caption span {
    font-size: 16px;
    padding-left: 4px;
  }
  .list_item {
    grid-template-columns: 48px 1fr;
  }
  span {
    font-size: 12px;
  }
  .heading,
  .content span,
  .project_nav p {
    font-size: 11px;
  }
}

@media (max-width: 767px) {
  .caption {
    padding-bottom: 2px;
  }
  span {
    font-size: 9px;
  }
  .location {
    font-size: 9px;
  }
  .list_item {
    grid-template-columns: 48px 1fr;
  }
}
</style>