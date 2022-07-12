import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import { useState } from "react";
import rates from "./assets/rates";

// console.log("USD===>", rates.USD);
// console.log("EUR===>", rates.EUR);

function App() {
  const [devise1, setdevise1] = useState(0);
  const [devise2, setdevise2] = useState(0);
  const transform = Object.entries(rates);

  return (
    <div className="App">
      <Header></Header>
      <Section
        currency1={devise1}
        currency2={devise2}
        setCurrency1={setdevise1}
        setCurrency2={setdevise2}
        change1={rates.EUR}
        change2={rates.USD}
        arrayRates={transform}
      ></Section>
    </div>
  );
}

export default App;
