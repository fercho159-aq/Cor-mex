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
            <img
              src="https://import.getbowtied.com/thehanger/wp-content/themes/the-hanger/images/footer/payment-icon-visa.png"
              alt="Visa"
              title="Visa"
              className="h-7 w-auto"
            />
            <img
              src="https://import.getbowtied.com/thehanger/wp-content/themes/the-hanger/images/footer/payment-icon-mastercard.png"
              alt="MasterCard"
              title="MasterCard"
              className="h-7 w-auto"
            />
            <img
              src="https://import.getbowtied.com/thehanger/wp-content/themes/the-hanger/images/footer/payment-icon-amex.png"
              alt="Amex"
              title="Amex"
              className="h-7 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
