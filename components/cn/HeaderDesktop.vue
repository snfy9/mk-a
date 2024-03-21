<template>
  <div class="header_container">
    <div class="header">
      <div class="headerInner">
        <div class="logo">
          <!-- <NuxtLink to="/cn/" class="mk-architects">mk-architects</NuxtLink> -->
          <!--[ height=30.5px]-->
          <NuxtLink to="/cn/" class="mk-architects">
            <img
              :src="svgPath"
              width="auto"
              height="40px"
              class="mk-architects_logo"
            />
          </NuxtLink>
        </div>
        <div class="menu">
          <nav class="mainMenu">
            <ul>
              <li>
                <h1>
                  <NuxtLink
                    to="/cn/"
                    :class="{
                      'nav-link': true,
                      active:
                        $route.path === '/cn/' ||
                        $route.path.startsWith('/cn/projects/'),
                    }"
                  >
                    项目
                  </NuxtLink>
                </h1>
              </li>
              <li>
                <h1>
                  <NuxtLink
                    to="/cn/about"
                    :class="{
                      'nav-link': true,
                      active: $route.path === '/cn/about',
                    }"
                  >
                    关于
                  </NuxtLink>
                </h1>
              </li>
              <li>
                <h1>
                  <NuxtLink
                    to="/cn/contact"
                    :class="{
                      'nav-link': true,
                      active: $route.path === '/cn/contact',
                    }"
                  >
                    联系
                  </NuxtLink>
                </h1>
              </li>
            </ul>
          </nav>
          <nav class="languageMenu">
            <ul>
              <li class="en">
                <NuxtLink
                  :to="{
                    path: removeLangFromPath($route.path),
                    query: { ...$route.query, lang: undefined },
                  }"
                >
                  EN
                </NuxtLink>
              </li>
              <li>/</li>
              <li class="cn">CN</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgPath: "/mk-architects.svg",
    };
  },
  methods: {
    removeLangFromPath(path) {
      return path.replace(/^\/cn\//, "/");
    },
  },
};
</script>

<style scoped>
p,
a,
ul,
h1 {
  font-size: 12px;
  letter-spacing: 0.08em;
  font-weight: 400;
  line-height: 1em;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #333;
}
.active {
  font-weight: 600;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
}
.headerInner {
  display: grid;
  grid-template-columns: 33% 1fr;
  align-items: center;
  padding: 23px 0 23px 0;
}
.logo {
  font-size: 0;
  padding-left: 40px;
}
/* 0 */
.mk-architects {
  font-size: 0;
}
/* Menu */
.menu {
  display: flex;
}
.mainMenu,
.languageMenu {
  z-index: 1;
}
.languageMenu {
  margin-left: auto;
  padding-right: 80px;
}
.languageMenu li {
  font-size: 10px;
  padding: 0;
}
.languageMenu a {
  font-size: 10px;
}
li {
  display: inline-block;
  padding-right: 7vw;
}
li:last-child {
  padding-right: 0;
}
/* Hover */
.mk-architects_logo,
h1,
.en {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.mk-architects_logo:hover,
h1:hover,
.en:hover {
  opacity: 0.5;
  filter: brightness(110%);
}
</style>