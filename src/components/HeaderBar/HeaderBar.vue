<style src="./HeaderBar.scss" lang="scss" scoped></style>
<script src="./HeaderBar.js"></script>

<template>
  <div class="sw-header">
    <div class="sw-header-logo sw-mobile-only">
      <Icon
        :name="mobileLogo"
      />
    </div>
    <div class="sw-header-logo sw-desktop-only">
      <Icon
        :name="desktopLogo"
      />
    </div>

    <div
      :class="['sw-header-icon', 'sw-mobile-only', {'active': menuOpen}]"
      @click="toggleMenu"
    />

    <div class="sw-desktop-items sw-desktop-only" />
  </div>
</template>
