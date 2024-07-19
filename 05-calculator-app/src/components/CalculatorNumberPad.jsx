import Button from "./Button";

export default function CalculatorNumberPad({
  className,
  onNumber,
  onDelete,
  onReset,
  onResult,
  onDot,
  onAdd,
  onSubtract,
  onDivide,
  onMultiply,
}) {
  return (
    <div
      className={`${className} calculator-number-pad 
    rounded-md grid grid-cols-4 grid-rows-5 gap-4 p-4 transition-colors`}
    >
      <Button onClick={() => onNumber(7)}>7</Button>
      <Button onClick={() => onNumber(8)}>8</Button>
      <Button onClick={() => onNumber(9)}>9</Button>
      <Button onClick={onDelete} type="command">
        del
      </Button>

      <Button onClick={() => onNumber(4)}>4</Button>
      <Button onClick={() => onNumber(5)}>5</Button>
      <Button onClick={() => onNumber(6)}>6</Button>
      <Button onClick={onAdd}>+</Button>

      <Button onClick={() => onNumber(1)}>1</Button>
      <Button onClick={() => onNumber(2)}>2</Button>
      <Button onClick={() => onNumber(3)}>3</Button>
      <Button onClick={onSubtract}>-</Button>

      <Button onClick={onDot}>.</Button>
      <Button onClick={() => onNumber(0)}>0</Button>
      <Button onClick={onDivide}>/</Button>
      <Button onClick={onMultiply}>x</Button>

      <Button onClick={onReset} type="command" className="col-span-2">
        reset
      </Button>
      <Button onClick={onResult} type="equal" className="col-span-2">
        =
      </Button>
    </div>
  );
}
