import { WHATSAPP_URL, PHONE_TEL } from "@/lib/contact";

export const metadata = {
  title: "Nosotros - CORMEX",
  description:
    "Cormex es una empresa 100% mexicana con más de 67 años fabricando cortadoras, cizallas, dobladoras y punzonadoras industriales.",
};

export default function NosotrosPage() {
  return (
    <section className="container-cmx py-12">
      <h1 className="text-center text-[36px] font-medium text-[#222] mb-10">
        <strong>Nosotros</strong>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-[15px] leading-relaxed">
          <p>
            <strong>Cormex</strong>, es una empresa 100% mexicana, nuestra experiencia
            adquirida, durante más de sesenta y siete años, en la fabricación de maquinaria
            industrial especializada, en productos de alta perfección y calidad, con un
            continuo aumento de eficiencia y duración.
          </p>
          <p>
            El cuerpo de las cortadoras, cizallas, dobladoras y punzonadoras, consiste, en
            planchas de acero, a prueba de rotura, gracias a esto, tienen una larga
            durabilidad.
          </p>
          <p>
            Todas nuestras herramientas, para cortar, doblar y punzonar, están hechas de
            acero de inmejorable calidad a prueba de rotura y tienen repuestos
            intercambiables.
          </p>
          <p>Fabricamos y distribuimos en el mercado nacional.</p>
          <p>
            Nuestros clientes nos avalan y seguimos creciendo cada día, gracias a la
            confianza que han depositado en nosotros.
          </p>
          <p>
            En <strong>Cor-mex</strong>, contamos con profesionales, altamente capacitados,
            para desarrollar proyectos específicos y a la medida de nuestros clientes,
            acércate con nosotros para hacerte una propuesta de la maquinaria que se ajuste
            a tus necesidades.
          </p>
          <p>
            <strong>¡Podemos ayudarte!</strong>
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <img
            src="/uploads/2022/03/logo_cormex_12-1-01-3.png"
            alt="CORMEX"
            className="max-w-[420px] w-full h-auto"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#25d366] hover:bg-[#1da851] text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-block bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              Llámanos
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-[28px] font-medium text-[#222] mb-6">
          <strong>Nuestras Marcas</strong>
        </h2>
        <img
          src="/uploads/2022/03/logos_cormex.jpg"
          alt="Marcas Cormex"
          className="mx-auto max-w-[700px] w-full h-auto"
        />
      </div>
    </section>
  );
}
