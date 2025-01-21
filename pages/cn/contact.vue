<template>
  <div class="contact-page">
    <div class="contents-grid">
      <div class="emptySpace"></div>
      <div class="contact">
        <div class="logo-container">
          <div class="logo_en">mk-a&nbsp;</div>
          <div class="logo_cn">川岛雅矢建筑环境设计室</div>
        </div>
        <div class="fixed-grid">
          <div>
            <div class="contact-container">
              <p class="tel">TEL</p>
              <p><span>+86 13521587563</span></p>
            </div>
            <div class="contact-container">
              <p>MAIL</p>
              <p>
                <span>info@mk-architects.net</span>
              </p>
            </div>
          </div>
          <div class="icon-container">
            <div class="instagramIcon">
              <a
                href="https://www.instagram.com/mk____architects/"
                target="_blank"
                ><instagramIcon
              /></a>
            </div>
            <div class="weiboIcon">
              <a href="https://weibo.com/u/7083865295" target="_blank"
                ><weiboIcon
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="emptySpace"></div>
      <Footer />
    </div>
    <HeaderDesktop v-if="isDesktop" />
    <HeaderMobile v-else />
  </div>
</template>

<script>
import HeaderDesktop from "@/components/cn/HeaderDesktop.vue";
import HeaderMobile from "@/components/cn/HeaderMobile.vue";
import Fixed from "@/components/Fixed.vue";
import Footer from "@/components/cn/Footer.vue";
import instagramIcon from "@/components/Icon/instagramIcon.vue";
import weiboIcon from "@/components/Icon/weiboIcon.vue";
export default {
            head() {
    return {
      title: "Contact | mk-a",
    };
  },
  components: {
    HeaderDesktop,
    HeaderMobile,
    Footer,
    Fixed,
    instagramIcon,
    weiboIcon,
  },
  data() {
    return {
      isDesktop: false,
    };
  },
  transition: "fade",
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
p,
a {
  letter-spacing: 0.08em;
  color: #333;
  padding: 0;
  margin: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  padding-bottom: 32px;
}
.logo_en {
  font-size: 15px;
  letter-spacing: 0.1em;
  color: #333;
}
.vertical-line {
  border-left: 1px solid #333;
  height: 12px;
  margin: 0 8px;
}
.logo_cn {
  font-size: 11px;
  letter-spacing: 0.06em;
  color: #333;
}

.fixed-grid {
  display: grid;
  grid-template-columns: 185px 1fr;
}
.contact-container {
  display: grid;
  grid-template-columns: 28px 1fr;
}
span {
  padding-left: 10px;
}
.icon-container {
  display: flex;
  align-items: flex-end;
  font-size: 0;
}
.instagramIcon {
  padding-right: 14px;
}

@media (min-width: 768px) {
  p,
  a {
    font-size: 12px;
  }
  .contents-grid {
    display: grid;
    grid-template-columns: 33% 1fr;
    padding-top: 184px;
    margin-bottom: 10vh;
  }
  Footer {
    padding-top: 384px;
  }
}
.instagramIcon a,
.weiboIcon a {
  display: inline-block;
}
@media (max-width: 767px) {
  p,
  a {
    font-size: 10px;
  }
  .logo_en {
    font-size: 12px;
  }
  .vertical-line {
    height: 10px;
    margin: 0 5px;
  }
  .logo_cn {
    font-size: 10px;
  }
  .contents-grid {
    margin: 0 16px;
    padding-top: 90px;
  }
  .emptySpace {
    display: none;
  }
}
</style>
