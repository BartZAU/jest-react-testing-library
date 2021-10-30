import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);
  const newCheckboxToggle = isDisabled ? true : false;
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      {/* <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button> */}
      <button
        disabled={isDisabled}
        onClick={() => setIsDisabled(newCheckboxToggle)}
      >
        toggle checkbox
      </button>
      <input
        type="checkbox"
        id="enable button-checkbox"
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
        onChange={(e) => setIsDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
