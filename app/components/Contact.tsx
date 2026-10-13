"use client";

import { useState } from "react";

const TYPES = ["Mobile App", "Website", "ERP", "AI Automation", "Blockchain"];
const FIELD =
  "box-border w-full border border-black/[0.08] bg-white px-5 text-[17px] text-ink placeholder:text-ink-48";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [types, setTypes] = useState<string[]>(["Website"]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const toggle = (t: string) =>
    setTypes((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please tell us about your project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    try {
      // TODO: send — POST { name, email, types, message } to a backend or form service.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setName("");
    setEmail("");
    setMessage("");
    setTypes(["Website"]);
    setErrors({});
    setStatus("idle");
  }

  return (
    <section
      id="contact"
      className="bg-tile-1 px-[22px] py-24 text-white max-[640.98px]:py-12"
    >
      <div className="mx-auto grid max-w-[980px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-14">
        <div>
          <div className="t-eyebrow text-body-muted">Contact us</div>
          <h2 className="t-h2 mt-2.5">Let’s build what’s next.</h2>
          <p className="t-body mt-5 max-w-[400px] text-body-muted">
            Tell us about your idea. We’ll reply within one business day with
            next steps.
          </p>
          <div className="mt-9 flex flex-col gap-[18px]">
            <div>
              <div className="t-fine text-body-muted">Email</div>
              {/* Placeholder, replace. */}
              <a href="mailto:hello@vnsoftshouse.com" className="t-body text-primary-on-dark">
                hello@vnsoftshouse.com
              </a>
            </div>
            <div>
              <div className="t-fine text-body-muted">WhatsApp</div>
              {/* Placeholder, replace. */}
              <a href="#contact" className="t-body text-primary-on-dark">
                +62 000 0000 0000
              </a>
            </div>
            <div>
              <div className="t-fine text-body-muted">Based in</div>
              <div className="t-body">Indonesia · working worldwide</div>
            </div>
          </div>
        </div>

        {status === "sent" ? (
          <div className="rounded-[18px] bg-tile-2 p-10">
            <div className="text-[28px] font-semibold leading-[1.14]">Thank you.</div>
            <p className="t-body mt-3 text-body-muted">
              We’ve received your message and will be in touch within one
              business day.
            </p>
            <button
              type="button"
              onClick={reset}
              className="t-body mt-5 cursor-pointer border-none bg-transparent p-0 text-primary-on-dark"
            >
              Send another ›
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="flex flex-col gap-3">
            <div>
              <input
                aria-label="Full name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!errors.name}
                className={`${FIELD} h-11 rounded-full py-3`}
              />
              {errors.name && <p className="t-caption mt-1.5 px-5">{errors.name}</p>}
            </div>
            <div>
              <input
                aria-label="Email address"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                className={`${FIELD} h-11 rounded-full py-3`}
              />
              {errors.email && <p className="t-caption mt-1.5 px-5">{errors.email}</p>}
            </div>
            <div className="my-1.5 flex flex-wrap gap-2">
              {TYPES.map((t) => {
                const on = types.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(t)}
                    className={`t-caption cursor-pointer rounded-full border px-3.5 py-2 text-white ${on ? "border-primary bg-primary" : "border-white/35 bg-transparent"}`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            <div>
              <textarea
                aria-label="Tell us about your project"
                placeholder="Tell us about your project"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={!!errors.message}
                className={`${FIELD} resize-y rounded-[18px] py-3.5 leading-[1.47]`}
              />
              {errors.message && <p className="t-caption mt-1.5 px-5">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 cursor-pointer self-start rounded-full border-none bg-primary px-7 py-3.5 text-[18px] font-light leading-none tracking-normal text-white disabled:cursor-default disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
            {status === "error" && (
              <p className="t-caption">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
