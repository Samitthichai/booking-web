import { AlertCircleIcon, AlertTriangleIcon, CheckCircleIcon } from "./icons";

const tones = {
  error: {
    box: "border-danger-line bg-danger-soft",
    icon: "text-danger",
    text: "text-danger-ink",
    Icon: AlertCircleIcon,
    role: "alert",
  },
  warning: {
    box: "border-warning-line bg-warning-soft",
    icon: "text-warning",
    text: "text-warning-ink",
    Icon: AlertTriangleIcon,
    role: "status",
  },
  success: {
    box: "border-success-line bg-success-soft",
    icon: "text-success",
    text: "text-success-ink",
    Icon: CheckCircleIcon,
    role: "status",
  },
} as const;

export type InfoBoxTone = keyof typeof tones;

type InfoBoxProps = {
  tone?: InfoBoxTone;
  description: string | React.ReactNode;
  className?: string;
};

export function InfoBox({
  tone = "error",

  className = "",
  description = "",
}: InfoBoxProps) {
  const t = tones[tone];
  return (
    <div
      role={t.role}
      className={`flex items-center gap-[11px] rounded-md border px-2 py-2.5 ${t.box} ${className}`}
    >
      <t.Icon width={18} height={18} className={`shrink-0 ${t.icon}`} />
      <p className={`text-[13.5px] ${t.text}`}>{description}</p>
    </div>
  );
}
