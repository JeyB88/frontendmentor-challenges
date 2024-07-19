import { useTheme } from "../contexts/theme";

export default function Button({ type = "default", className, children }) {
  const { theme } = useTheme();
  const colorVariants = {
    "default-t1": "bg-key-default-background-t1 shadow-key-default-shadow-t1 hover:shadow-key-default-shadow-t1 focus:shadow-key-default-shadow-t1 active:shadow-key-default-shadow-t1 text-text-key-default-t1",
    "command-t1": "uppercase bg-key-command-background-t1 shadow-key-command-shadow-t1 hover:shadow-key-command-shadow-t1 focus:shadow-key-command-shadow-t1 active:shadow-key-command-shadow-t1 text-text-default-t1",
    "equal-t1": "bg-key-equal-background-t1 shadow-key-equal-shadow-t1 hover:shadow-key-equal-shadow-t1 focus:shadow-key-equal-shadow-t1 active:shadow-key-equal-shadow-t1 text-text-default-t1"
  }

  const colorVariantKey = `${type}-${theme}`;
  return (
    <button
      className={`hover:-translate-y-1 focus:-translate-y-1 focus:outline-none active:translate-y-0 active:shadow-[0_2px_0] hover:shadow-[0_4px_0] focus:shadow-[0_4px_0] transition-all py-2 rounded text-2xl font-semibold shadow-[0_2px_0] ${colorVariants[colorVariantKey]} ${className}`}
    >
      {children}
    </button>
  );
}
