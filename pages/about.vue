<template>
  <div class="about-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="about_container">
        <div class="image-container">
          <img src="/masayakawashima.jpg" alt="Profile Image" />
        </div>
        <div class="text-container">
          <div class="name-container">
            <div class="name_en">Masaya Kawashima</div>
            <div class="name_cn">川岛 雅矢</div>
          </div>
          <div class="bio_info">
            <p class="bio">FOUNDER, PRINCIPAL ARCHITECT</p>
            <div class="list_item">
              <p class="year">1995</p>
              <p>Born in Niigata, JAPAN</p>
            </div>
            <div class="list_item">
              <p class="year">2018</p>
              <p>Nagaoka Institute of Design</p>
            </div>
            <div class="list_item">
              <p class="year"></p>
              <p>
                Architecture &amp; Environmental Design / Prof.Yamashita Lab.
              </p>
            </div>
            <div class="list_item">
              <p class="year">2018</p>
              <p>Registered 2nd-Class Architect, JAPAN</p>
            </div>
            <div class="list_item">
              <p class="year">2018 -</p>
              <p>B.L.U.E. Architecture Studio</p>
            </div>
            <div class="list_item" style="padding-bottom: 0">
              <p class="year">2024 -</p>
              <p>Established mk-architects</p>
            </div>
          </div>
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
    };
  },
  transition: "fade",
  mounted() {
    this.handleResize(); // 初回実行
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
.image-container {
  font-size: 0;
}

.about-page {
  letter-spacing: 1em;
}

p,
a {
  letter-spacing: 0.06em;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #333;
}

.name-container {
  display: flex;
  align-items: center;
}
.name_en {
  letter-spacing: 0.04em;
  padding-right: 14px;
  color: #333;
}
.name_cn {
  letter-spacing: 0.06em;
  color: #333;
}
.bio {
  letter-spacing: 0.08em;
  padding-bottom: 8px;
}
.list_item {
  display: grid;
  grid-template-columns: 40px 1fr;
  padding-bottom: 1px;
}

@media (min-width: 768px) {
  p,
  a {
    font-size: 12px;
  }
  .name_en {
    font-size: 14px;
  }
  .name_cn {
    font-size: 11px;
  }
  .contents_grid {
    display: grid;
    grid-template-columns: 33% 1fr;
    padding-top: 184px;
  }
  .about_container {
    display: grid;
    grid-template-columns: 50% 1fr;
    margin-right: 80px;
  }
  .image-container {
    padding-top: 42px;
    order: 2;
  }
  .text-container {
    padding-right: 24px;
    order: 1;
  }
  img {
    width: 80%;
  }
  .bio_info {
    padding-top: 24px;
  }
}

@media (max-width: 767px) {
  p,
  a {
    font-size: 10px;
  }
  .name_en {
    font-size: 12px;
  }
  .name_cn {
    font-size: 10px;
  }
  .contents_grid {
    padding-top: 90px;
    margin: 0 16px;
  }
  .text-container {
    padding-top: 16px;
  }
  img {
    width: 100%;
  }
  .bio_info {
    padding-top: 24px;
  }
  .emptySpace {
    display: none;
  }
}
</style>
