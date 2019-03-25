<style src="./TertiaryButton.scss" lang="scss" scoped></style>
<script src="./TertiaryButton.js"></script>

<template>
  <a
    v-if="externalLink"
    :href="externalLink"
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['sw-tertiary-button', buttonState, {'disabled': disabled}]"
  >
    {{ text }}
  </a>

  <router-link
    v-else-if="routerLink"
    :to="routerLink"
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['sw-tertiary-button', buttonState, {'disabled': disabled}]"
  >
    {{ text }}
  </router-link>
</template>
