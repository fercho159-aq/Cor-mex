import Link from "next/link";
import { MAIN_NAV, type NavItem } from "@/lib/nav";

const NUESTRAS_MARCAS: NavItem[] = [
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
    label: "Cortadoras Eléctricas",
    href: "/categoria-producto/cortadoras-electricas/",
    children: [
      { label: "Cormex", href: "/categoria-producto/cortadoras-electricas/cormex-cortadoras-electricas/" },
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
];

function NavLink({ item }: { item: NavItem }) {
  const hasChildren = !!item.children?.length;
  return (
    <li className="relative group">
      {item.href === "#" ? (
        <span className="block px-4 py-3 cursor-default uppercase tracking-wide font-medium text-[12px] text-[#222] hover:text-brand transition-colors">
          {item.label}
        </span>
      ) : (
        <Link
          href={item.href}
          className="block px-4 py-3 uppercase tracking-wide font-medium text-[12px] text-[#222] hover:text-brand transition-colors"
        >
          {item.label}
        </Link>
      )}
      {hasChildren && (
        <ul className="absolute left-0 top-full z-50 hidden group-hover:block min-w-[220px] bg-white border border-[#e5e5e5] shadow-md py-2">
          {item.children!.map((c) => (
            <li key={c.label} className="relative group/sub">
              <Link
                href={c.href}
                className="flex items-center justify-between px-4 py-2 text-[12px] uppercase tracking-wide text-[#222] hover:text-brand hover:bg-[#f7f7f7] transition-colors"
              >
                <span>{c.label}</span>
                {c.children?.length ? <span className="text-[10px]">›</span> : null}
              </Link>
              {c.children?.length ? (
                <ul className="absolute left-full top-0 hidden group-hover/sub:block min-w-[180px] bg-white border border-[#e5e5e5] shadow-md py-2">
                  {c.children.map((g) => (
                    <li key={g.label}>
                      <Link
                        href={g.href}
                        className="block px-4 py-2 text-[12px] uppercase tracking-wide text-[#222] hover:text-brand hover:bg-[#f7f7f7] transition-colors"
                      >
                        {g.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MegaNav() {
  return (
    <nav className="bg-white border-b border-[#e5e5e5] hidden lg:block">
      <div className="container-cmx flex items-stretch">
        {/* Nuestras Marcas dropdown */}
        <div className="relative group shrink-0">
          <button className="flex items-center gap-2 bg-brand text-white px-5 py-3 text-[12px] uppercase tracking-wide font-medium h-full cursor-default">
            <i className="thehanger-icons-hamburger text-[14px]" />
            Nuestras Marcas
            <span className="text-[10px] ml-1">▾</span>
          </button>
          <ul className="absolute left-0 top-full z-50 hidden group-hover:block min-w-[200px] bg-white border border-[#e5e5e5] shadow-md py-2">
            {NUESTRAS_MARCAS.map((item) => (
              <li key={item.label} className="relative group/marcas">
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2 text-[12px] uppercase tracking-wide text-[#222] hover:text-brand hover:bg-[#f7f7f7] transition-colors"
                >
                  <span>{item.label}</span>
                  {item.children?.length ? <span className="text-[10px]">›</span> : null}
                </Link>
                {item.children?.length && (
                  <ul className="absolute left-full top-0 hidden group-hover/marcas:block min-w-[160px] bg-white border border-[#e5e5e5] shadow-md py-2">
                    {item.children.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 text-[12px] uppercase tracking-wide text-[#222] hover:text-brand hover:bg-[#f7f7f7] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main nav links */}
        <ul className="flex items-center">
          {MAIN_NAV.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
