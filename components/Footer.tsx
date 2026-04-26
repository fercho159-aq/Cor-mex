export default function Footer() {
  return (
    <footer className="site-footer bg-white border-t border-[#e5e5e5] text-[12px]">
      <div className="container-cmx py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="footer-text text-[#777]">
            Sitio realizado por{" "}
            <a
              href="https://maestrodelmedia.com"
              title="Maestros del Media"
              target="_blank"
              rel="noreferrer"
              className="text-brand hover:text-brand-hover"
            >
              Maestros del Media
            </a>
            .
          </div>
          <div className="footer-credit-card-icons flex items-center gap-2">
            <span
              aria-label="Visa"
              title="Visa"
              className="inline-flex items-center justify-center h-7 w-11 rounded bg-white border border-[#e5e5e5] text-[#1a1f71] text-[12px] font-bold italic tracking-tight"
            >
              VISA
            </span>
            <span
              aria-label="MasterCard"
              title="MasterCard"
              className="relative inline-flex items-center justify-center h-7 w-11 rounded bg-white border border-[#e5e5e5]"
            >
              <span className="block w-3.5 h-3.5 rounded-full bg-[#eb001b] -mr-1.5" />
              <span className="block w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-90 mix-blend-multiply" />
            </span>
            <span
              aria-label="Amex"
              title="Amex"
              className="inline-flex items-center justify-center h-7 w-11 rounded bg-[#2e77bb] text-white text-[8px] font-bold tracking-tight uppercase"
            >
              AMEX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
