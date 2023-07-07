import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Menu',
    title: true,
    attributes: {allowedRoles: ['admin', 'fabrica']},
  },
  {
    name: 'En Producción',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    attributes: {allowedRoles: ['admin', 'fabrica']},
    badge: {
      color: 'info',
      text: 'Ahora'
    }
  },
  {
    name: 'Finalizados',
    url: '/finalizados',
    iconComponent: { name: 'cil-puzzle' },
    attributes: {allowedRoles: ['admin', 'fabrica']},
  },
  {
    name: 'Usuario',
    title: true,
    attributes: {allowedRoles: ['admin']},
  },
  {
    name: 'Users',
    iconComponent: { name: 'cil-user' },
    attributes: {allowedRoles: ['admin']},
    children: [
      {
        name: 'Todos usuarios',
        url: '/user/users',
      },
      {
        name: 'Nuevo usuario',
        url: '/register',
      },
    ]
  },
];
