import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  Icon,
  PrimaryButton,
} from '.';

/**
 *  Register components globally
 * */
const components = {
	PrimaryButton,
  Icon,
};

Object.keys(components).forEach(key => Vue.component(key, components[key]));
