import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({
  className,
  label,
  error,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="flex w-full flex-col gap-2">
      {label ? (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      ) : null}
      <input
        id={inputId}
        className={cn(
          "h-12 w-full rounded-2xl border border-white/10 bg-surface px-4 text-foreground outline-none transition-all duration-200",
          "placeholder:text-muted/70 focus:border-white/30 focus:ring-2 focus:ring-white/10",
          error && "border-red-400/50 focus:border-red-400/70 focus:ring-red-400/10",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-red-300">{error}</span> : null}
    </label>
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export function Textarea({
  className,
  label,
  error,
  id,
  ...props
}: TextareaProps) {
  const inputId = id ?? props.name;

  return (
    <label className="flex w-full flex-col gap-2">
      {label ? (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      ) : null}
      <textarea
        id={inputId}
        className={cn(
          "min-h-32 w-full resize-y rounded-2xl border border-white/10 bg-surface px-4 py-3 text-foreground outline-none transition-all duration-200",
          "placeholder:text-muted/70 focus:border-white/30 focus:ring-2 focus:ring-white/10",
          error && "border-red-400/50 focus:border-red-400/70 focus:ring-red-400/10",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-red-300">{error}</span> : null}
    </label>
  );
}
