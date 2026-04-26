export const metadata = {
  title: "Distribuidores de la República - CORMEX",
  description:
    "Lista de distribuidores autorizados CORMEX en la República Mexicana por estado.",
};

const STATES: { id: string; name: string; img: string }[] = [
  { id: "aguascalientes", name: "Aguascalientes", img: "aguascalientes.jpg" },
  { id: "baja_california", name: "Baja California", img: "baja-california.jpg" },
  { id: "campeche", name: "Campeche", img: "campeche.jpg" },
  { id: "chiapas", name: "Chiapas", img: "chiapas.jpg" },
  { id: "chihuahua", name: "Chihuahua", img: "chihuahua.jpg" },
  { id: "coahuila", name: "Coahuila", img: "coahuila.jpg" },
  { id: "colima", name: "Colima", img: "colima.jpg" },
  { id: "durango", name: "Durango", img: "durango.jpg" },
  { id: "guanajuato", name: "Guanajuato", img: "guanajuato.jpg" },
  { id: "guerrero", name: "Guerrero", img: "guerrero.jpg" },
  { id: "jalisco", name: "Jalisco", img: "Jalisco.jpg" },
  { id: "michoacan", name: "Michoacán", img: "Michoacan.jpg" },
  { id: "morelos", name: "Morelos", img: "morelos.jpg" },
  { id: "nayarit", name: "Nayarit", img: "Nayarit.jpg" },
  { id: "nuevo_leon", name: "Nuevo León", img: "nuevo-leon.jpg" },
  { id: "oaxaca", name: "Oaxaca", img: "oaxaca.jpg" },
  { id: "puebla", name: "Puebla", img: "puebla.jpg" },
  { id: "queretaro", name: "Querétaro", img: "queretaro.jpg" },
  { id: "quintana_roo", name: "Quintana Roo", img: "quintana-roo.jpg" },
  { id: "slp", name: "San Luis Potosí", img: "slp.jpg" },
  { id: "sinaloa", name: "Sinaloa", img: "sinaloa.jpg" },
  { id: "sonora", name: "Sonora", img: "sonora.jpg" },
  { id: "tamaulipas", name: "Tamaulipas", img: "tamaulipas.jpg" },
  { id: "veracruz", name: "Veracruz", img: "veracruz.jpg" },
  { id: "yucatan", name: "Yucatán", img: "yucatan.jpg" },
];

export default function DistribuidoresPage() {
  return (
    <section className="container-cmx py-12">
      <h1 className="text-center text-[36px] font-medium text-[#222] mb-10">
        Lista de distribuidores
      </h1>

      <div className="space-y-8 max-w-[1280px] mx-auto">
        {STATES.map((s) => (
          <div key={s.id} id={s.id}>
            <img
              src={`/uploads/2022/03/${s.img}`}
              alt={s.name}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
