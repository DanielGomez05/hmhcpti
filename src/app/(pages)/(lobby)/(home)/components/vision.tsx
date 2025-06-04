import { Card, CardContent } from "@/app/components/ui/card";

export default function Vision() {
  return (
    <section className="px-6 py-10 md:px-20">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="py-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Visión</h2>
          <p className="text-lg leading-relaxed">
            Convertirnos en una herramienta líder en la medición de la huella de carbono para proyectos de tecnología de la información, promoviendo una industria tecnológica comprometida con la sostenibilidad ambiental y consciente de su impacto ecológico. Aspiramos a facilitar la transición hacia prácticas más sostenibles en TI, proporcionando a las empresas y desarrolladores una plataforma intuitiva y efectiva para la evaluación, reducción y gestión de sus emisiones de carbono.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
