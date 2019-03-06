import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  Icon,
  PrimaryButton,
  Header,
  SecondaryButton,
  TertiaryButton,
  WarningButton,
} from '.';

/**
 *  Register components globally
 * */
const components = {
	WarningButton,
	TertiaryButton,
	SecondaryButton,
	PrimaryButton,
	Header,
  Icon,
};

Object.keys(components).forEach(key => Vue.component(key, components[key]));
