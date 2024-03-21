<template>
  <div>
    <LogoPage v-if="showLogo" />
    <IndexPage v-else />
  </div>
</template>

<script>
import LogoPage from "@/components/LogoPage.vue";
import IndexPage from "@/components/IndexPage.vue";

export default {
  components: {
    LogoPage,
    IndexPage,
  },
  transition: "fade",

  data() {
    return {
      showLogo: true,
    };
  },

  mounted() {
    this.handleFade();
  },

  methods: {
    handleFade() {
      const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore");

      if (!hasVisitedBefore) {
        sessionStorage.setItem("hasVisitedBefore", "true");
        setTimeout(() => {
          this.showLogo = false;
        }, 4000);
      } else {
        this.showLogo = false;
      }
    },
  },
};
</script>
