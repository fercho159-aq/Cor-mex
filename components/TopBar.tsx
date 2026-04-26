import { WHATSAPP_URL } from "@/lib/contact";

export default function TopBar() {
  return (
    <div className="bg-brand text-white text-[13px]">
      <div className="container-cmx flex items-center justify-between gap-4 py-2 min-h-[35px]">
        <div className="topbar-info-1">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">
            📞 &nbsp;Envíanos WhatsApp aquí
          </a>
        </div>
        <div className="topbar-info-2 hidden sm:block tracking-wide">
          ⚙ !SOMOS FABRICANTES! ⚙
        </div>
      </div>
    </div>
  );
}
