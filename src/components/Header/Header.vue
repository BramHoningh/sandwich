<style src="./Header.scss" lang="scss" scoped></style>
<script src="./Header.js"></script>

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
  </div>
</template>
