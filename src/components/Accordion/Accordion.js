import AbstractComponent from '../AbstractComponent';

export default {
  name: 'Accordion',
  extends: AbstractComponent,
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeItem: -1,
    };
  },
  methods: {
    setActive(index) {
      if (this.activeItem === index) {
        this.activeItem = -1;
        this.collapseSection(index);
      } else if (this.activeItem > -1) {
        this.collapseSection(this.activeItem);
        this.expandSection(index);
        this.activeItem = index;
      } else {
        this.expandSection(index);
        this.activeItem = index;
      }
    },
    collapseSection(index) {
      this.$refs.accordionContent[index].style.height = 0 + 'px';
    },
    expandSection(index) {
      this.$refs.accordionContent[index].style.height =
        this.$refs.accordionContent[index].scrollHeight + 'px';
    },
    getDropdownIcon(index) {
      if (this.activeItem === index) {
        return 'dropdown-close';
      }
      return 'dropdown';
    },
  },
};
