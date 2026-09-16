export default function SectionHeader({ label, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className="font-mono text-xs tracking-[0.35em] text-red-500 mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-red-300"></div>
      {description && (
        <p className="mt-5 text-slate-400 text-sm md:text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}
