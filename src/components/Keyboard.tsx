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
    return "bg-yellow-400 text-amber-950";
  }

  if (state === "absent") {
    return "bg-stone-300 text-stone-700";
  }

  return "bg-amber-100 text-amber-950";
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
        <div key={rowIndex} className="flex justify-center gap-1.5 sm:gap-2">
          {row.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onKey(key)}
              disabled={disabled}
              className={`rounded-lg px-2 py-3 text-[11px] font-bold tracking-wide transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-55 sm:px-3 sm:text-sm ${key === "ENTER" || key === "BACK" ? "min-w-16" : "min-w-8"
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
