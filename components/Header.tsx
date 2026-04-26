import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header bg-white border-b border-[#e5e5e5]">
      <div className="container-cmx">
        <div className="flex items-center justify-between gap-6 py-5">
          <Link href="/" className="site-logo shrink-0" aria-label="CORMEX">
            <img
              src="/uploads/2022/02/logo_cormex_12-1-01-3.png"
              alt="CORMEX"
              width={200}
              height={64}
              className="h-auto w-[200px]"
            />
          </Link>

          <form
            role="search"
            method="get"
            action="/"
            className="header_search_form hidden md:flex flex-1 max-w-[600px] items-center border border-[#e5e5e5] rounded-[2px] overflow-hidden"
          >
            <input
              type="search"
              name="s"
              defaultValue=""
              placeholder="Product Search"
              className="flex-1 px-4 py-2 text-[13px] outline-none"
              autoComplete="off"
            />
            <input type="hidden" name="post_type" value="product" />
            <button
              type="submit"
              aria-label="Buscar"
              className="px-4 py-2 bg-brand text-white hover:bg-brand-hover transition-colors"
            >
              <i className="thehanger-icons-search" />
            </button>
          </form>

          <ul className="header-tools flex items-center gap-5 text-[24px] text-[#222]">
            <li>
              <Link href="/my-account/" aria-label="Cuenta">
                <i className="thehanger-icons-account" />
              </Link>
            </li>
            <li className="relative">
              <Link href="/" aria-label="Carrito">
                <i className="thehanger-icons-shopping-bag" />
                <span className="absolute -top-1 -right-2 bg-brand text-white text-[10px] font-medium leading-none rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
                  0
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
