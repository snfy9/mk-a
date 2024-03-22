<template>
  <div class="project-page">
    <div class="contents_grid">
      <div class="emptySpace"></div>
      <div class="project_container">
        <div class="title_container">
          <p class="caption">FANGLANG - Hutong Community Bar Renovation</p>
          <p class="location">BEIJING, CHINA</p>
        </div>
        <div class="project">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            alt="Image"
            class="fade-in"
            :ref="`image${index}`"
            :class="{ 'no-padding': index === images.length - 1 }"
          />
        </div>
        <div class="project_info">
          <div class="list_item">
            <p class="heading">Project Name</p>
            <p class="content">
              <span>House MK</span> - Hutong House Renovation
            </p>
          </div>
          <div class="list_item">
            <p class="heading">Project Type</p>
            <p class="content">Renovation Project</p>
          </div>
          <div class="list_item">
            <p class="heading">Location</p>
            <p class="content"><span>BEIJING, CHINA</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Client</p>
            <p class="content">Masaya Kawashima</p>
          </div>
          <div class="list_item">
            <p class="heading">Site Area</p>
            <p class="content">22<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Gross Area</p>
            <p class="content">22<span>㎡</span></p>
          </div>
          <div class="list_item">
            <p class="heading">Design Period</p>
            <p class="content">2023.5 - 2023.7</p>
          </div>
          <div class="list_item">
            <p class="heading">Construction Period</p>
            <p class="content">2023.7 - 2023.9</p>
          </div>
          <div class="list_item" style="padding-bottom: 0">
            <p class="heading">Photography Credit</p>
            <p class="content">Takahito Yagyuda, Masaya Kawashima</p>
          </div>
        </div>
        <hr />
        <div class="project_nav">
          <NuxtLink to="/projects/beyond-coffee" class="arrow_left"
            ><ArrowL
          /></NuxtLink>
          <p>PROJECT</p>
          <NuxtLink to="/projects/fanglang" class="arrow_right"
            ><ArrowR
          /></NuxtLink>
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
