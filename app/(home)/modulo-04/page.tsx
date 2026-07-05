import Link from "next/link";
import TrainingModulePage from "@/components/TrainingModulePage";
import { BookOpen, Truck } from "lucide-react";

export default function Modulo04Page() {
  return (
    <div>
      <TrainingModulePage
        number="04"
        title="Registro de Movimientos del Lote (Recepción)"
        description="Aprende a registrar correctamente la recepción de un lote en un vivero mediante la lectura del código QR, manteniendo la trazabilidad completa dentro de SITRAP."
        icon={Truck}
        time="7 min"
        level="Básico"
        progress="66%"
        videos={[
          {
            title: "Procedimiento completo",
            description:
              "Registro de recepción de un lote mediante lectura QR.",
            video: "/videos/modulo-04.mp4",
          },
        ]}
        steps={[
          "Escanear el código QR del lote.",
          "Verificar que SITRAP identifique correctamente el lote.",
          "Seleccionar el movimiento Recepción.",
          "Confirmar vivero de origen.",
          "Seleccionar vivero de destino.",
          "Ingresar la cantidad recepcionada.",
          "Revisar la información.",
          "Guardar el movimiento.",
        ]}
        expectedResult="La recepción queda registrada correctamente y el lote continúa su trazabilidad dentro de SITRAP."
        observations={[
          "Confirmar siempre el vivero de origen.",
          "La cantidad debe coincidir con el conteo físico.",
          "No registrar una recepción duplicada.",
        ]}
        bestPractices={[
          "Escanear siempre el QR.",
          "Registrar la recepción inmediatamente.",
          "Revisar toda la información antes de guardar.",
          "Mantener las etiquetas QR en buen estado.",
        ]}
        previousHref="/modulo-03"
        nextHref="/modulo-05"
        nextLabel="Módulo 05"
      />

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/modulo-04/manual"
          className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-3 text-sm font-black text-white shadow-lg hover:bg-green-800"
        >
          <BookOpen size={18} />
          Ver manual
        </Link>
      </div>
    </div>
  );
}