import AbstractButton from './AbstractButton';

export default {
  name: 'AbstractIconButton',
  extends: AbstractButton,
  props: {
    icon: {
      type: String,
    },
    borderRadius: {
      type: String,
      default: '100%',
    },
  },
};
