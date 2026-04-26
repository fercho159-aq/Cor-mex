import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export const metadata = {
  title: "Contacto - CORMEX",
  description:
    "Contáctanos en CORMEX. Llámanos, escríbenos por WhatsApp o envíanos tus datos para una cotización.",
};

export default function ContactoPage() {
  return (
    <section className="container-cmx py-12">
      <h1 className="text-center text-[36px] font-medium text-[#222] mb-10">
        Contacto
      </h1>

      <div className="max-w-[640px] mx-auto bg-white border border-[#e5e5e5] p-8">
        <p className="text-center text-[15px] text-ink mb-8">
          ¡Estamos para ayudarte! Cotizaciones, ventas y soporte.
        </p>

        <div className="space-y-4 text-center">
          <div>
            <div className="text-[12px] uppercase tracking-wide text-ink-2">Teléfono</div>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-[28px] font-medium text-brand hover:text-brand-hover"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <div className="text-[12px] uppercase tracking-wide text-ink-2">WhatsApp</div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[20px] font-medium text-[#0e7c66] hover:text-[#0a5e4d]"
            >
              Chatea con nosotros
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-block bg-brand hover:bg-brand-hover text-white font-medium px-8 py-3 text-[14px] uppercase tracking-wide transition-colors"
          >
            Llámanos
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#0e7c66] hover:bg-[#0a5e4d] text-white font-medium px-8 py-3 text-[14px] uppercase tracking-wide transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
