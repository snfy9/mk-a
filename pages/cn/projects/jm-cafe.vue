<template>
  <div class="project-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="project_container">
        <div class="title_container">
          <p class="caption">JM Cafe+ in Dongsi</p>
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
            <p class="content">JM Cafe+ in Dongsi</p>
          </div>
          <div class="list_item">
            <p class="heading">项目类型</p>
            <p class="content"><span>室内设计</span></p>
          </div>
          <div class="list_item">
            <p class="heading">项目地点</p>
            <p class="content"><span>北京，中国</span></p>
          </div>
          <div class="list_item">
            <p class="heading">客户</p>
            <p class="content">JM Cafe</p>
          </div>
          <div class="list_item">
            <p class="heading">用地面积</p>
            <p class="content">60<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">建筑面积</p>
            <p class="content">110<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">设计周期</p>
            <p class="content">2024.9 - 2024.11</p>
          </div>
          <div class="list_item">
            <p class="heading">施工周期</p>
            <p class="content">2024.11 - 2025.1</p>
          </div>
          <div class="list_item" style="padding-bottom: 0">
            <p class="heading">摄影师</p>
            <p class="content"><span>张哲鹏</span></p>
          </div>
        </div>
        <hr />
        <div class="project_nav">
          <NuxtLink to="/cn/projects/booths" class="arrow_left"
            ><ArrowL
          /></NuxtLink>
          <p>项目</p>
          <NuxtLink
            to="/cn/projects/jm-cafe"
            class="arrow_right"
            style="opacity: 0.3"
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
    return {
      isDesktop: false,
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
    font-size: 11px;
  }
  .location {
    font-size: 9px;
  }
  .list_item {
    grid-template-columns: 48px 1fr;
  }
}
</style>