<template>
  <div class="fixed-page">
    <div class="fixed-grid">
      <div>
        <div class="contact-container">
          <p class="tel">TEL</p>
          <p><span>+86 13521587563</span></p>
        </div>
        <div class="contact-container">
          <p>MAIL</p>
          <p><span>info@mk-architects.net</span></p>
        </div>
      </div>
      <div class="icon-container">
        <div class="instagramIcon">
          <a href="https://www.instagram.com/mk____architects/" target="_blank"
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
</template>

<script>
import instagramIcon from "@/components/Icon/instagramIcon.vue";
import weiboIcon from "@/components/Icon/weiboIcon.vue";

export default {
  components: {
    instagramIcon,
    weiboIcon,
  },
};
</script>

<style scoped>
.fixed-page {
  letter-spacing: 1em;
  color: #333;
}
p {
  font-size: 11px;
  letter-spacing: 0.08em;
  padding: 0;
  margin: 0;
}

.fixed-grid {
  position: fixed;
  bottom: 48px;
  left: 40px;
  display: grid;
  grid-template-columns: 172px 1fr;
}
.contact-container {
  display: grid;
  grid-template-columns: 28px 1fr;
}
span {
  font-size: 12px;
  padding-left: 8px;
}
.icon-container {
  display: flex;
  align-items: flex-end;
  font-size: 0;
}
.instagramIcon {
  padding-right: 12px;
}
</style>