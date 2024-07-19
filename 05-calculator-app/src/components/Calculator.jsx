import CalculatorOptions from "./CalculatorOptions";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorNumberPad from "./CalculatorNumberPad";
import { useEffect, useReducer } from "react";
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

function reducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return {
        ...state,
        isResult: false,
        value: state.value.length ? state.value + "+" : "",
      };
    case "subtract":
      return {
        ...state,
        isResult: false,
        value: state.value.length ? state.value + "-" : "",
      };
    case "divide":
      return {
        ...state,
        isResult: false,
        value: state.value.length ? state.value + "/" : "",
      };
    case "multiply":
      return {
        ...state,
        isResult: false,
        value: state.value.length ? state.value + "x" : "",
      };
    case "delete":
      return {
        ...state,
        isResult: false,
        value: state.value.length
          ? state.value.substring(0, state.value.length - 1)
          : "",
      };
    case "reset":
      return { ...state, isResult: false, value: "" };
    case "result":
      return { ...state, isResult: true, value: eval(state.value) };
    case "dot":
      const lastDotIndex = state.value.indexOf(".");
      const isNumberBefore = state.value.length && !Number.isNaN(state.value[lastDotIndex - 1]);
      console.log(lastDotIndex, isNumberBefore);
      return {
        ...state,
        isResult: false,
        value: lastDotIndex != -1 || isNumberBefore ? state.value + "." : state.value,
      };
    case "num":
      return {
        ...state,
        isResult: false,
        value: state.isResult
          ? "" + payload
          : `${state.value}${payload}`,
      };
    default:
      throw new Error(`unsupported action ${type}!`);
  }
}

const initialState = {
  value: "",
  isResult: false,
};

export default function Calculator() {
  const { theme } = useTheme();
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <CalculatorDisplay
        value={state.value}
        className={`${displayStyles[theme]}`}
      />
      <CalculatorNumberPad
        className={`${numberPadStyles[theme]}`}
        onNumber={(num) => dispatch({ type: "num", payload: num })}
        onDelete={() => dispatch({ type: "delete" })}
        onReset={() => dispatch({ type: "reset" })}
        onResult={() => dispatch({ type: "result" })}
        onDot={() => dispatch({ type: "dot" })}
        onAdd={() => dispatch({ type: "add" })}
        onSubtract={() => dispatch({ type: "subtract" })}
        onDivide={() => dispatch({ type: "divide" })}
        onMultiply={() => dispatch({ type: "multiply" })}
      />
    </div>
  );
}
