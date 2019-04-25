<style src="./DropdownSearch.scss" lang="scss" scoped></style>
<script src="./DropdownSearch.js"></script>

<template>
  <div class="dropdown-search">
    <div
      :style="{'border-radius': borderRadius}"
      :class="['dropdown-search-field', {'active': isOpen}, {'has-error': hasError}]"
      @click="toggleDropdown"
    >
      <div
        class="dropdown-arrow-wrapper"
      >
        <div class="dropdown-arrow">
          <Icon
            :name="dropdownIcon"
          />
        </div>
      </div>

      <div class="dropdown-search-field-inner">
        <div
          v-for="(item, index) in activeItems"
          :key="index"
          class="dropdown-search-field-item"
        >
          <span class="item-name">
            {{ item.title }}
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

    <div
      v-if="isOpen"
      class="search-dropdown"
    >
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="[{'active': isActiveItem(item)}]"
          @click="toggleActiveItems(item)"
        >
          <Icon class="active-icon" name="read"/>
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
