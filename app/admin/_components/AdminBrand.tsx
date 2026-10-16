type AdminBrandProps = {
  layout?: "stacked" | "inline";
};

function AdminBadge() {
  return (
    <span className="rounded-md bg-admin-chip px-2 py-0.5 text-[11px] font-bold tracking-[0.6px] text-admin-chip-ink uppercase">
      Admin
    </span>
  );
}

export function AdminBrand({ layout = "stacked" }: AdminBrandProps) {
  const tile = (
    <span
      aria-hidden="true"
      className="flex size-[46px] items-center justify-center rounded-chip bg-brand font-display text-[23px] font-bold text-on-brand shadow-brand"
    >
      Q
    </span>
  );

  if (layout === "inline") {
    return (
      <div className="flex items-center gap-[13px]">
        {tile}
        <span className="font-display text-[22px] font-bold tracking-[-0.3px] text-on-brand">
          QueueUp
        </span>
        <AdminBadge />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {tile}
      <div className="flex items-center gap-2.5">
        <span className="font-display text-[22px] font-bold tracking-[-0.3px] text-on-brand">
          QueueUp
        </span>
        <AdminBadge />
      </div>
    </div>
  );
}
