<template>
  <div class="fade-in-out_logo">
    <img :src="svgPath" class="mk-architects_logo" />
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
@keyframes fade-in-out {
  0%,
  10% {
    opacity: 0;
  }
  30%,
  70% {
    opacity: 1;
  }
  80%,
  99.9% {
    opacity: 0;
  }
}
.fade-in-out_logo {
  animation: fade-in-out 4.2s ease-in-out;
  overflow: hidden;
  perspective: 1000;
}
.mk-architects_logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
img {
  width: 260px;
  height: auto;
  margin: 0 auto;
  text-align: center;
}
@media (max-width: 767px) {
  img {
    width: 220px;
  }
}
</style>
