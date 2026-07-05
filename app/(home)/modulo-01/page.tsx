import Link from "next/link";
import TrainingModulePage from "@/components/TrainingModulePage";
import { BookOpen, PackagePlus } from "lucide-react";

export default function Modulo01Page() {
  return (
    <div>
      <TrainingModulePage
        number="01"
        title="Crear un nuevo lote"
        description="Aprende a registrar un lote de plantas en SITRAP mediante el Formulario E1, dejando el lote disponible para su codificación, generación de QR y trazabilidad."
        icon={PackagePlus}
        time="8 min"
        level="Básico"
        progress="16%"
        videos={[
          {
            title: "Capacitación completa del Módulo 01",
            description:
              "Registro y Regularización de Lotes de Plantas mediante el Formulario E1.",
            video: "/videos/modulo-01.mp4",
          },
        ]}
        steps={[
          "Abrir SITRAP desde el celular o computador.",
          "Seleccionar la opción Codificar lote.",
          "Completar el Formulario E1.",
          "Revisar especie, vivero, contenedor y cantidad.",
          "Enviar el formulario.",
          "Confirmar que el lote quedó registrado.",
        ]}
        expectedResult="El lote queda registrado correctamente en SITRAP y disponible para generar su etiqueta QR e iniciar su trazabilidad operacional."
        observations={[
          "No inventar información que no exista.",
          "Para lotes nuevos, la fecha de siembra es obligatoria.",
          "Para lotes históricos, registrar la mejor información disponible.",
        ]}
        bestPractices={[
          "Verificar la especie antes de enviar.",
          "Confirmar la cantidad física del lote.",
          "No registrar dos veces el mismo lote.",
          "Generar el QR inmediatamente después del registro.",
        ]}
        previousHref="/"
        nextHref="/modulo-02"
        nextLabel="Módulo 02"
      />

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/modulo-01/manual"
          className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-3 text-sm font-black text-white shadow-lg hover:bg-green-800"
        >
          <BookOpen size={18} />
          Ver manual
        </Link>
      </div>
    </div>
  );
}