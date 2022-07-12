import { useState } from "react";

const Section = ({
  currency1,
  currency2,
  setCurrency1,
  setCurrency2,
  arrayRates,
  change1,
  change2,
}) => {
  //   console.log("here", change1, change2);
  // console.log(currency1);
  // console.log(currency2);

  // console.log(arrayRates[0][0]);
  console.log(arrayRates[0][1]);
  const [optionValue, setOptionValue] = useState(0);
  const [optionValueDown, setOptionValueDown] = useState(0);
  // console.log("here===>", optionValue);
  // console.log("and here", optionValueDown);
  const convert = () => {
    if (optionValue === optionValueDown) {
      alert("It's the same monnay ! Please change a value !");
    } else {
      setCurrency2((optionValue * currency1 * optionValueDown).toFixed(2));
    }
  };

  const reConvert = () => {
    if (optionValue === optionValueDown) {
      alert("It's the same monnay ! Please change a value !");
    } else {
      setCurrency1((currency2 / optionValueDown / optionValue).toFixed(2));
    }
  };
  return (
    <section>
      <div className="boxInput one">
        <input
          value={currency1}
          onChange={(event) => {
            setCurrency1(event.target.value);
          }}
          type="text"
        />
        {/* <span>€</span> */}
        <select
          defaultValue={arrayRates[0][1]}
          onChange={(event) => {
            let modif = event.target.value;
            // console.log(modif);
            setOptionValue(modif);
          }}
        >
          {arrayRates.map((element, index) => {
            return (
              <option key={index} value={element[1]}>
                {element[0]}
              </option>
            );
          })}
        </select>
      </div>
      <div className="buttonBox">
        <button onClick={convert} className="but1">
          ⬇️
        </button>
        <button onClick={reConvert} className="but2">
          ⬆️
        </button>
      </div>
      <div className="boxInput two">
        <input
          onChange={(event) => {
            setCurrency2(event.target.value);
            // console.log(currency2);
          }}
          type="text"
          value={currency2}
        />
        {/* <span>$</span> */}
        <select
          defaultValue={arrayRates[0][1]}
          onChange={(event) => {
            let modif = event.target.value;
            // console.log(modif);
            setOptionValueDown(modif);
          }}
        >
          {arrayRates.map((element, index) => {
            return (
              <option key={index} value={element[1]}>
                {element[0]}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default Section;
