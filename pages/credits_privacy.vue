<template>
  <div class="credits_privacy-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="credits_privacy_container">
        <div class="credits">
          <div class="title">
            <h1>CREDITS</h1>
          </div>
          <div>
            <p class="custom_padding">
              All images on this website belong to mk-a, owner of all the
              copyrights. These images are presented for informative purposes
              only and may not be used by a third party under any circumstances.
            </p>
            <p>mk-a All Rights Reserved.</p>
          </div>
        </div>
        <div class="privacy">
          <div class="title">
            <h1>PRIVACY</h1>
          </div>
          <div>
            <p class="custom_padding">
              mk-a respects the privacy of visitors and operates this website
              based on the following privacy policy:
            </p>
            <p>1. Information Collection and Use</p>
            <p class="custom_padding">
              This website does not collect personal information from visitors.
              However, for specific services such as inquiries, we may collect
              necessary information. Any collected information will only be used
              for the stated purposes.
            </p>
            <p>2. Sharing with Third Parties</p>
            <p class="custom_padding">
              mk-a does not share collected personal information with third
              parties, except as required by law.
            </p>
            <p>3. Use of Cookies</p>
            <p class="custom_padding">
              This website may use cookies to analyze visitor usage patterns and
              improve the site. The information collected by cookies is
              anonymous and does not identify individuals.
            </p>
            <p>This privacy policy may be subject to changes.</p>
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
  transition: "fade",

  data() {
    return {
      isDesktop: false,
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
.credits_privacy-page {
  letter-spacing: 1;
}
.credits_link {
  font-size: 0;
}

p,
a {
  line-height: 1.2em;
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
    font-size: 12px;
  }

  .contents_grid {
    display: grid;
    grid-template-columns: 33% 1fr;
    padding-top: 184px;
  }
  .credits_privacy_container {
    width: 66%;
  }
  .credits_link {
    letter-spacing: 0.08em;
    padding-bottom: 1px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .credits_link:hover {
    opacity: 0.5;
    filter: brightness(110%);
  }
}

@media (max-width: 767px) {
  p,
  a,
  h1 {
    font-size: 11px;
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