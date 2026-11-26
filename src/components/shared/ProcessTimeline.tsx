import { processSteps } from "@/data/process";
import { DrawLine, StaggerItem, StaggerList } from "@/components/motion/Reveal";

/** Five-step process, horizontal timeline on desktop and vertical on mobile. */
export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* connector (desktop), draws itself when scrolled into view */}
      <DrawLine className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-accent-500/60 lg:block" />
      <StaggerList as="ol" className="relative grid gap-0 lg:grid-cols-5 lg:gap-6">
        {processSteps.map((step, i) => {
          const Icon = step.icon;
          const last = i === processSteps.length - 1;
          return (
            <StaggerItem
              key={step.title}
              className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center"
            >
              {/* connector (mobile) */}
              {!last ? (
                <span
                  aria-hidden
                  className="absolute top-14 bottom-0 left-7 w-px bg-gradient-to-b from-brand-300 to-brand-100 lg:hidden"
                />
              ) : null}
              <div className="relative z-10 shrink-0">
                <span
                  className={
                    last
                      ? "grid size-14 place-items-center rounded-2xl bg-accent-500 text-white shadow-[0_10px_24px_-8px_rgb(18_183_106/0.6)]"
                      : "grid size-14 place-items-center rounded-2xl bg-white text-brand-600 shadow-card ring-1 ring-brand-100"
                  }
                >
                  <Icon className="size-6" />
                </span>
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-ink text-[11px] font-bold text-white ring-2 ring-white">
                  {i + 1}
                </span>
              </div>
              <div className="pt-1 lg:pt-6">
                <p className="text-xs font-semibold tracking-wider text-brand-600 uppercase">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted lg:text-sm">{step.summary}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </div>
  );
}
