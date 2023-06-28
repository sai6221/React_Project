import { useState } from "react";
import Alert from "./Components/Alert";
import Buttons from "./Components/Buttons";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Buttons
        children="My Button"
        onClick={() => setAlertVisibility(true)}
      ></Buttons>
    </div>
  );
}

export default App;
