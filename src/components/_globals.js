import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  Icon,
  PrimaryButton,
  Header,
  SecondaryButton,
  TertiaryButton,
  WarningButton,
  PrimaryIconButton,
  SecondaryIconButton,
  InputField,
} from '.';

/**
 *  Register components globally
 * */
const components = {
	InputField,
	SecondaryIconButton,
	PrimaryIconButton,
	WarningButton,
	TertiaryButton,
	SecondaryButton,
	PrimaryButton,
	Header,
  Icon,
};

Object.keys(components).forEach(key => Vue.component(key, components[key]));
