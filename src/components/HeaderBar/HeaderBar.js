export default {
  name: 'HeaderBar',
  props: {
    mobileLogo: {
      type: String,
      default: 'vue',
    },
    desktopLogo: {
      type: String,
      default: 'logo-sandwich',
    },
    desktopItems: {
      type: Array,
    },
    mobileItems: {
      type: Array,
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
