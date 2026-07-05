import Link from "next/link";
import TrainingModulePage from "@/components/TrainingModulePage";
import { BookOpen, PackageCheck } from "lucide-react";

export default function Modulo05Page() {
  return (
    <div>
      <TrainingModulePage
        number="05"
        title="Registro de Movimientos del Lote (EECC)"
        description="Aprende a registrar correctamente el despacho de plantas desde Vivero Monte Aranda hacia una Empresa Contratista mediante lectura del código QR, manteniendo la trazabilidad completa dentro de SITRAP."
        icon={PackageCheck}
        time="8 min"
        level="Intermedio"
        progress="83%"
        videos={[
          {
            title: "Procedimiento completo",
            description:
              "Registro del despacho de plantas hacia una Empresa Contratista mediante lectura QR.",
            video: "/videos/modulo-05.mp4",
          },
        ]}
        steps={[
          "Escanear el código QR del lote.",
          "Verificar que SITRAP identifique correctamente el lote.",
          "Seleccionar el movimiento Despacho a EECC.",
          "Seleccionar vivero de origen.",
          "Seleccionar Empresa Contratista.",
          "Seleccionar contrato.",
          "Registrar quién recibe.",
          "Registrar transporte.",
          "Revisar la información.",
          "Guardar el movimiento.",
        ]}
        expectedResult="El despacho queda registrado correctamente, el stock del vivero disminuye automáticamente y el lote mantiene su trazabilidad hacia la Empresa Contratista."
        observations={[
          "Verificar contrato antes de enviar.",
          "Confirmar cantidad física.",
          "El ticket debe acompañar el despacho.",
        ]}
        bestPractices={[
          "Escanear siempre el código QR.",
          "Registrar el despacho inmediatamente antes de la salida del vehículo.",
          "Verificar empresa, contrato y cantidad antes de enviar.",
          "Entregar el ticket junto con las plantas.",
        ]}
        previousHref="/modulo-04"
        nextHref="/modulo-06"
        nextLabel="Módulo 06"
      />

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/modulo-05/manual"
          className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-green-800"
        >
          <BookOpen size={18} />
          Ver manual
        </Link>
      </div>
    </div>
  );
}