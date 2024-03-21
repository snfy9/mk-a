<template>
  <div>
    <img :src="svgPath" alt="InstagramIcon" width="13" height="13" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgPath: "/icon/instagram.svg",
    };
  },
};
</script>