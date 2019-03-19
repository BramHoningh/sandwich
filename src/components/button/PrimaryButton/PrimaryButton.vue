<style src="./PrimaryButton.scss" lang="scss" scoped></style>
<script src="./PrimaryButton.js"></script>

<template>
  <a
    v-if="externalLink"
    :href="externalLink"
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['sw-primary-button', buttonState, {'disabled': disabled}]"
  >
    {{ text }}
  </a>

  <router-link
    v-else-if="routerLink"
    :to="routerLink"
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['sw-primary-button', buttonState, {'disabled': disabled}]"
  >
    {{ text }}
  </router-link>
</template>
