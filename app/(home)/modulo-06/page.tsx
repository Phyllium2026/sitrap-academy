import Link from "next/link";
import TrainingModulePage from "@/components/TrainingModulePage";
import { BookOpen, Printer } from "lucide-react";

export default function Modulo06Page() {
  return (
    <div>
      <TrainingModulePage
        number="06"
        title="Impresión Ticket Despacho EECC"
        description="Aprende a generar e imprimir el ticket de despacho de plantas para la Empresa Contratista, asegurando la correcta documentación y trazabilidad del movimiento."
        icon={Printer}
        time="5 min"
        level="Básico"
        progress="100%"
        videos={[
          {
            title: "Procedimiento completo",
            description:
              "Generación e impresión del ticket de despacho para Empresa Contratista.",
            video: "/videos/modulo-06.mp4",
          },
        ]}
        steps={[
          "Ingresar al módulo de impresión.",
          "Buscar el ticket de despacho.",
          "Seleccionar el despacho correcto.",
          "Visualizar el ticket generado.",
          "Enviar a la impresora POS.",
          "Verificar la impresión del ticket.",
        ]}
        expectedResult="El ticket de despacho queda correctamente generado e impreso para acompañar la entrega de las plantas."
        observations={[
          "Verificar que el despacho corresponda al lote correcto.",
          "Confirmar que la impresora POS esté conectada.",
          "Revisar el ticket antes de entregarlo.",
        ]}
        bestPractices={[
          "Imprimir inmediatamente después del despacho.",
          "Mantener papel disponible en la impresora.",
          "Entregar siempre el ticket junto con las plantas.",
        ]}
        previousHref="/modulo-05"
        nextHref="/"
        nextLabel="Finalizar capacitación"
      />

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/modulo-06/manual"
          className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-3 text-sm font-black text-white shadow-lg hover:bg-green-800"
        >
          <BookOpen size={18} />
          Ver manual
        </Link>
      </div>
    </div>
  );
}