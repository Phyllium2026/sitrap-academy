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

export default function ManualModulo04Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5] px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/modulo-04"
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Volver al Módulo 04
          </Link>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-green-800 px-6 py-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                <BookOpen size={15} />
                MANUAL PASO A PASO
              </div>

              <h1 className="mt-3 text-3xl font-black">
                Módulo 04 — Registro de Movimientos del Lote (Recepción)
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-green-50">
                Guía operacional para registrar la recepción de plantas mediante
                lectura QR y Formulario de Movimientos SITRAP.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="space-y-4">
                <ManualStep
                  numero="01"
                  titulo="Inicio del módulo"
                  imagen="/Manual/modulo-04/modulo04-01-inicio.jpg"
                  descripcion="Ingresa al módulo de recepción para iniciar el registro del movimiento del lote."
                  consejo="Antes de comenzar, verifica que el lote físico tenga su etiqueta QR disponible."
                  resultado="El módulo queda listo para iniciar la recepción del lote."
                />

                <ManualStep
                  numero="02"
                  titulo="Lote identificado"
                  imagen="/Manual/modulo-04/modulo04-02-lote-identificado.jpg"
                  descripcion="Escanea el código QR del lote para cargar su información en el formulario de movimientos."
                  consejo="La lectura QR evita errores al seleccionar manualmente el lote."
                  resultado="El lote queda identificado correctamente en SITRAP."
                />

                <ManualStep
                  numero="03"
                  titulo="Seleccionar movimiento Recepción"
                  imagen="/Manual/modulo-04/modulo04-03-recepcion.jpg"
                  descripcion="En el tipo de movimiento, selecciona la opción Recepción en vivero."
                  advertencia="No selecciones Recepción si el movimiento corresponde a traslado, despacho, baja u otra operación."
                  resultado="El sistema reconoce que el movimiento corresponde a una recepción."
                />

                <ManualStep
                  numero="04"
                  titulo="Seleccionar vivero de origen"
                  imagen="/Manual/modulo-04/modulo04-04-origen-vivero.jpg"
                  descripcion="Indica el vivero desde donde proviene el lote que será recibido."
                  consejo="El origen permite mantener la trazabilidad del movimiento entre viveros."
                />

                <ManualStep
                  numero="05"
                  titulo="Seleccionar vivero de destino"
                  imagen="/Manual/modulo-04/modulo04-05-destino-vivero.jpg"
                  descripcion="Selecciona el vivero donde el lote será recibido operacionalmente."
                  advertencia="El destino debe coincidir con el lugar físico donde ingresa el lote."
                />

                <ManualStep
                  numero="06"
                  titulo="Verificar efecto en stock"
                  imagen="/Manual/modulo-04/modulo04-06-efecto-stock.jpg"
                  descripcion="Revisa el efecto del movimiento sobre el stock antes de continuar con el registro."
                  consejo="En una recepción, el stock debe quedar asociado correctamente al vivero de destino."
                  resultado="El movimiento queda validado antes de su envío final."
                />

                <ManualStep
                  numero="07"
                  titulo="Confirmar registro de recepción"
                  imagen="/Manual/modulo-04/modulo04-07-cierre-registro.jpg"
                  descripcion="Finaliza el formulario para dejar registrada la recepción del lote en SITRAP."
                  resultado="La recepción queda registrada correctamente y el lote mantiene su trazabilidad operacional."
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
                    La recepción queda registrada en SITRAP, asociada al lote
                    correcto y disponible en su historial de movimientos.
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
                    <li>• Seleccionar un movimiento distinto a Recepción.</li>
                    <li>• Registrar una cantidad diferente a la recibida.</li>
                    <li>• Asociar la recepción al vivero incorrecto.</li>
                    <li>• Registrar dos veces el mismo movimiento.</li>
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
                    <li>• Usar siempre lectura QR.</li>
                    <li>• Revisar lote, origen y destino antes de enviar.</li>
                    <li>• Registrar la recepción el mismo día.</li>
                    <li>• Mantener respaldo del movimiento físico.</li>
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
