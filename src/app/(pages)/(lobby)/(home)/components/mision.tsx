import { Card, CardContent } from "@/app/components/ui/card";

export default function Mision() {
  return (
    <section className="px-6 py-10 md:px-20">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="py-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Misión</h2>
          <p className="text-lg leading-relaxed">
           Proporcionar una solución accesible y precisa para calcular y monitorear las emisiones de CO2 en proyectos de TI, ayudando a empresas y profesionales a identificar áreas de mejora en sus prácticas y a implementar estrategias de reducción de emisiones. A través de esta calculadora, buscamos sensibilizar y capacitar a la industria de TI sobre la importancia de la sostenibilidad y fomentar una cultura de responsabilidad ambiental en todas las fases del ciclo de vida de los proyectos tecnológicos.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
