import AbstractComponent from '../AbstractComponent';

export default {
  name: 'AbstractButton',
  extends: AbstractComponent,
  props: {
    text: {
      type: String,
    },
    state: {
      type: String,
      default: null,
    },
    display: {
      type: String,
      default: 'inline-block',
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    externalLink: {
      type: String,
      default: null,
    },
    routerLink: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonState() {
      if (this.state) {
        if (this.state === 'active') {
          return 'state-active';
        }
        if (this.state === 'hover') {
          return 'state-hover';
        }
      }
    },
  },
};
