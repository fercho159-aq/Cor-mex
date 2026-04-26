export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col">
      <a
        href="https://www.facebook.com/Cor-Mex-100935089218781"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="flex items-center justify-center w-9 h-9 text-white text-[18px] transition-opacity hover:opacity-80"
        style={{ background: "#3b5998" }}
      >
        <i className="thehanger-icons-facebook-f" />
      </a>
      <a
        href="https://www.instagram.com/cormexico/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="flex items-center justify-center w-9 h-9 text-white text-[18px] transition-opacity hover:opacity-80"
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
      >
        <i className="thehanger-icons-instagram" />
      </a>
    </div>
  );
}
