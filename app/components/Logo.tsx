import Image from "next/image";

// VN_logo.svg viewBox is 4944x4048; set height, width follows.
export default function Logo({ height, alt = "VN" }: { height: number; alt?: string }) {
  return (
    <Image
      src="/VN_logo.svg"
      alt={alt}
      height={height}
      width={Math.round((height * 4944) / 4048)}
      style={{ height, width: "auto" }}
      priority
    />
  );
}
