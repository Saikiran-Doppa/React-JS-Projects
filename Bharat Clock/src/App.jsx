import "./App.css";
import ClockHead from "./Components/ClockHead";
import ClockSlogan from "./Components/ClockSlogan";
import ClockTime from "./Components/ClockTime";

function App() {
  return (
    <center>
      <ClockHead></ClockHead>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
