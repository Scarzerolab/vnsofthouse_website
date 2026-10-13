import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-white px-[22px] pt-24 text-center max-[640.98px]:pt-12"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center">
        <div className="t-eyebrow mb-3">Visioneer Nusantara Software House</div>
        <h1 className="t-hero">
          Software, envisioned.
          <br />
          Built to move you forward.
        </h1>
        <p className="t-lead mt-5 max-w-[640px]">
          Mobile apps, websites, ERP, AI automation and blockchain — designed
          and engineered by one focused team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-[14px]">
          <a
            href="#contact"
            className="btn rounded-full bg-primary px-[22px] py-[11px] text-white"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="btn rounded-full border border-primary px-[21px] py-2.5 text-primary"
          >
            Explore services
          </a>
        </div>
        <Placeholder
          label="hero render — product UI on laptop + phone"
          ratio="16/8"
          chip
          className="mt-16 w-full max-w-[880px] shadow-[3px_5px_30px_0_rgba(0,0,0,0.22)]"
        />
      </div>
    </section>
  );
}
