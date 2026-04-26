export const metadata = {
  title: "Distribuidores Nivel Nacional - CORMEX",
  description: "Distribuidores CORMEX a nivel nacional en la Ciudad de México.",
};

export default function NacionalPage() {
  return (
    <section className="container-cmx py-12">
      <h1 className="text-center text-[36px] font-medium text-[#222] mb-10">
        Distribuidores Nivel Nacional
      </h1>
      <div className="max-w-[1080px] mx-auto">
        <img
          src="/uploads/2022/03/cdmx2-e1550700189461.jpg"
          alt="Distribuidores CDMX"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
