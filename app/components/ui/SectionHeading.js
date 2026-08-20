export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}