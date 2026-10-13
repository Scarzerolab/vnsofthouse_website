"use client";

import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-11 bg-black">
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between gap-6 px-[22px]">
        <a
          href="#home"
          className="flex items-center gap-2 no-underline hover:no-underline"
        >
          <Logo height={22} />
          <span className="t-fine font-semibold text-white">VNsoftshouse</span>
        </a>
        <div className="flex items-center gap-[22px]">
          <div className="flex gap-[22px] max-[833.98px]:hidden">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href} className="t-fine text-white/85">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="btn t-fine rounded-full bg-primary px-3 py-[5px] text-white no-underline hover:no-underline"
          >
            Start a project
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((o) => !o)}
            className="hidden h-8 w-8 flex-col items-center justify-center gap-[5px] max-[833.98px]:flex"
          >
            <span className="h-px w-[18px] bg-white" />
            <span className="h-px w-[18px] bg-white" />
          </button>
        </div>
      </div>
      {open && (
        <div
          id="nav-menu"
          className="absolute inset-x-0 top-11 hidden flex-col gap-4 bg-black px-[22px] pb-5 pt-2 max-[833.98px]:flex"
        >
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[17px] text-white/85"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
