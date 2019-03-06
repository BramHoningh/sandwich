<style src="./SecondaryIconButton.scss" lang="scss" scoped></style>
<script src="./SecondaryIconButton.js"></script>

<template>
  <div
    :style="{'border-radius': borderRadius, 'display': display}"
    :class="['secondary-icon-button', buttonState, {'disabled': disabled}]"
  >
    <Icon
      :name="icon"
    />
  </div>
</template>
