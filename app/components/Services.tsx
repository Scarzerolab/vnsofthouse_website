import Placeholder from "./Placeholder";

// Switch the services layout here.
const SERVICES_LAYOUT: "tiles" | "grid" = "tiles";

type Service = {
  num: string;
  name: string;
  headline: string;
  desc: string;
  cta: string;
  line: string;
  shot: string;
  gridShot: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    name: "Mobile App",
    headline: "Native feel. Every platform.",
    desc: "iOS and Android apps built for speed, polish and the long run — from MVP to app-store launch.",
    cta: "Discuss your app ›",
    line: "iOS and Android apps, from MVP to store launch.",
    shot: "phone mockups — app screens",
    gridShot: "app screens",
  },
  {
    num: "02",
    name: "Website",
    headline: "Fast. Findable. Yours.",
    desc: "Company sites, landing pages and web platforms with clean design, strong SEO and a CMS your team can use.",
    cta: "Plan a website ›",
    line: "Fast, SEO-ready sites and web platforms.",
    shot: "browser mockup",
    gridShot: "browser mockup",
  },
  {
    num: "03",
    name: "ERP",
    headline: "Your whole operation, one system.",
    desc: "Custom ERP for inventory, finance, HR and sales — shaped around how your business actually works.",
    cta: "Scope an ERP ›",
    line: "Inventory, finance, HR and sales in one system.",
    shot: "dashboard screenshot",
    gridShot: "dashboard",
  },
  {
    num: "04",
    name: "AI Automation",
    headline: "Let the routine run itself.",
    desc: "AI agents, chatbots and workflow automation that cut manual work and connect the tools you already use.",
    cta: "Automate a workflow ›",
    line: "Agents, chatbots and automated workflows.",
    shot: "workflow / agent visual",
    gridShot: "workflow visual",
  },
  {
    num: "05",
    name: "Blockchain Application",
    headline: "Trust, written into code.",
    desc: "Smart contracts, dApps and tokenized systems — audited logic for transparent, tamper-proof records.",
    cta: "Explore blockchain ›",
    line: "Smart contracts, dApps and tokenized systems.",
    shot: "dApp interface",
    gridShot: "dApp interface",
  },
];

const [MOBILE, WEBSITE, ERP, AI, CHAIN] = SERVICES;

function Tile({
  s,
  bg,
  dark,
  tone,
}: {
  s: Service;
  bg: string;
  dark?: boolean;
  tone: "light" | "white" | "dark";
}) {
  return (
    <section
      className={`flex flex-col items-center overflow-hidden px-8 pt-20 text-center max-[640.98px]:pt-12 ${dark ? "text-white" : ""}`}
      style={{ background: bg }}
    >
      <div className={`t-caption-strong ${dark ? "text-body-muted" : "text-ink-48"}`}>
        {s.num} — {s.name}
      </div>
      <h3 className="t-tile-h3 mt-2.5">{s.headline}</h3>
      <p className={`t-body mt-3 max-w-[420px] ${dark ? "text-body-muted" : "text-ink-80"}`}>
        {s.desc}
      </p>
      <a
        href="#contact"
        className={`t-body mt-4 ${dark ? "text-primary-on-dark" : ""}`}
      >
        {s.cta}
      </a>
      <Placeholder
        label={s.shot}
        ratio="4/3"
        tone={tone}
        className="mt-10 w-full max-w-[440px]"
      />
    </section>
  );
}

function Tiles() {
  return (
    <>
      <section className="overflow-hidden bg-tile-1 px-[22px] pt-20 text-center text-white max-[640.98px]:pt-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center">
          <div className="t-caption-strong text-body-muted">
            {MOBILE.num} — {MOBILE.name}
          </div>
          <h3 className="t-tile-h3-lg mt-2.5">{MOBILE.headline}</h3>
          <p className="t-lead-airy mt-3 max-w-[600px] text-body-muted">
            {MOBILE.desc}
          </p>
          <a href="#contact" className="t-body mt-5 text-primary-on-dark">
            {MOBILE.cta}
          </a>
          <Placeholder
            label={MOBILE.shot}
            ratio="5/3"
            tone="dark"
            className="mt-12 w-full max-w-[520px]"
          />
        </div>
      </section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]">
        <Tile s={WEBSITE} bg="#ffffff" tone="light" />
        <Tile s={ERP} bg="#f5f5f7" tone="white" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]">
        <Tile s={AI} bg="#2a2a2c" dark tone="dark" />
        <Tile s={CHAIN} bg="#252527" dark tone="dark" />
      </div>
    </>
  );
}

function Grid() {
  return (
    <section className="bg-parchment px-[22px] pb-20 max-[640.98px]:pb-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5">
        {SERVICES.map((s) => (
          <a
            key={s.num}
            href="#contact"
            className="flex flex-col gap-2.5 rounded-[18px] border border-hairline bg-white p-6 text-ink no-underline hover:no-underline"
          >
            <Placeholder
              label={s.gridShot}
              ratio="1/1"
              stripe={10}
              radius="8px"
              fontSize={12}
              className="mb-2"
            />
            <div className="t-fine text-ink-48">{s.num}</div>
            <div className="t-body-strong">{s.name}</div>
            <div className="t-caption text-ink-80">{s.line}</div>
            <div className="t-caption mt-auto pt-1.5 text-primary">Learn more ›</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="bg-parchment px-[22px] py-20 text-center max-[640.98px]:py-12"
      >
        <div className="mx-auto max-w-[980px]">
          <div className="t-eyebrow text-ink-48">Services</div>
          <h2 className="t-h2 mt-2.5">Five disciplines. One team.</h2>
          <p className="t-body mx-auto mt-4 max-w-[620px] text-ink-80">
            From the first sketch to production and beyond, we design, build and
            maintain the software your business runs on.
          </p>
        </div>
      </section>
      {SERVICES_LAYOUT === "tiles" ? <Tiles /> : <Grid />}
    </>
  );
}
