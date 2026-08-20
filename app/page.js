import Link from "next/link";
import StatGrid from "./components/ui/StatGrid";
import SectionHeading from "./components/ui/SectionHeading";

const STATS = [
  { label: "Programs", value: "50+" },
  { label: "Faculty", value: "100+" },
  { label: "Students Enrolled", value: "5,000+" },
  { label: "Nationalities", value: "100+" },
];

const FEATURED_COLLEGES = [
  {
    name: "College of Business Administration",
    slug: "college-of-business-administration",
    description:
      "Shaping future business leaders through accredited undergraduate and graduate programs.",
  },
  {
    name: "College of Engineering and IT",
    slug: "college-of-engineering-and-it",
    description:
      "Hands-on engineering and technology education backed by industry partnerships.",
  },
  {
    name: "College of Architecture, Art and Design",
    slug: "college-of-architecture-art-and-design",
    description:
      "Creative and technical training across architecture, design and the arts.",
  },
];

const LATEST_NEWS = [
  {
    title: "AUE Launches New Scholarship Program for 2026",
    date: "August 2026",
    excerpt:
      "A new merit-based scholarship initiative opens applications for the upcoming academic year.",
  },
  {
    title: "College of Engineering Signs MOU with Industry Partner",
    date: "July 2026",
    excerpt:
      "The partnership creates new internship and research opportunities for students.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="bg-zinc-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Welcome to American University in the Emirates
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Empowering students through internationally accredited programs,
            world-class faculty, and a vibrant campus community in Dubai.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-500"
            >
              Apply Now
            </Link>
            <Link
              href="/academics"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <StatGrid stats={STATS} />
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
        <SectionHeading
          eyebrow="Academics"
          title="Our Colleges"
          subtitle="Explore the colleges shaping the next generation of graduates."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {FEATURED_COLLEGES.map((college) => (
            <Link
              key={college.slug}
              href={`/colleges/${college.slug}`}
              className="rounded-xl border border-black/10 p-6 transition hover:border-blue-500 hover:shadow-md"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {college.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {college.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="px-6 py-20">
        <SectionHeading eyebrow="News" title="Latest at AUE" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {LATEST_NEWS.map((post) => (
            <div
              key={post.title}
              className="rounded-xl border border-black/10 p-6"
            >
              <p className="text-xs font-medium text-zinc-400">{post.date}</p>
              <h3 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-50">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}