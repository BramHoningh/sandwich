<style src="./RadioInput.scss" lang="scss" scoped></style>
<script src="./RadioInput.js"></script>

<template>
  <div class="sw-radio-input">
    <div
      v-for="(item, index) in items"
      :key="index"
      :style="{'display': display}"
      class="sw-input-wrapper sw-input-wrapper-radio"
    >
      <label
        :for="item.id"
        :style="{'border-radius': borderRadius}"
        :class="['sw-wrapper-label', {'selected': radioInput === item.value}]"
      >
        <input
          :id="item.id"
          v-model="radioInput"
          :value="item.value"
          :name="name"
          type="radio"
          @input="handleInput"
        >

        <span class="sw-input-label">
          {{ item.label }}
        </span>
      </label>
    </div>
  </div>
</template>
