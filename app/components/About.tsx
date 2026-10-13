import Logo from "./Logo";

const VALUES = [
  ["Vision first", "We start with your goals, not a tech stack. Every build has a reason."],
  ["Engineered to last", "Clean architecture, documented code and systems your team can grow."],
  ["Partners, not vendors", "Transparent timelines, weekly demos, and support after launch."],
];

const STEPS = [
  ["01", "Discover", "We map goals, users and scope."],
  ["02", "Design", "Flows and interfaces you can click through."],
  ["03", "Build", "Iterative sprints with weekly demos."],
  ["04", "Launch & support", "Deployment, monitoring and care."],
];

export default function About() {
  return (
    <section id="about" className="bg-white px-[22px] py-24 max-[640.98px]:py-12">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center text-center">
          <div className="mb-7">
            <Logo height={72} alt="VN logo" />
          </div>
          <div className="t-eyebrow text-ink-48">About us</div>
          <h2 className="t-h2 mt-2.5">A new studio with a clear vision.</h2>
          <p className="t-lead-airy mt-6 max-w-[760px]">
            Visioneer Nusantara is a software house from Indonesia. We started VN
            to give businesses a partner that thinks like a product team —
            curious about the problem, careful with the craft, and accountable
            for the result.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          {VALUES.map(([title, body]) => (
            <div key={title} className="rounded-[18px] bg-parchment p-8">
              <div className="t-eyebrow">{title}</div>
              <p className="t-body mt-2.5 text-ink-80">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5 border-t border-hairline pt-8">
          {STEPS.map(([n, title, body]) => (
            <div key={n}>
              <div className="t-caption-strong text-primary">{n}</div>
              <div className="t-body-strong mt-1.5">{title}</div>
              <div className="t-caption mt-1 text-ink-80">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
