import Button from "./Button";

export default function CalculatorNumberPad() {
  return (
    <div className="calculator-number-pad 
    bg-[#181f32] text-white 
    rounded-md grid grid-cols-4 grid-rows-5 gap-4 p-4">
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button color="#fff" backgroundColor="#647299">DEL</Button>

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

      <Button>&nbsp;</Button>
      <Button>&nbsp;</Button>
      <Button>&nbsp;</Button>
      <Button>&nbsp;</Button>
    </div>
  );
}
