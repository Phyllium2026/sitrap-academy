import Link from "next/link";
import Header from "@/components/Header";
import ManualStep from "@/components/ManualStep";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

export default function ManualModulo02Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5] px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/modulo-02"
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Volver al Módulo 02
          </Link>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-green-800 px-6 py-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                <BookOpen size={15} />
                MANUAL PASO A PASO
              </div>

              <h1 className="mt-3 text-3xl font-black">
                Módulo 02 — Impresión de Etiqueta QR del Lote
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-green-50">
                Guía operacional para generar e imprimir la etiqueta QR oficial
                de un lote registrado en SITRAP.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="space-y-4">
                <ManualStep
                  numero="01"
                  titulo="Ingresar al módulo de impresión QR"
                  imagen="/manual/modulo-02/paso-01-acceso-qr.jpg"
                  descripcion="Desde la pantalla principal de SITRAP, ingresa a la opción destinada a imprimir o reimprimir la etiqueta QR del lote."
                  consejo="Utiliza esta opción cuando el lote ya fue registrado y necesita ser identificado físicamente."
                  resultado="El sistema abre la pantalla de búsqueda de lotes disponibles para impresión."
                />

                <ManualStep
                  numero="02"
                  titulo="Buscar el lote"
                  imagen="/manual/modulo-02/paso-02-busqueda-lote.jpg"
                  descripcion="Busca el lote utilizando la información disponible, como código, especie, vivero u otro dato que permita identificarlo correctamente."
                  advertencia="Evita seleccionar lotes solo por similitud de nombre. Confirma siempre el código o los datos principales antes de continuar."
                  resultado="El sistema muestra los lotes que coinciden con la búsqueda realizada."
                />

                <ManualStep
                  numero="03"
                  titulo="Seleccionar el lote correcto"
                  imagen="/manual/modulo-02/paso-03-seleccion-lote.jpg"
                  descripcion="Selecciona el lote que corresponde a la etiqueta que necesitas imprimir. Revisa especie, vivero, contenedor y cantidad antes de continuar."
                  consejo="Si existen varios lotes similares, verifica cuidadosamente el identificador del lote antes de generar la etiqueta."
                />

                <ManualStep
                  numero="04"
                  titulo="Revisar la vista previa"
                  imagen="/manual/modulo-02/paso-04-vista-previa.jpg"
                  descripcion="Antes de imprimir, revisa la vista previa de la etiqueta QR. Esta debe mostrar correctamente el identificador del lote y la información principal asociada."
                  advertencia="No imprimas si detectas inconsistencias en el código, especie o datos del lote."
                  resultado="La etiqueta queda lista para ser enviada a impresión."
                />

                <ManualStep
                  numero="05"
                  titulo="Generar la impresión"
                  imagen="/manual/modulo-02/paso-05-generar-impresion.jpg"
                  descripcion="Presiona la opción de impresión para generar la etiqueta QR. Dependiendo del dispositivo, podrás imprimir directamente o descargar el archivo para impresión."
                  consejo="Verifica que la impresora esté conectada y que el formato de papel sea el correcto antes de imprimir."
                />

                <ManualStep
                  numero="06"
                  titulo="Verificar la etiqueta impresa"
                  imagen="/manual/modulo-02/paso-06-verificar-etiqueta.jpg"
                  descripcion="Una vez impresa, revisa que la etiqueta sea legible, que el QR no esté cortado y que corresponda al lote seleccionado."
                  resultado="El lote queda correctamente identificado con su etiqueta QR oficial y disponible para continuar su trazabilidad operacional."
                />
              </div>

              <aside className="space-y-3">
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-700" />
                    <h3 className="font-black text-slate-950">
                      Resultado esperado
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-700">
                    El lote queda correctamente identificado mediante su
                    etiqueta QR oficial, disponible para operaciones de
                    movimiento, consulta y seguimiento.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-amber-600" />
                    <h3 className="font-black text-slate-950">
                      Errores frecuentes
                    </h3>
                  </div>
                  <ul className="space-y-1 text-sm leading-6 text-slate-700">
                    <li>• Imprimir la etiqueta de un lote equivocado.</li>
                    <li>• No revisar la vista previa antes de imprimir.</li>
                    <li>• Usar una etiqueta dañada o ilegible.</li>
                    <li>• Pegar la etiqueta en un lote incorrecto.</li>
                    <li>• No verificar la lectura del QR después de imprimir.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-green-700" />
                    <h3 className="font-black text-slate-950">
                      Buenas prácticas
                    </h3>
                  </div>
                  <ul className="space-y-1 text-sm leading-6 text-slate-700">
                    <li>• Imprimir el QR inmediatamente después del registro.</li>
                    <li>• Confirmar que el código corresponde al lote.</li>
                    <li>• Mantener la etiqueta protegida de humedad y suciedad.</li>
                    <li>• No reutilizar etiquetas de otros lotes.</li>
                    <li>• Reimprimir cualquier etiqueta deteriorada.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}