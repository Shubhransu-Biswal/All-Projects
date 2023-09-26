import { useState } from "react";
import Heading from "./Components/Heading/Heading";
import InputForm from "./Components/InputForm/InputForm";
import TableData from "./Components/TableData/TableData";

function App() {
  const [userInput, updateUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    updateUserInput(userInput);
  };

  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Heading></Heading>
      <InputForm calculateHandler={calculateHandler}></InputForm>

      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {userInput && (
        <TableData
          data={yearlyData}
          initialInvesetment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
