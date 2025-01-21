<template>
  <div class="credits_privacy-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="credits_privacy_container">
        <div class="credits">
          <div class="title">
            <h1>版权声明</h1>
          </div>
          <div>
            <p class="custom_padding">
              此网站上的所有图片均属于<span>mk-a</span>，拥有所有版权。这些图片仅用于信息提供，不得在任何情况下由第三方使用。
            </p>
            <p><span>mk-a All Rights Reserved.</span></p>
          </div>
        </div>
        <div class="privacy">
          <div class="title">
            <h1>隐私政策</h1>
          </div>
          <div>
            <p class="custom_padding">
              <span>mk-a</span>尊重访客的隐私权，并根据以下隐私政策运营本网站
            </p>
            <p><span>1.</span> 信息收集和使用</p>
            <p class="custom_padding">
              本网站不会收集访客的个人信息。然而，对于特定服务，如查询等，我们可能会收集必要的信息。任何收集到的信息将仅用于声明的目的。
            </p>
            <p><span>2.</span> 与第三方分享</p>
            <p class="custom_padding">
              <span>mk-a</span>不会与第三方分享收集到的个人信息，除非法律要求。
            </p>
            <p><span>3.</span> 使用<span>Cookies</span></p>
            <p class="custom_padding">
              本网站可能使用<span>Cookies</span>来分析访客的使用模式并改善网站。<span>Cookies</span>收集的信息是匿名的，不会识别个人。
            </p>
            <p>此隐私政策可能会有变更。</p>
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
      title: "Credits and Privacy | mk-a",
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
.credits_privacy-page {
  letter-spacing: 1;
}
.credits_link {
  font-size: 0;
}
p,
a {
  letter-spacing: 0.06em;
  color: #333;
  text-decoration: none;
  padding: 0;
  margin: 0;
}
h1 {
  letter-spacing: 0.08em;
  font-weight: 500;
  padding-bottom: 24px;
  margin: 0;
}
span {
  font-size: 12px;
  letter-spacing: 0.05em;
}
.credits {
  padding-bottom: 72px;
}
.custom_padding {
  padding-bottom: 10px;
}

@media (min-width: 768px) {
  p,
  a,
  h1 {
    font-size: 11px;
  }

  .contents_grid {
    display: grid;
    grid-template-columns: 33% 1fr;
    padding-top: 184px;
  }
  .credits_privacy_container {
    width: 66%;
  }
}

@media (max-width: 767px) {
  p,
  a,
  h1 {
    font-size: 10px;
  }
  .contents_grid {
    padding-top: 100px;
    margin: 0 16px;
  }
  h1 {
    padding-bottom: 20px;
  }
  .credits {
    padding-bottom: 56px;
  }
  .emptySpace {
    display: none;
  }
}
</style>