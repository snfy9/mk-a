<template>
  <div class="project-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="project_container">
        <div class="title_container">
          <p class="caption">House MK - Hutong House Renovation</p>
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
              <span>House MK</span> - Hutong House Renovation
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
            <p class="content">Masaya Kawashima</p>
          </div>
          <div class="list_item">
            <p class="heading">Site Area</p>
            <p class="content">22<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Gross Area</p>
            <p class="content">22<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Design Period</p>
            <p class="content">2023.5 - 2023.7</p>
          </div>
          <div class="list_item">
            <p class="heading">Construction Period</p>
            <p class="content">2023.7 - 2023.9</p>
          </div>
          <div class="list_item" style="padding-bottom: 0">
            <p class="heading">Photography Credit</p>
            <p class="content">Takahito Yagyuda, Masaya Kawashima</p>
          </div>
        </div>
        <hr />
        <div class="project_nav">
          <NuxtLink to="/projects/beyond-coffee" class="arrow_left"
            ><ArrowL
          /></NuxtLink>
          <p>PROJECT</p>
          <NuxtLink to="/projects/fanglang" class="arrow_right"
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
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_01.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_02.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_03.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_04.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_05.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_06.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_07.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_08.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_09.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_10.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_11.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_12.webp" },
        { src: "/projects/house-mk/House-MK_Hutong-House Renovation_13.webp" },
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