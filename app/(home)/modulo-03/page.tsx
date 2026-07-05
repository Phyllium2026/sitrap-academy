import Link from "next/link";
import TrainingModulePage from "@/components/TrainingModulePage";
import { BookOpen, ScanLine } from "lucide-react";

export default function Modulo03Page() {
  return (
    <div>
      <TrainingModulePage
        number="03"
        title="Registro de Movimientos del Lote"
        description="Aprende a registrar correctamente un movimiento operacional de un lote utilizando la lectura del código QR dentro de SITRAP."
        icon={ScanLine}
        time="6 min"
        level="Básico"
        progress="50%"
        videos={[
          {
            title: "Procedimiento completo",
            description:
              "Registro de movimientos del lote utilizando lectura QR.",
            video: "/videos/modulo-03.mp4",
          },
        ]}
        steps={[
          "Abrir SITRAP desde el dispositivo móvil.",
          "Ingresar al módulo Registrar Movimiento.",
          "Escanear el código QR del lote.",
          "Verificar que el lote identificado sea el correcto.",
          "Seleccionar el tipo de movimiento.",
          "Completar la información solicitada.",
          "Guardar el movimiento.",
        ]}
        expectedResult="El movimiento queda registrado correctamente en SITRAP, actualizando la trazabilidad operacional del lote."
        observations={[
          "Verificar que el QR sea completamente legible.",
          "Confirmar que el lote corresponda al movimiento realizado.",
          "No registrar movimientos duplicados.",
        ]}
        bestPractices={[
          "Utilizar siempre la lectura QR.",
          "Revisar la información antes de guardar.",
          "Mantener las etiquetas QR en buen estado.",
          "Registrar el movimiento inmediatamente después de ejecutarlo.",
        ]}
        previousHref="/modulo-02"
        nextHref="/modulo-04"
        nextLabel="Módulo 04"
      />

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/modulo-03/manual"
          className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-3 text-sm font-black text-white shadow-lg hover:bg-green-800"
        >
          <BookOpen size={18} />
          Ver manual
        </Link>
      </div>
    </div>
  );
}