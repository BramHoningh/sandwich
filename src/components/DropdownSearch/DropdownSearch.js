import AbstractComponent from '../AbstractComponent';

export default {
  name: 'DropdownSearch',
  extends: AbstractComponent,
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
