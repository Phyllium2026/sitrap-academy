import Link from "next/link";
import Header from "@/components/Header";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  LucideIcon,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

type VideoStep = {
  title: string;
  description: string;
  video: string;
};

type TrainingModulePageProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  time?: string;
  level?: string;
  progress?: string;
  steps?: string[];
  videos?: VideoStep[];
  expectedResult: string;
  observations: string[];
  bestPractices: string[];
  previousHref?: string;
  nextHref?: string;
  nextLabel?: string;
};

export default function TrainingModulePage({
  number,
  title,
  description,
  icon: Icon,
  time,
  level,
  progress,
  steps = [],
  videos = [],
  expectedResult,
  observations,
  bestPractices,
  previousHref = "/",
  nextHref = "/",
  nextLabel = "Siguiente módulo",
}: TrainingModulePageProps) {
  const mainVideo = videos[0];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
                >
                  <ArrowLeft size={16} />
                  Volver
                </Link>

                <div className="hidden items-center gap-2 text-xs font-bold md:flex">
                  {time && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-green-800 ring-1 ring-green-100">
                      <Clock size={14} />
                      {time}
                    </span>
                  )}

                  {level && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      <FileText size={14} />
                      {level}
                    </span>
                  )}

                  {progress && (
                    <span className="rounded-full bg-green-700 px-3 py-1 text-white">
                      {progress}
                    </span>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-800 ring-1 ring-green-100">
                <Icon size={14} />
                MÓDULO {number}
              </div>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                {title}
              </h1>

              <p className="mt-2 max-w-5xl text-base leading-6 text-slate-600">
                {description}
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_340px]">
              <div className="space-y-5">
                {mainVideo && (
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-2">
                      <PlayCircle size={20} className="text-green-700" />
                      <h2 className="text-lg font-black text-slate-950">
                        Video del módulo
                      </h2>
                    </div>

                    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-black shadow">
                      <video
                        src={mainVideo.video}
                        controls
                        preload="metadata"
                        className="aspect-video w-full bg-black"
                      />
                    </div>

                    <div className="mx-auto mt-3 max-w-3xl">
                      <h3 className="text-base font-black text-slate-950">
                        {mainVideo.title}
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-slate-600">
                        {mainVideo.description}
                      </p>
                    </div>
                  </div>
                )}

                {steps.length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-3 text-lg font-black text-slate-950">
                      Procedimiento paso a paso
                    </h2>

                    <ol className="grid gap-2 md:grid-cols-2">
                      {steps.map((step, index) => (
                        <li
                          key={step}
                          className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-black text-white">
                            {index + 1}
                          </span>

                          <p className="text-sm leading-5 text-slate-700">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              <aside className="space-y-3">
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-700" />
                    <h3 className="text-sm font-black text-slate-950">
                      Resultado esperado
                    </h3>
                  </div>

                  <p className="text-sm leading-5 text-slate-700">
                    {expectedResult}
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-amber-600" />
                    <h3 className="text-sm font-black text-slate-950">
                      Observaciones
                    </h3>
                  </div>

                  <ul className="space-y-1 text-sm leading-5 text-slate-700">
                    {observations.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-green-700" />
                    <h3 className="text-sm font-black text-slate-950">
                      Buenas prácticas
                    </h3>
                  </div>

                  <ul className="space-y-1 text-sm leading-5 text-slate-700">
                    {bestPractices.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4">
              <Link
                href={previousHref}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                <ArrowLeft size={16} />
                Anterior
              </Link>

              <Link
                href={nextHref}
                className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
              >
                {nextLabel}
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}