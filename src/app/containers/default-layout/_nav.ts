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
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Finalizados',
    url: '/finalizados/finalizados',
    iconComponent: { name: 'cil-puzzle' }
  },

  // {
  //   name: 'Articulos',
  //   url: '/theme/articulos',
  //   iconComponent: { name: 'cil-puzzle' }
  // },
  
  // {
  //   name: 'Cajas',
  //   url: '/theme/cajas',
   
  //   iconComponent: { name: 'cil-inbox' }
  // },
  // {
  //   name: 'Cajas Pre-etiquetados',
  //   url: '/preetiquetados',
  //   iconComponent: { name: 'cil-tags' }
  // },
  {
    name: 'Usuario',
    title: true
  },
  {
    name: 'Usuario',
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
