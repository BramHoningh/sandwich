import Vue from 'vue';

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  WarningButton,
  PrimaryIconButton,
  SecondaryIconButton,
  Icon,
  Accordion,
  HeaderBar,
  InputField,
  RadioInput,
} from './components';

const components = {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  WarningButton,
  PrimaryIconButton,
  SecondaryIconButton,
  Icon,
  Accordion,
  HeaderBar,
  InputField,
  RadioInput,
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default components;
