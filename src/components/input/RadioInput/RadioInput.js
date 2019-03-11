import AbstractInput from '../AbstractInput';

export default {
  name: 'SelectInput',
  extends: AbstractInput,
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      radioInput: '',
    };
  },
};
