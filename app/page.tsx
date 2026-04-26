import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";
import { productsInCategory } from "@/lib/products";
import { WHATSAPP_URL, PHONE_TEL } from "@/lib/contact";

export default function Home() {
  const cortadoras = productsInCategory("cormex-cortadoras-2").slice(0, 5);
  const cizallas = productsInCategory("cizallas").slice(0, 20);
  const dobladoras = productsInCategory("dobladoras").slice(0, 2);
  const punzadoras = productsInCategory("punzadoras").slice(0, 2);
  const electricas = productsInCategory("cortadoras-electricas");

  return (
    <>
      <Hero />

      {/* YouTube videos */}
      <section className="container-cmx py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/OIyKbEZK4cI?rel=0&showinfo=0&color=white"
              title="COR-MÉX | Cortadora"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="aspect-video">
            <iframe
              loading="lazy"
              className="w-full h-full"
              src="https://www.youtube.com/embed/ttdzOfuOeVI?rel=0&showinfo=0&color=white"
              title="Cormex"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Cortadoras */}
      <section className="container-cmx py-8">
        <h2 className="text-center text-[28px] font-medium mb-6" style={{ color: "#ff0000" }}>
          Cortadoras
        </h2>
        <ProductGrid products={cortadoras} cols={5} />
        <div className="text-center mt-6">
          <VerMasBtn href="/categoria-producto/cortadoras-2/" />
        </div>
      </section>

      {/* Banner — Somos Fabricantes */}
      <section
        className="text-white text-center py-16 px-4"
        style={{
          backgroundColor: "#1a2980",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h2 className="text-[44px] md:text-[64px] font-medium leading-tight mb-3">
          Somos Fabricantes
        </h2>
        <p className="text-[22px] md:text-[32px] font-light tracking-wide mb-8">
          Garantizamos el precio más bajo de México
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-block bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-medium px-10 py-3 text-[18px] transition-colors"
          >
            Llámanos
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#25d366] hover:bg-[#1da851] text-white font-medium px-10 py-3 text-[18px] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Cizallas */}
      <section className="container-cmx py-8">
        <h2 className="text-center text-[28px] font-medium mb-6" style={{ color: "#ff0000" }}>
          Cizallas
        </h2>
        <ProductGrid products={cizallas} cols={4} />
        <div className="text-center mt-6">
          <VerMasBtn href="/categoria-producto/cizallas/" />
        </div>
      </section>

      {/* Dobladoras + Punzonadoras */}
      <section className="container-cmx py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-center text-[28px] font-medium mb-6"
              style={{ color: "#ff0000" }}
            >
              Dobladoras
            </h2>
            <ProductGrid products={dobladoras} cols={3} />
            <div className="text-center mt-6">
              <VerMasBtn href="/categoria-producto/dobladoras/" />
            </div>
          </div>
          <div>
            <h2
              className="text-center text-[28px] font-medium mb-6"
              style={{ color: "#ff0000" }}
            >
              Punzonadoras
            </h2>
            <ProductGrid products={punzadoras} cols={3} />
            <div className="text-center mt-6">
              <VerMasBtn href="/categoria-producto/punzadoras/" />
            </div>
          </div>
        </div>
      </section>

      {/* Cortadoras Eléctricas */}
      <section className="py-8">
        <div className="container-cmx">
          <div className="md:px-[16.66%]">
            <h2
              className="text-center text-[28px] font-medium mb-6"
              style={{ color: "#ff0000" }}
            >
              Cortadoras Eléctricas
            </h2>
            <ProductGrid products={electricas} cols={3} />
            <div className="text-center mt-6">
              <VerMasBtn href="/categoria-producto/cortadoras-electricas/" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Benefits */}
      <TrustSection />
    </>
  );
}

function VerMasBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-block bg-brand hover:bg-brand-hover text-white font-medium px-8 py-3 text-[14px] uppercase tracking-wide transition-colors"
    >
      Ver más
    </Link>
  );
}

function TrustSection() {
  const items = [
    {
      icon: "thehanger-icons-ecommerce_box-2",
      title: "Envío a domicilio",
      sub: "El producto llega hasta tu hogar",
    },
    {
      icon: "thehanger-icons-ecommerce_discount-coupon",
      title: "Descuentos",
      sub: "Descuento en compra directa con nosotros",
    },
    {
      icon: "thehanger-icons-ecommerce_shopping-bags",
      title: "Envios nacionales",
      sub: "Llegamos a todo México",
    },
    {
      icon: "thehanger-icons-ecommerce_credit-card",
      title: "Compra Segura",
      sub: "Su pago esta garantizado",
    },
  ];

  return (
    <div className="bg-[#f9f9f9] border-t border-[#e5e5e5] py-10">
      <div className="container-cmx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <div className="text-brand text-[36px]">
                <i className={item.icon} />
              </div>
              <h4 className="text-[14px] font-medium text-[#222]">{item.title}</h4>
              <p className="text-[12px] text-ink-2">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
