<template>
  <div class="about-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="about_container">
        <div class="image_container">
          <img src="/about.webp" alt="Profile Image" />
        </div>
        <div class="text_container">
          <div class="name-container">
            <div class="name_en">Masaya Kawashima</div>
            <div class="name_cn">川岛 雅矢</div>
          </div>
          <div class="bio_info">
            <p class="bio">创始人, 主持建筑师</p>
            <div class="list_item">
              <p class="year">1995</p>
              <p>生于日本新泻县</p>
            </div>
            <div class="list_item">
              <p class="year">2018</p>
              <p>长冈造形大学</p>
            </div>
            <div class="list_item">
              <p class="year"></p>
              <p>建筑・环境设计学科 毕业 / 山下研究室</p>
            </div>
            <div class="list_item">
              <p class="year">2018</p>
              <p>二级注册建筑师, 日本</p>
            </div>
            <div class="list_item">
              <p class="year">2018 -</p>
              <p><span>B.L.U.E.</span>建筑设计事务所</p>
            </div>
            <div class="list_item">
              <p class="year">2024 -</p>
              <p>川岛雅矢建筑环境设计室</p>
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
import HeaderDesktop from "@/components/cn/HeaderDesktop.vue";
import HeaderMobile from "@/components/cn/HeaderMobile.vue";
import Footer from "@/components/cn/Footer.vue";
import Fixed from "@/components/Fixed.vue";

export default {
          head() {
    return {
      title: "About | mk-a",
    };
  },
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
.image_container {
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
  padding-bottom: 9px;
}
.list_item {
  display: grid;
  grid-template-columns: 40px 1fr;
  padding-bottom: 1px;
}

@media (min-width: 768px) {
  p,
  a {
    font-size: 11px;
  }
  .name_en {
    font-size: 14px;
  }
  .name_cn {
    font-size: 11px;
  }
  .year,
  span {
    font-size: 12px;
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
  .image_container {
    padding-top: 42px;
    order: 2;
  }
  .text_container {
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
  .text_container {
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
