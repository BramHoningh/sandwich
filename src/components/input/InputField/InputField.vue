<style src="./InputField.scss" lang="scss" scoped></style>
<script src="./InputField.js"></script>

<template>
  <div class="sw-input-wrapper">
    <div class="sw-input-label">{{ label }}</div>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :style="{'border-radius': borderRadius}"
      :class="['sw-input-field', {'sw-input-field-error': hasError}]"
      @input="handleInput"
    >
    <div v-if="hasError" class="sw-input-error-wrapper">
      <Icon name="error" />
      <div class="sw-error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>
