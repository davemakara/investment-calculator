import React, { useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

function App() {
  const [userData, setUserData] = useState(null);

  const calculateHandler = (userInput) => {
    setUserData(userInput);
  };

  const yearlyData = [];

  if (userData) {
    let currentSavings = +userData["current-savings"];
    const yearlyContribution = +userData["yearly-contribution"];
    const expectedReturn = +userData["expected-return"] / 100;
    const duration = +userData["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  const formResetted = (data) => {
    setUserData(data);
  };

  return (
    <div className="mainContainer">
      <Header />

      <Form submitted={calculateHandler} resetted={formResetted} />

      {!userData && (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
      {userData && (
        <Result
          data={yearlyData}
          initialInvestment={userData["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
