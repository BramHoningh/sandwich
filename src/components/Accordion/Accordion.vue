<style src="./Accordion.scss" lang="scss" scoped></style>
<script src="./Accordion.js"></script>

<template>
  <div class="sw-accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="sw-accordion-item"
      @click="item.href ? () => {} : setActive(index)"
    >
      <div class="sw-title-wrapper">
        <div class="sw-title">
          <a
            v-if="item.href"
            :href="item.href">
            {{ item.title }}
          </a>

          <span v-else>
            {{ item.title }}
          </span>
        </div>
        <Icon
          v-if="item.content || (item.subItems && item.subItems.length)"
          :name="getDropdownIcon(index)"
        />
      </div>
      <div
        v-if="item.subItems && item.subItems.length"
        ref="accordionContent"
        :class="['sw-content-wrapper']"
      >
        <div
          v-for="(subItem, index) in item.subItems"
          :key="index"
          class="sw-content"
        >
          <a :href="subItem.href">{{ subItem.title }}</a>
        </div>
      </div>

      <div
        v-else
        ref="accordionContent"
        :class="['sw-content-wrapper']"
      >
        <div
          v-if="item.content"
          class="sw-content"
          v-html="item.content"
        />
      </div>
    </div>
  </div>
  </div>
</template>
