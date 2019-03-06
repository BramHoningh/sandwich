<style src="./SecondaryButton.scss" lang="scss" scoped></style>
<script src="./SecondaryButton.js"></script>

<template>
  <a
    v-if="externalLink"
    :href="externalLink"
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['secondary-button', buttonState, {'disabled': disabled}]"
  >
    {{ text }}
  </a>

  <router-link
    v-else-if="routerLink"
    :to="routerLink"
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['secondary-button', buttonState, {'disabled': disabled}]"
  >
    {{ text }}
  </router-link>
</template>
