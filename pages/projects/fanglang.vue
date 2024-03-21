<template>
  <div class="project-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="project_container">
        <div class="title_container">
          <p class="caption">FANGLANG - Hutong Community Bar Renovation</p>
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
            <p class="content">
              <span>FANGLANG</span> - Hutong Community Bar Renovation
            </p>
          </div>
          <div class="list_item">
            <p class="heading">Project Type</p>
            <p class="content">Renovation Project</p>
          </div>
          <div class="list_item">
            <p class="heading">Location</p>
            <p class="content"><span>BEIJING, CHINA</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Client</p>
            <p class="content"><span>FANGLANG</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Site Area</p>
            <p class="content">25<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Gross Area</p>
            <p class="content">25<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Design Period</p>
            <p class="content">2022.7 - 2022.8</p>
          </div>
          <div class="list_item">
            <p class="heading">Construction Period</p>
            <p class="content">2022.8 - 2022.9</p>
          </div>
          <div class="list_item" style="padding-bottom: 0">
            <p class="heading">Photography Credit</p>
            <p class="content">Takahito Yagyuda</p>
          </div>
        </div>
        <hr />
        <div class="project_nav">
          <NuxtLink to="/projects/house-mk" class="arrow_left"
            ><ArrowL
          /></NuxtLink>
          <p>PROJECT</p>
          <NuxtLink
            to="/projects/fanglang"
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
import HeaderDesktop from "@/components/HeaderDesktop.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
import Footer from "@/components/Footer.vue";
import Fixed from "@/components/Fixed.vue";
import ArrowL from "@/components/Icon/arrowL.vue";
import ArrowR from "@/components/Icon/arrowR.vue";
export default {
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
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_01.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_02.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_03.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_04.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_05.jpg" },
        { src: "/projects/fanglang/test6.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_07.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_08.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_09.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_10.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_11.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_12.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_13.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_14.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_15.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_Plan_01.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_Plan_02.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_Plan_03.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_Plan_04.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_16.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_17.jpg" },
        { src: "/projects/fanglang/FANGLANG_Hutong-Community-Bar_18.jpg" },
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