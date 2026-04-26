import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white bg-center bg-cover"
      style={{
        backgroundImage: "url(/uploads/2022/03/dark-blue-background-wallpapers.jpg)",
        minHeight: "500px",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.25)" }} />
      <div className="container-cmx relative py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
        <div>
          <h1 className="text-[36px] md:text-[56px] leading-[1.1] font-medium drop-shadow">
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
            src="/uploads/2022/03/922139ad-b1b0-43fe-93d3-072ed6ad8d8c.png"
            alt="Cortadora Eléctrica CORMEX"
            className="max-h-[460px] w-auto object-contain"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
