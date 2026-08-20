export default function StatGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold text-blue-600 sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}