import VueTypes from 'vue-types';

export default {
  name: 'AbstractButtonComponent',
  props: {
    text: VueTypes.string,
    state: VueTypes.string,
  },
};
