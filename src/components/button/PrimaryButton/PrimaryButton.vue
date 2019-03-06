<style src="./PrimaryButton.scss" lang="scss" scoped></style>
<script src="./PrimaryButton.js"></script>

<template>
  <a v-if="externalLink"
     :href="externalLink"
     class="button button-primary"
  >
    {{ text }}
  </a>

  <router-link v-else-if="routerLink"
               :to="routerLink"
               class="button button-primary"
  >
    {{ text }}
  </router-link>
</template>
