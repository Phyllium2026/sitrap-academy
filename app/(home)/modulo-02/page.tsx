import Link from "next/link";
import TrainingModulePage from "@/components/TrainingModulePage";
import { BookOpen, QrCode } from "lucide-react";

export default function Modulo02Page() {
  return (
    <div>
      <TrainingModulePage
        number="02"
        title="Impresión de Etiqueta QR del Lote"
        description="Aprende a generar e imprimir la etiqueta QR oficial del lote para asegurar su correcta identificación y trazabilidad dentro de SITRAP."
        icon={QrCode}
        time="5 min"
        level="Básico"
        progress="33%"
        videos={[
          {
            title: "Procedimiento completo",
            description:
              "Generación e impresión de la etiqueta QR oficial del lote.",
            video: "/videos/modulo-02.mp4",
          },
        ]}
        steps={[
          "Ingresar al módulo 'Imprimir QR del lote'.",
          "Buscar el lote por código o especie.",
          "Seleccionar el lote correcto.",
          "Verificar la información mostrada en pantalla.",
          "Presionar 'Imprimir'.",
          "Revisar que la etiqueta QR haya sido impresa correctamente.",
        ]}
        expectedResult="El lote queda correctamente identificado con su etiqueta QR oficial y listo para continuar su trazabilidad operacional."
        observations={[
          "Verificar que el QR sea completamente legible.",
          "Confirmar que el código corresponde al lote seleccionado.",
          "Reemplazar inmediatamente cualquier etiqueta dañada o ilegible.",
        ]}
        bestPractices={[
          "Imprimir el QR inmediatamente después de registrar el lote.",
          "Proteger la etiqueta de humedad y suciedad.",
          "No reutilizar etiquetas pertenecientes a otros lotes.",
          "Verificar la impresión antes de adherir la etiqueta.",
        ]}
        previousHref="/modulo-01"
        nextHref="/modulo-03"
        nextLabel="Módulo 03"
      />

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/modulo-02/manual"
          className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-3 text-sm font-black text-white shadow-lg hover:bg-green-800"
        >
          <BookOpen size={18} />
          Ver manual
        </Link>
      </div>
    </div>
  );
}