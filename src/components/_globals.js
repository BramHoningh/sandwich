import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  Icon,
  Header,
} from '.';

/**
 *  Register components globally
 * */
const components = {
	Header,
  Icon,
};

Object.keys(components).forEach(key => Vue.component(key, components[key]));
