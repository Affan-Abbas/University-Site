import Link from "next/link";

export default function Footer() {  
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black">
          <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">AUE</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              American University in the Emirates
            </p>
          </div>
          <div>
            <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Quick Links</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link href="/academics" className="hover:text-blue-500">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-blue-500">Admissions</Link></li>
              <li><Link href="/research" className="hover:text-blue-500">Research</Link></li>
              <li><Link href="/student-life" className="hover:text-blue-500">Student Life</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Contact</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Academic City, Dubai, UAE<br />
              Email: info@aue.ae
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {year} American University in the Emirates. All rights reserved.
        </div>
      </div>
    </footer>
    );
}
        