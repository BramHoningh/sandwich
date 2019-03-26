<style src="./DropdownSearch.scss" lang="scss" scoped></style>
<script src="./DropdownSearch.js"></script>

<template>
  <div class="dropdown-search">
    <div
      :style="{'border-radius': borderRadius}"
      :class="['dropdown-search-field', {'has-error': hasError}]"
      @click="toggleDropdown"
    >
      <div class="dropdown-arrow-wrapper">
        <div class="dropdown-arrow">
          <Icon
            name="dropdown"
          />
        </div>
      </div>

      <div class="dropdown-search-field-inner">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="dropdown-search-field-item"
        >
          <span class="item-name">
            {{ item.label }}
            <span
              class="close-item"
              @click="removeItem(item.value)"
            >
              <Icon
                :name="closeIcon"
                class="icon-in"
              />
            </span>
          </span>
        </div>

        <div class="spacing-right" />
      </div>
    </div>
    <div
      v-if="hasError"
      class="sw-input-error-wrapper"
    >
      <Icon name="error" />
      <div class="sw-error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>
