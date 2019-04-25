import AbstractComponent from '../AbstractComponent';

export default {
  name: 'DropdownSearch',
  extends: AbstractComponent,
  props: {
    items: {
      type: Array,
      required: true,
    },
    errorMessage: {
      type: String,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    maxPick: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isOpen: false,
      activeItems: [],
    };
  },
  computed: {
    dropdownIcon() {
      return this.isOpen ? 'dropdown-close' : 'dropdown';
    },
    closeIcon() {
      return this.hasError ? 'close-error' : 'close-blended';
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleActiveItems(item) {
      let itemFound = false;
      this.activeItems.forEach(activeItem => {
        if (activeItem.value === item.value) {
          itemFound = true;
        }
      });
      if (itemFound) {
        this.activeItems = this.activeItems.filter(activeItem => activeItem.value !== item.value);
      } else if (this.activeItems.length < this.maxPick || this.maxPick === 0) {
        this.activeItems.push(item);
      }
    },
    isActiveItem(item) {
      return this.activeItems.filter(activeItem => activeItem.value === item.value).length > 0;
    },
    removeItem(value) {
      this.activeItems = this.activeItems.filter(item => item.value !== value);
    },
  },
};
