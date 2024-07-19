import Button from "./Button";

export default function CalculatorNumberPad({ className }) {
  return (
    <div
      className={`${className} calculator-number-pad 
    rounded-md grid grid-cols-4 grid-rows-5 gap-4 p-4 transition-colors`}
    >
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button type="command">del</Button>

      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>

      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>

      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      <Button>x</Button>

      <Button type="command" className="col-span-2">
        reset
      </Button>
      <Button type="equal" className="col-span-2">
        =
      </Button>
    </div>
  );
}
