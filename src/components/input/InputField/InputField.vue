<style src="./InputField.scss" lang="scss" scoped></style>
<script src="./InputField.js"></script>

<template>
  <div class="input-wrapper">
    <div class="input-label">{{ label }}</div>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :style="{'border-radius': borderRadius}"
      :class="['input-field', {'input-field-error': hasError}]"
      @input="handleInput"
    >
    <div v-if="hasError" class="input-error-wrapper">
      <Icon name="error" />
      <div class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>
