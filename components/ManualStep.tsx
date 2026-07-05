import Image from "next/image";
import { AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

type ManualStepProps = {
  numero: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  consejo?: string;
  advertencia?: string;
  resultado?: string;
};

export default function ManualStep({
  numero,
  titulo,
  descripcion,
  imagen,
  consejo,
  advertencia,
  resultado,
}: ManualStepProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[420px_1fr]">
        <div className="bg-slate-50 p-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={imagen}
              alt={titulo}
              width={900}
              height={1600}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-700 text-lg font-black text-white">
              {numero}
            </span>

            <h3 className="text-xl font-black text-slate-950">
              {titulo}
            </h3>
          </div>

          <p className="text-sm leading-6 text-slate-700">
            {descripcion}
          </p>

          <div className="mt-4 space-y-3">
            {consejo && (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-3">
                <div className="mb-1 flex items-center gap-2 text-sm font-black text-green-800">
                  <Lightbulb size={16} />
                  Consejo
                </div>
                <p className="text-sm leading-5 text-slate-700">
                  {consejo}
                </p>
              </div>
            )}

            {advertencia && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                <div className="mb-1 flex items-center gap-2 text-sm font-black text-amber-700">
                  <AlertTriangle size={16} />
                  Atención
                </div>
                <p className="text-sm leading-5 text-slate-700">
                  {advertencia}
                </p>
              </div>
            )}

            {resultado && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="mb-1 flex items-center gap-2 text-sm font-black text-slate-800">
                  <CheckCircle2 size={16} className="text-green-700" />
                  Resultado
                </div>
                <p className="text-sm leading-5 text-slate-700">
                  {resultado}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}