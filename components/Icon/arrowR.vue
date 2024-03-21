<template>
  <img :src="svgPath" alt="ArrowR" width="10" height="10" />
</template>

<script>
export default {
  data() {
    return {
      svgPath: "/icon/arrowR.svg",
    };
  },
};
</script>

<style scoped>
img {
  padding-top: 3px;
}
</style>