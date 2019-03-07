import AbstractComponent from '../AbstractComponent';

export default {
  name: 'AbstractInput',
  extends: AbstractComponent,
  props: {
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    errorMessage: {
      type: String,
      default: null,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
};
