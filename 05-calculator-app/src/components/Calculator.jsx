import CalculatorOptions from "./CalculatorOptions";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorNumberPad from "./CalculatorNumberPad";
import { useEffect } from "react";
import { useTheme } from "../contexts/theme";

const mainColorVariants = {
  t1: "bg-main-background-t1",
  t2: "bg-main-background-t2",
  t3: "bg-main-background-t3",
};

const displayStyles = {
  t1: "bg-screen-background-t1 text-white",
  t2: "bg-screen-background-t2",
  t3: "bg-screen-background-t3",
};

const numberPadStyles = {
  t1: "bg-screen-background-t1 text-white",
  t2: "bg-screen-background-t2",
  t3: "bg-screen-background-t3",
};

export default function Calculator() {
  const { theme } = useTheme();
  useEffect(() => {
    let toReplace = null;
    if (document.body.classList.contains("bg-main-background-t1")) {
      toReplace = "bg-main-background-t1";
    } else if (document.body.classList.contains("bg-main-background-t2")) {
      toReplace = "bg-main-background-t2";
    } else if (document.body.classList.contains("bg-main-background-t3")) {
      toReplace = "bg-main-background-t3";
    }

    if (toReplace) {
      document.body.classList.replace(toReplace, mainColorVariants[theme]);
    } else {
      document.body.classList.add(mainColorVariants[theme]);
    }
  }, [theme]);

  return (
    <div className="calculator w-[25rem] space-y-[1rem]">
      <CalculatorOptions />
      <CalculatorDisplay className={`${displayStyles[theme]}`} />
      <CalculatorNumberPad className={`${numberPadStyles[theme]}`} />
    </div>
  );
}
