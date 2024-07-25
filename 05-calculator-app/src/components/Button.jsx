import { useTheme } from "../contexts/theme";

export default function Button({
  type = "default",
  className,
  onClick,
  children,
}) {
  const { theme } = useTheme();
  const colorVariants = {
    "default-t1":
      "bg-key-default-background-t1 shadow-key-default-shadow-t1 hover:shadow-key-default-shadow-t1 focus-visible:shadow-key-default-shadow-t1 active:shadow-key-default-shadow-t1 text-text-key-default-t1",
    "command-t1":
      "uppercase bg-key-command-background-t1 shadow-key-command-shadow-t1 hover:shadow-key-command-shadow-t1 focus-visible:shadow-key-command-shadow-t1 active:shadow-key-command-shadow-t1 text-text-key-command-t1",
    "equal-t1":
      "bg-key-equal-background-t1 shadow-key-equal-shadow-t1 hover:shadow-key-equal-shadow-t1 focus-visible:shadow-key-equal-shadow-t1 active:shadow-key-equal-shadow-t1 text-text-key-equal-t1",

    "default-t2":
      "bg-key-default-background-t2 shadow-key-default-shadow-t2 hover:shadow-key-default-shadow-t2 focus-visible:shadow-key-default-shadow-t2 active:shadow-key-default-shadow-t2 text-text-key-default-t2",
    "command-t2":
      "uppercase bg-key-command-background-t2 shadow-key-command-shadow-t2 hover:shadow-key-command-shadow-t2 focus-visible:shadow-key-command-shadow-t2 active:shadow-key-command-shadow-t2 text-text-key-command-t2",
    "equal-t2":
      "bg-key-equal-background-t2 shadow-key-equal-shadow-t2 hover:shadow-key-equal-shadow-t2 focus-visible:shadow-key-equal-shadow-t2 active:shadow-key-equal-shadow-t2 text-text-key-equal-t2",

    "default-t3":
      "bg-key-default-background-t3 shadow-key-default-shadow-t3 hover:shadow-key-default-shadow-t3 focus-visible:shadow-key-default-shadow-t3 active:shadow-key-default-shadow-t3 text-text-key-default-t3",
    "command-t3":
      "uppercase bg-key-command-background-t3 shadow-key-command-shadow-t3 hover:shadow-key-command-shadow-t3 focus-visible:shadow-key-command-shadow-t3 active:shadow-key-command-shadow-t3 text-text-key-command-t3",
    "equal-t3":
      "bg-key-equal-background-t3 shadow-key-equal-shadow-t3 hover:shadow-key-equal-shadow-t3 focus-visible:shadow-key-equal-shadow-t3 active:shadow-key-equal-shadow-t3 text-text-key-equal-t3",
  };

  const colorVariantKey = `${type}-${theme}`;
  return (
    <button
      onClick={onClick}
      className={`hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none active:translate-y-0 active:shadow-[0_2px_0] hover:shadow-[0_4px_0] focus-visible:shadow-[0_4px_0] transition-all py-2 rounded text-2xl font-semibold shadow-[0_2px_0] ${colorVariants[colorVariantKey]} ${className}`}
    >
      {children}
    </button>
  );
}
