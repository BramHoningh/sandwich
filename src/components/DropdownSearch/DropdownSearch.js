import AbstractComponent from '../AbstractComponent';

export default {
  name: 'DropdownSearch',
  extends: AbstractComponent,
  props: {
    errorMessage: {
      type: String,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      items: [
        {
          label: 'Groningen',
          value: 'Groningen',
        },
        {
          label: 'Leeuwarden',
          value: 'Leeuwarden',
        },
      ],
    };
  },
  computed: {
    closeIcon() {
      return this.hasError ? 'close-error' : 'close-blended';
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    removeItem(value) {
      this.items = this.items.filter(item => item.value !== value);
      console.log(this.items);
    },
  },
};
