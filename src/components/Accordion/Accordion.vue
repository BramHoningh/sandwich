<style src="./Accordion.scss" lang="scss" scoped></style>
<script src="./Accordion.js"></script>

<template>
  <div class="sw-accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="sw-accordion-item"
      @click="setActive(index)"
    >
      <div class="sw-title-wrapper">
        <div class="sw-title">
          {{ item.title }}
        </div>
        <Icon :name="getDropdownIcon(index)" />
      </div>
      <div
        ref="accordionContent"
        :class="['sw-content-wrapper']"
      >
        <div
          class="sw-content"
          v-html="item.content"
        />
      </div>
    </div>
  </div>
</template>
