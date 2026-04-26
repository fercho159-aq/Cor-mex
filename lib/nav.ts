export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const MAIN_NAV: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros/" },
  {
    label: "Productos",
    href: "#",
    children: [
      {
        label: "Cizallas",
        href: "/categoria-producto/cizallas/",
        children: [
          { label: "Azar", href: "/categoria-producto/cizallas/azar/" },
          { label: "Cormex", href: "/categoria-producto/cizallas/cormex/" },
          { label: "Trebol", href: "/categoria-producto/cizallas/trebol/" },
        ],
      },
      {
        label: "Cortadoras",
        href: "/categoria-producto/cortadoras-2/",
        children: [
          { label: "Azar", href: "/categoria-producto/cortadoras-2/azar-cortadoras-2/" },
          { label: "Cormex", href: "/categoria-producto/cortadoras-2/cormex-cortadoras-2/" },
          { label: "Trebol", href: "/categoria-producto/cortadoras-2/trebol-cortadoras-2/" },
        ],
      },
      {
        label: "Cortadoras de disco eléctricas",
        href: "/categoria-producto/cortadoras-electricas/",
        children: [
          {
            label: "Cormex",
            href: "/categoria-producto/cortadoras-electricas/cormex-cortadoras-electricas/",
          },
        ],
      },
      {
        label: "Dobladoras",
        href: "/categoria-producto/dobladoras/",
        children: [
          { label: "Azar", href: "/categoria-producto/dobladoras/azar-dobladoras/" },
          { label: "Cormex", href: "/categoria-producto/dobladoras/cormex-dobladoras/" },
        ],
      },
      {
        label: "Punzonadoras",
        href: "/categoria-producto/punzadoras/",
        children: [
          { label: "Azar", href: "/categoria-producto/punzadoras/azar-punzadoras/" },
          { label: "Cormex", href: "/categoria-producto/punzadoras/cormex-punzadoras/" },
        ],
      },
    ],
  },
  {
    label: "Distribuidores",
    href: "#",
    children: [
      { label: "Nivel nacional", href: "/nacional/" },
      { label: "Zona Metropolitana", href: "/distribuidores-de-la-republica/" },
    ],
  },
  { label: "Contacto", href: "/contacto/" },
];
