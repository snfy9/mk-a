<template>
  <footer>
    <div class="credits-link">
      <NuxtLink to="/cn/credits_privacy">版权声明 / 隐私政策</NuxtLink>
    </div>
    <div><p>mk-a All Rights Reserved.</p></div>
  </footer>
</template>

<style scoped>
.credits-link {
  font-size: 0;
}

p,
a {
  letter-spacing: 0.08em;
  color: #333;
  padding: 0;
  margin: 0;
}
footer a {
  text-decoration: none;
}
footer p {
  letter-spacing: 0.06em;
}

@media (min-width: 768px) {
  footer a {
    font-size: 10px;
  }
  footer p {
    font-size: 12px;
  }
  footer {
    padding: 160px 0 48px 0;
  }
  .credits-link {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .credits-link:hover {
    opacity: 0.5;
    filter: brightness(110%);
  }
}

@media (max-width: 767px) {
  footer a {
    font-size: 9px;
  }
  footer p {
    font-size: 10px;
  }
  footer {
    padding: 100px 0 48px 0;
  }
}
</style>