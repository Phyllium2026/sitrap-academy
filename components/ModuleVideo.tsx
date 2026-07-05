type ModuleVideoProps = {
  title: string;
  description: string;
  src: string;
};

export default function ModuleVideo({
  title,
  description,
  src,
}: ModuleVideoProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-1 mb-3 text-sm text-slate-600">
        {description}
      </p>

      <video
        controls
        preload="metadata"
        className="w-full rounded-xl border border-slate-200"
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta video.
      </video>
    </div>
  );
}