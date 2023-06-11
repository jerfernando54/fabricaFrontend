import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'En Producción',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'Ahora'
    }
  },
  {
    name: 'Finalizados',
    url: '/finalizados',
    iconComponent: { name: 'cil-puzzle' }
  },
  {
    name: 'Usuario',
    title: true
  },
  {
    name: 'Authentication',
    url: '/login',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
    ]
  },
];
