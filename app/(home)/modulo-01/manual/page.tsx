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

export default function ManualModulo01Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5] px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/modulo-01"
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Volver al Módulo 01
          </Link>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-green-800 px-6 py-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                <BookOpen size={15} />
                MANUAL PASO A PASO
              </div>

              <h1 className="mt-3 text-3xl font-black">
                Módulo 01 — Crear nuevo lote
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-green-50">
                Guía paso a paso para registrar un nuevo lote en SITRAP mediante
                el Formulario E1.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="space-y-4">
                <ManualStep
                  numero="01"
                  titulo="Ingresar a SITRAP"
                  imagen="/Manual/modulo-01/paso-01-inicio-sitrap.jpg"
                  descripcion="Desde la pantalla principal de SITRAP, ingresa al sistema para comenzar el registro del lote."
                  consejo="Antes de iniciar, verifica que tienes la información del lote disponible."
                  resultado="El usuario queda ubicado en la pantalla inicial del sistema."
                />

                <ManualStep
                  numero="02"
                  titulo="Abrir el Formulario E1"
                  imagen="/Manual/modulo-01/paso-02-formulario-e1.jpg"
                  descripcion="Selecciona la opción correspondiente al Formulario E1 para registrar el alta de un nuevo lote."
                  advertencia="Este formulario es solo para crear o regularizar lotes, no para registrar movimientos."
                  resultado="El formulario de registro queda disponible para completar los datos."
                />

                <ManualStep
                  numero="03"
                  titulo="Completar datos generales"
                  imagen="/Manual/modulo-01/paso-03-datos-generales.jpg"
                  descripcion="Registra los antecedentes generales del lote, incluyendo especie, vivero, origen y datos principales."
                  consejo="Revisa cuidadosamente especie, origen y vivero antes de continuar."
                />

                <ManualStep
                  numero="04"
                  titulo="Registrar material de propagación"
                  imagen="/Manual/modulo-01/paso-04-material-propagacion.jpg"
                  descripcion="Completa la información relacionada con el material de propagación utilizado para generar el lote."
                  resultado="El lote queda asociado a sus antecedentes de propagación."
                />

                <ManualStep
                  numero="05"
                  titulo="Ingresar lote producido"
                  imagen="/Manual/modulo-01/paso-05-lote-producido.jpg"
                  descripcion="Registra la cantidad producida, tipo de contenedor y demás información operacional del lote."
                  consejo="La cantidad ingresada debe coincidir con el stock inicial real."
                />

                <ManualStep
                  numero="06"
                  titulo="Regularización si corresponde"
                  imagen="/Manual/modulo-01/paso-06-regularizacion.jpg"
                  descripcion="Completa los campos de regularización cuando se trate de un lote histórico o incorporado posteriormente al sistema."
                  advertencia="Utiliza esta opción solo cuando corresponde regularizar información existente."
                />

                <ManualStep
                  numero="07"
                  titulo="Confirmar registro"
                  imagen="/Manual/modulo-01/paso-07-confirmacion.jpg"
                  descripcion="Revisa la información ingresada y envía el formulario para registrar oficialmente el lote."
                  resultado="El lote queda creado en SITRAP y disponible para generar QR, consultar y registrar movimientos."
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
                    El lote queda registrado correctamente en SITRAP y disponible
                    para generar su etiqueta QR e iniciar su trazabilidad.
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
                    <li>• Confundir vivero con origen del material.</li>
                    <li>• Registrar una especie incorrecta.</li>
                    <li>• Ingresar una cantidad distinta al stock real.</li>
                    <li>• Registrar dos veces el mismo lote.</li>
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
                    <li>• Revisar todos los datos antes de enviar.</li>
                    <li>• Confirmar especie, vivero, contenedor y cantidad.</li>
                    <li>• Generar el QR inmediatamente después del registro.</li>
                    <li>• Verificar luego el lote en consulta.</li>
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
