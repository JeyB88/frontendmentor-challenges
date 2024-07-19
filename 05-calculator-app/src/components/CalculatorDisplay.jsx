export default function CalculatorDisplay({value, className}) {
  return (
    <div className={`${className} calculator-display min-h-[84px] transition-colors py-6 px-4 rounded-md`}>
      <div className="text-3xl font-bold text-right">{value}</div>
    </div>
  );
}
