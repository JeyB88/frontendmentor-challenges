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
  const lastCharacter = state.value[state.value.length - 1];
  let lastIsNumber = state.lastIsNumber;
  if (lastCharacter) {
    lastIsNumber = !Number.isNaN(parseInt(lastCharacter));
  }
  const tempState = {...state, isResult: false, lastIsNumber};
  switch (type) {
    case "add":
      return {
        ...tempState,
        value: lastIsNumber ? tempState.value + "+" : tempState.value,
      };
    case "subtract":
      return {
        ...tempState,
        value: lastIsNumber || tempState.value.length == 0 ? tempState.value + "-" : tempState.value,
      };
    case "divide":
      return {
        ...tempState,
        value: lastIsNumber ? tempState.value + "/" : tempState.value,
      };
    case "multiply":
      return {
        ...tempState,
        value: lastIsNumber ? tempState.value + "x" : tempState.value,
      };
    case "delete":
      return {
        ...tempState,
        value: tempState.value.length
          ? tempState.value.substring(0, tempState.value.length - 1)
          : tempState.value,
      };
    case "reset":
      return { ...tempState, value: "" };
    case "result":
      try {
        const result = eval(tempState.value.replace("x", "*"));
        if (Number.isNaN(result) || !Number.isFinite(result)) {
          throw new Error();
        }
        return { ...tempState, value: result, isResult: true };
      } catch {
        return { ...tempState, value: tempState.value };
      }
    case "dot":
      return {
        ...tempState,
        value: lastIsNumber ? tempState.value + "." : tempState.value,
      };
    case "num":
      return {
        ...tempState,
        value: state.isResult
          ? "" + payload
          : `${tempState.value}${payload}`,
      };
    default:
      throw new Error(`unsupported action ${type}!`);
  }
}

const initialState = {
  value: "",
  isResult: false,
  lastIsNumber: false
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
