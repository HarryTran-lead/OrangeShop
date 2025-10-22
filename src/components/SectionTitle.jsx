export default function SectionTitle({
  kicker,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {kicker && (
        <p className="uppercase tracking-widest text-xs sm:text-sm text-amber-600 dark:text-amber-400 font-semibold">
          {kicker}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">{title}</h2>
      )}
      {subtitle && (
        <p className="mt-3 text-gray-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
