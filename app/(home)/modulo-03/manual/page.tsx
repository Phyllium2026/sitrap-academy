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

export default function ManualModulo03Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5] px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/modulo-03"
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Volver al Módulo 03
          </Link>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-green-800 px-6 py-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                <BookOpen size={15} />
                MANUAL PASO A PASO
              </div>

              <h1 className="mt-3 text-3xl font-black">
                Módulo 03 — Registro de Movimientos del Lote
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-green-50">
                Guía operacional para registrar correctamente un movimiento
                utilizando la lectura del código QR del lote.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="space-y-4">
                <ManualStep
                  numero="01"
                  titulo="Ingresar al módulo Registrar Movimiento"
                  imagen="/Manual/modulo-03/paso-01-ingreso.jpg"
                  descripcion="Accede al módulo de movimientos desde la pantalla principal de SITRAP."
                  consejo="Verifica que estés trabajando sobre el vivero correcto."
                  resultado="Formulario de movimientos abierto."
                />

                <ManualStep
                  numero="02"
                  titulo="Escanear el código QR"
                  imagen="/Manual/modulo-03/paso-02-qr.jpg"
                  descripcion="Utiliza la cámara del dispositivo para leer la etiqueta QR del lote."
                  advertencia="Si el QR no puede leerse, reemplaza la etiqueta antes de continuar."
                />

                <ManualStep
                  numero="03"
                  titulo="Confirmar el lote"
                  imagen="/Manual/modulo-03/paso-03-lote.jpg"
                  descripcion="Verifica que la información cargada corresponda exactamente al lote físico."
                  consejo="Confirma especie, vivero y contenedor."
                />

                <ManualStep
                  numero="04"
                  titulo="Seleccionar el movimiento"
                  imagen="/Manual/modulo-03/paso-04-movimiento.jpg"
                  descripcion="Selecciona el tipo de movimiento que será registrado."
                  advertencia="Escoge siempre el movimiento que realmente se ejecutó."
                />

                <ManualStep
                  numero="05"
                  titulo="Completar la información"
                  imagen="/Manual/modulo-03/paso-05-datos.jpg"
                  descripcion="Completa los antecedentes solicitados por el formulario."
                  consejo="Revisa toda la información antes de guardar."
                />

                <ManualStep
                  numero="06"
                  titulo="Guardar el movimiento"
                  imagen="/Manual/modulo-03/paso-06-guardar.jpg"
                  descripcion="Confirma el registro del movimiento para actualizar la trazabilidad."
                  resultado="Movimiento registrado correctamente en SITRAP."
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
                    El movimiento queda registrado correctamente y el historial
                    del lote se actualiza automáticamente.
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
                    <li>• Registrar el movimiento en un lote incorrecto.</li>
                    <li>• No revisar la información antes de guardar.</li>
                    <li>• Escanear un QR deteriorado.</li>
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
                    <li>• Utilizar siempre lectura QR.</li>
                    <li>• Confirmar el lote antes de registrar.</li>
                    <li>• Registrar inmediatamente el movimiento.</li>
                    <li>• Mantener las etiquetas QR en buen estado.</li>
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
