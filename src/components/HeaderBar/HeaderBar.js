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
