type BrandMarkProps = {
  size?: "md" | "lg";
  inverse?: boolean;
};

const sizes = {
  md: { tile: "size-9 rounded-logo-sm text-lg", name: "text-[19px]", gap: "gap-[11px]" },
  lg: { tile: "size-[46px] rounded-chip text-[23px]", name: "text-[22px]", gap: "gap-[13px]" },
};

export function BrandMark({ size = "md", inverse = false }: BrandMarkProps) {
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center ${s.gap}`}>
      <span
        aria-hidden="true"
        className={[
          "flex items-center justify-center font-display font-bold",
          s.tile,
          inverse ? "bg-on-brand text-brand" : "bg-brand text-on-brand",
        ].join(" ")}
      >
        Q
      </span>
      <span
        className={[
          "font-display font-bold tracking-[-0.3px]",
          s.name,
          inverse ? "text-on-brand" : "text-ink",
        ].join(" ")}
      >
        QueueUp
      </span>
    </span>
  );
}
