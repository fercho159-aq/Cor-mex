import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#1a2980",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)",
        backgroundSize: "20px 20px",
        minHeight: "400px",
      }}
    >
      <div className="container-cmx relative py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
        <div>
          <h1 className="text-[36px] md:text-[56px] leading-[1.15] font-medium">
            Conoce nuestra nueva
            <br />
            Cortadora Eléctrica
          </h1>
          <div className="mt-8">
            <Link
              href="/categoria-producto/cortadoras-electricas/"
              className="inline-block bg-[#ff3a2d] hover:bg-[#e02a1d] text-white font-medium px-10 py-4 text-[18px] transition-colors"
            >
              Ver más
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-end">
          <img
            src="/uploads/2022/03/el-1.png"
            alt="Cortadora Eléctrica CORMEX"
            className="max-h-[380px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
