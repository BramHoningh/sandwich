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
  },
};
