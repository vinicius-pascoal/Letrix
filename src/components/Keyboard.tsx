type KeyStatus = "correct" | "present" | "absent";

interface KeyboardProps {
  onKey: (key: string) => void;
  disabled: boolean;
  keyStates: Record<string, KeyStatus>;
}

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"],
];

function stateClass(state?: KeyStatus): string {
  if (state === "correct") {
    return "bg-emerald-600 text-white";
  }

  if (state === "present") {
    return "bg-amber-500 text-slate-950";
  }

  if (state === "absent") {
    return "bg-slate-700 text-slate-200";
  }

  return "bg-slate-800 text-slate-100";
}

function label(key: string): string {
  if (key === "BACK") {
    return "APAGAR";
  }

  if (key === "ENTER") {
    return "ENVIAR";
  }

  return key;
}

export function Keyboard({ onKey, disabled, keyStates }: KeyboardProps) {
  return (
    <section className="w-full space-y-2">
      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 sm:gap-1.5 lg:gap-2">
          {row.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onKey(key)}
              disabled={disabled}
              className={`rounded-lg border border-slate-600/70 px-1.5 py-2.5 text-[10px] font-bold tracking-wide transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-55 sm:px-2.5 sm:py-3 sm:text-xs lg:text-sm ${key === "ENTER" || key === "BACK" ? "min-w-14 sm:min-w-16 lg:min-w-18" : "min-w-7 sm:min-w-8 lg:min-w-10"
                } ${stateClass(keyStates[key])}`}
            >
              {label(key)}
            </button>
          ))}
        </div>
      ))}
    </section>
  );
}
