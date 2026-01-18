<template>
  <div class="project-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="project_container">
        <div class="title_container">
          <p class="caption">JM Cafe+ in Dongsi</p>
          <p class="location">BEIJING, CHINA</p>
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
            <p class="heading">Project Name</p>
            <p class="content">JM Cafe+ in Dongsi</p>
          </div>
          <div class="list_item">
            <p class="heading">Project Type</p>
            <p class="content">Interior</p>
          </div>
          <div class="list_item">
            <p class="heading">Location</p>
            <p class="content"><span>BEIJING, CHINA</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Client</p>
            <p class="content"><span>JM Cafe</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Site Area</p>
            <p class="content">60<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Gross Area</p>
            <p class="content">110<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Design Period</p>
            <p class="content">2024.9 - 2024.11</p>
          </div>
          <div class="list_item">
            <p class="heading">Construction Period</p>
            <p class="content">2024.11 - 2025.1</p>
          </div>
          <div class="list_item" style="padding-bottom: 0">
            <p class="heading">Photography Credit</p>
            <p class="content">Zhe peng Zhang, Wei Qin</p>
          </div>
        </div>
        <hr />
        <div class="project_nav">
          <NuxtLink
            :to="nextProject ? `/projects/${nextProject}` : '#'"
            class="arrow_left"
            :style="{
              opacity: nextProject ? 1 : 0.3,
              pointerEvents: nextProject ? 'auto' : 'none',
              cursor: nextProject ? 'pointer' : 'not-allowed',
            }"
            ><ArrowL
          /></NuxtLink>
          <p>PROJECT</p>
          <NuxtLink
            :to="prevProject ? `/projects/${prevProject}` : '#'"
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
import HeaderDesktop from "@/components/HeaderDesktop.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
import Footer from "@/components/Footer.vue";
import Fixed from "@/components/Fixed.vue";
import ArrowL from "@/components/Icon/arrowL.vue";
import ArrowR from "@/components/Icon/arrowR.vue";
import { getAdjacentProjects } from "@/utils/projectOrder";

export default {
  head() {
    return {
      title: "JM Cafe+ in Dongsi | mk-a",
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
    const { prev, next } = getAdjacentProjects("jm-cafe");
    return {
      isDesktop: false,
      prevProject: prev,
      nextProject: next,
      images: [
        { src: "/projects/jm-cafe/jm-cafe_01.webp" },
        { src: "/projects/jm-cafe/jm-cafe_02.webp" },
        { src: "/projects/jm-cafe/jm-cafe_03.webp" },
        { src: "/projects/jm-cafe/jm-cafe_04.webp" },
        { src: "/projects/jm-cafe/jm-cafe_05.webp" },
        { src: "/projects/jm-cafe/jm-cafe_06.webp" },
        { src: "/projects/jm-cafe/jm-cafe_07.webp" },
        { src: "/projects/jm-cafe/jm-cafe_08.webp" },
        { src: "/projects/jm-cafe/jm-cafe_09.webp" },
        { src: "/projects/jm-cafe/jm-cafe_10.webp" },
        { src: "/projects/jm-cafe/jm-cafe_11.webp" },
        { src: "/projects/jm-cafe/jm-cafe_12.webp" },
        { src: "/projects/jm-cafe/jm-cafe_13.webp" },
        { src: "/projects/jm-cafe/jm-cafe_14.webp" },
        { src: "/projects/jm-cafe/jm-cafe_15.webp" },
        { src: "/projects/jm-cafe/jm-cafe_16.webp" },
        { src: "/projects/jm-cafe/jm-cafe_17.webp" },
      ],
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
</style>