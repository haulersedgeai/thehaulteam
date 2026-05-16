import { Section } from "@/components/ui/Container";

type Step = { title: string; body: string };

export function Process({ steps, heading = "How It Works" }: { steps: Step[]; heading?: string }) {
  return (
    <Section>
      <div className="max-w-2xl">
        <div className="text-sm font-bold uppercase tracking-wider text-brand">Process</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
      </div>
      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white shadow">
              {i + 1}
            </div>
            <div className="mt-2 text-lg font-bold text-ink">{step.title}</div>
            <p className="mt-1.5 text-sm text-ink/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
