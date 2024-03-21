<template>
  <div>
    <img :src="svgPath" alt="WeiboIcon" width="13" height="13" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgPath: "/icon/weibo.svg",
    };
  },
};
</script>