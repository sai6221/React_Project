import Alert from "./Components/Alert";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
      <Buttons
        children="My Button"
        onClick={() => console.log("Clicked")}
      ></Buttons>
    </div>
  );
}

export default App;
