import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { Step } from "@/types/common";

interface StepsListProps {
  steps: Step[];
  numbered?: boolean;
}

export default function StepsList({ steps, numbered = true }: StepsListProps) {
  const Tag = numbered ? "ol" : "ul";

  return (
    <Tag className="mt-10 grid gap-6 sm:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step.title}>
          <Reveal delay={index * 80}>
            <div className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-piel-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-piel-burgundy text-sm font-semibold text-white">
                {numbered ? (
                  index + 1
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-piel-navy">{step.title}</h3>
                <p className="mt-1 text-sm text-piel-text/75">
                  <RichText text={step.description} />
                </p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </Tag>
  );
}
