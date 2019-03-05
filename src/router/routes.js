/* eslint-disable-next-line import,prettier/prettier */
import { 
  Home, 
  NotFound,
	DesignSystem,
} from '@/views';

export default [	{		path: '/design-system',		name: 'designSystem',		component: DesignSystem,		meta: {			title: 'Design System',		},	},
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: '*',
    component: NotFound,
    name: 'Error 404',
    meta: {
      title: 'Page not Found',
    },
  },
];
