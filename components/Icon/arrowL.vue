<template>
  <img :src="svgPath" alt="ArrowL" width="10" height="10" />
</template>

<script>
export default {
  data() {
    return {
      svgPath: "/icon/arrowL.svg",
    };
  },
};
</script>

<style scoped>
img {
  padding-top: 3px;
}
</style>