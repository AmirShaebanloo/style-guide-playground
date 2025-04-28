
import { cn } from "@/lib/utils";

interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
}

export function Code({ code, language = "html", className, ...props }: CodeProps) {
  return (
    <div className="relative group">
      <pre
        className={cn(
          "p-4 rounded-lg bg-slate-950 text-slate-50 overflow-x-auto text-sm",
          className
        )}
        {...props}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
