<style src="./Accordion.scss" lang="scss" scoped></style>
<script src="./Accordion.js"></script>

<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      class="accordion-item"
      @click="setActive(index)"
    >
      <div class="title-wrapper">
        <div class="title">
          {{ item.title }}
        </div>
        <Icon :name="getDropdownIcon(index)" />
      </div>
      <div
        ref="accordionContent"
        :class="['content-wrapper']"
      >
        <div
          class="content"
          v-html="item.content"
        />
      </div>
    </div>
  </div>
</template>
