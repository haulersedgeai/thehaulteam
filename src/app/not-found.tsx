import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <div className="text-sm font-bold uppercase tracking-wider text-brand">404</div>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">
          We hauled that page off by mistake.
        </h1>
        <p className="mt-4 text-ink/70">
          The page you're looking for isn't here. Maybe try one of these:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">All Services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
