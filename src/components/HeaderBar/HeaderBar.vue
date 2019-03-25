<style src="./HeaderBar.scss" lang="scss" scoped></style>
<script src="./HeaderBar.js"></script>

<template>
  <div
    v-body-scroll-lock="menuOpen"
    class="sw-header-wrapper"
    style="position: fixed; top: 0; left: 0; width: 100%; z-index: 999;"
  >
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
        class="sw-header-icon-wrapper"
        @click="toggleMenu"
      >
        <div
          :class="['sw-header-icon', 'sw-mobile-only', {'active': menuOpen}]"
        />
      </div>

      <div class="sw-desktop-items sw-desktop-only">
        <div
          v-for="(item, index) in desktopItems"
          :key="index"
          class="sw-desktop-item"
        >
          <PrimaryButton
            v-if="item.type === 'primary-button'"
            :text="item.title"
            :external-link="item.href || '#'"
          />

          <SecondaryButton
            v-else-if="item.type === 'secondary-button'"
            :text="item.title"
            :external-link="item.href || '#'"
          />

          <a
            v-else
            :href="item.href || '#'"
            class="sw-desktop-item-link"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <div :class="['sw-mobile-items', 'sw-mobile-only', {'active': menuOpen}]">
      <Accordion
        :items="mobileItems"
      />
    </div>
  </div>
</template>
