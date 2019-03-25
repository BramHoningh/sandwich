<style src="./PrimaryIconButton.scss" lang="scss" scoped></style>
<script src="./PrimaryIconButton.js"></script>

<template>
  <div
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['sw-primary-icon-button', buttonState, {'disabled': disabled}]"
  >
    <Icon
      :name="icon"
    />
  </div>
</template>
