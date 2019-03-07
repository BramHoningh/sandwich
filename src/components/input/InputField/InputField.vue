<style src="./InputField.scss" lang="scss" scoped></style>
<script src="./InputField.js"></script>

<template>
  <div class="input-wrapper">
    <div class="input-label">{{ label }}</div>
    <input
      :type="type"
      :style="{'border-radius': borderRadius}"
      class="input-field"
    >
    <div class="input-error-wrapper">
      <Icon name="vue" />
      <div class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>
