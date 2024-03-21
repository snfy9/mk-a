<template>
  <div class="header_container">
    <div class="header">
      <div class="headerInner">
        <div class="logo">
          <!-- <NuxtLink to="/" class="mk-architects">mk-architects</NuxtLink> -->
          <!--[ height=30.5px]-->
          <NuxtLink to="/" class="mk-architects">
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
                    to="/"
                    :class="{
                      'nav-link': true,
                      active:
                        $route.path === '/' ||
                        $route.path.startsWith('/projects/'),
                    }"
                    >PROJECTS
                  </NuxtLink>
                </h1>
              </li>
              <li>
                <h1>
                  <NuxtLink
                    to="/about"
                    :class="{
                      'nav-link': true,
                      active: $route.path === '/about',
                    }"
                    >ABOUT
                  </NuxtLink>
                </h1>
              </li>
              <li>
                <h1>
                  <NuxtLink
                    to="/contact"
                    :class="{
                      'nav-link': true,
                      active: $route.path === '/contact',
                    }"
                    >CONTACT
                  </NuxtLink>
                </h1>
              </li>
            </ul>
          </nav>
          <nav class="languageMenu">
            <ul>
              <li class="en">EN</li>
              <li class="languageDivider">/</li>
              <li class="cn">
                <NuxtLink
                  :to="{ path: '/cn' + $route.path, query: $route.query }"
                  >CN
                </NuxtLink>
              </li>
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
.languageDivider {
  font-size: 9px;
}
/* Hover */
.mk-architects,
h1,
.cn {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.mk-architects:hover,
h1:hover,
.cn:hover {
  opacity: 0.5;
  filter: brightness(110%);
}
</style>