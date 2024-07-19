import CalculatorOptions from "./CalculatorOptions";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorNumberPad from "./CalculatorNumberPad";

export default function Calculator() {
  return (
    <div className="calculator w-[25rem] space-y-[1rem]">
      <CalculatorOptions />
      <CalculatorDisplay />
      <CalculatorNumberPad />
    </div>
  );
}
