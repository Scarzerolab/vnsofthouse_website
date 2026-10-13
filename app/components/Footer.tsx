import Logo from "./Logo";

const LINKS = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="bg-parchment px-[22px] pb-10 pt-12 text-ink-80">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-hairline pb-5">
          <div className="flex items-center gap-2.5">
            <Logo height={28} />
            <div>
              <div className="t-caption-strong text-ink">VNsoftshouse</div>
              <div className="t-fine text-ink-48">Visioneer Nusantara Software House</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-[22px]">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href} className="t-fine text-ink-80">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="t-fine pt-4 text-ink-48">
          © 2026 Visioneer Nusantara Software House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
