import { WHATSAPP_URL } from "@/lib/contact";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotiza al momento aquí — Contactar por WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebe57] text-white! pl-4 pr-5 py-3 rounded-full shadow-lg transition-colors"
    >
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 .5C7.44.5.5 7.44.5 16c0 2.84.78 5.6 2.27 8.03L.5 31.5l7.66-2.23A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5Zm0 28a12.42 12.42 0 0 1-6.34-1.74l-.45-.27-4.55 1.32 1.36-4.42-.3-.46A12.5 12.5 0 1 1 16 28.5Zm6.83-9.34c-.37-.19-2.2-1.08-2.55-1.21-.34-.13-.59-.19-.84.19s-.96 1.21-1.18 1.46c-.22.25-.43.28-.8.09-.37-.19-1.57-.58-2.99-1.85a11.27 11.27 0 0 1-2.08-2.59c-.22-.37-.02-.57.16-.76.16-.16.37-.43.55-.65.18-.22.25-.37.37-.62.12-.25.06-.46-.03-.65-.09-.19-.84-2.02-1.15-2.77-.3-.73-.61-.63-.84-.64H10.7c-.25 0-.65.09-.99.46-.34.37-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.18.25 2.61 3.99 6.32 5.6.88.38 1.57.61 2.11.78.89.28 1.7.24 2.34.15.71-.11 2.2-.9 2.51-1.78.31-.87.31-1.62.22-1.78-.09-.16-.34-.25-.71-.43Z"
        />
      </svg>
      <span className="text-[12px] font-medium hidden sm:inline">
        Cotiza al momento aquí
      </span>
    </a>
  );
}
