import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <img src="/next.svg" alt="Next.js Logo" width={48} height={48} />
        </div>

        <ol className="list-decimal list-inside text-sm text-center sm:text-left font-mono">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 flex items-center gap-2"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/vercel.svg" alt="Vercel Logo" width={48} height={48} />
            Deploy now
          </a>

          <a
            className="rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm">
        <FooterLink href="https://nextjs.org/learn" icon="/file.svg" text="Learn" />
        <FooterLink href="https://vercel.com/templates" icon="/window.svg" text="Examples" />
        <FooterLink href="https://nextjs.org" icon="/globe.svg" text="Go to nextjs.org →" />
      </footer>
    </div>
  );
}

function FooterLink({
  href,
  icon,
  text,
}: {
  href: string;
  icon: string;
  text: string;
}) {
  return (
    <a
      className="flex items-center gap-2 hover:underline underline-offset-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img aria-hidden src={icon} alt="" width={48} height={48} />
      {text}
    </a>
  );
}
