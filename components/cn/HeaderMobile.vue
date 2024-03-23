<template>
  <div class="header_container">
    <div class="header">
      <div class="headerInner">
        <div class="logo">
          <NuxtLink to="/cn/" class="mk-architects">
            <img
              :src="svgPath"
              width="auto"
              height="32px"
              class="mk-architects_logo"
            />
          </NuxtLink>
        </div>
        <div class="hamburgerMenu_container">
          <button @click="toggleMenu" :class="{ active: isMenuOpen }">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isMenuOpen" class="menu_container" @click="toggleMenu">
        <div class="menuInner">
          <nav class="mainMenu">
            <ul>
              <li>
                <NuxtLink
                  to="/cn/"
                  :class="{
                    'nav-link': true,
                    active:
                      this.$route.path === '/cn/' ||
                      this.$route.path.startsWith('/cn/projects/'),
                  }"
                  >项目
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/cn/about"
                  :class="{
                    'nav-link': true,
                    active: this.$route.path === '/cn/about',
                  }"
                  >关于
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/cn/contact"
                  :class="{
                    'nav-link': true,
                    active: this.$route.path === '/cn/contact',
                  }"
                  >联系
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <nav class="languageMenu">
            <ul>
              <li>
                <NuxtLink
                  :to="{
                    path: removeLangFromPath($route.path),
                    query: { ...$route.query, lang: undefined },
                  }"
                  class="en"
                  >EN
                </NuxtLink>
              </li>
              <li class="languageDivider">/</li>
              <li class="cn">CN</li>
            </ul>
          </nav>
          <div class="footer_grid">
            <footer>
              <div class="contact_container_tel">
                <p>TEL</p>
                <p><span>+86 13521587563</span></p>
              </div>
              <div class="contact_container_mail">
                <p>MAIL</p>
                <p><span>info@mk-architects.net</span></p>
              </div>
            </footer>
            <div class="icon_container">
              <div class="instagramIcon">
                <a href="https://www.instagram.com/mk____architects/"
                  ><instagramIcon
                /></a>
              </div>
              <div class="weiboIcon">
                <a href="https://weibo.com/u/7083865295"><weiboIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
  data() {
    return {
      svgPath: "/mk-architects.svg",
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    removeLangFromPath(path) {
      return path.replace(/^\/cn\//, "/");
    },
  },
};
</script>

<style scoped>
.header_container {
  line-height: 1;
}
p,
a {
  font-size: 11px;
  letter-spacing: 0.08em;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #333;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
}
.headerInner {
  display: flex;
  align-items: center;
  padding: 26px 16px 20px 16px;
}
/* 0 */
.logo,
.mk-architects {
  font-size: 0;
}
/* Hamburger */
.hamburgerMenu_container {
  position: fixed;
  right: 16px;
  margin-left: auto;
}
/* Mein Menu */
.menu_container {
  position: fixed;
  top: 78px; /* ヘッダーのHeightで変わる*/
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: top 1s;
}
.menuInner {
  padding: 16px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.mainMenu li {
  width: 50%;
  max-width: 100%;
  padding-bottom: 16px;
}
.mainMenu li:nth-child(3) {
  padding-bottom: 0;
}
.mainMenu li a {
  display: block;
  width: 100%;
  height: 100%;
}
/* Language Menu*/
.languageMenu {
  padding: 100px 0 32px 0;
}
.languageMenu ul {
  display: flex;
  align-items: center;
}
.languageDivider {
  padding: 0 6px;
}
.en,
.cn,
.languageDivider {
  font-size: 11px;
  letter-spacing: 0.08em;
  display: flex;
}
.en {
  color: #a1a1a1;
}
.footer_grid {
  display: grid;
  grid-template-columns: 180px 1fr;
}
.contact_container_tel {
  display: grid;
  grid-template-columns: 25px 1fr;
  padding-bottom: 2px;
}
.contact_container_mail {
  display: grid;
  grid-template-columns: 25px 1fr;
}
footer a,
footer p {
  font-size: 11px;
  letter-spacing: 0.07em;
  padding: 0;
  margin: 0;
}
span {
  padding-left: 10px;
}
.icon_container {
  display: flex;
  text-align: center;
  align-items: flex-end;
}
.instagramIcon {
  padding-right: 16px;
}
/* Button */
button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.bar1,
.bar2,
.bar3 {
  width: 20px;
  height: 1.5px;
  background: #333;
  margin-bottom: 5px;
  transition: transform 0.5s, opacity 0.5s;
}
.bar3 {
  margin-bottom: 0;
}
/* Button_close */
button.active .bar1 {
  transform: translateY(7px) rotate(-45deg);
}
button.active .bar2 {
  opacity: 0;
}
button.active .bar3 {
  transform: translateY(-6px) rotate(45deg);
}
/* Button_open */
body.menu-open {
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* SP */
@media (max-width: 375px) {
  .contact_container {
    padding-bottom: 6px;
  }
}
</style>
