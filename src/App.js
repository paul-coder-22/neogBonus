import { useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState("");

  let getYear = +date.split("-")[0];
  const checkLeapYear = (getYear) => {
    return (getYear % 4 === 0 && getYear % 100 !== 0) || getYear % 400 === 0;
  };

  let leapyerText = {
    color: "green"
  };

  let nonLeapYearText = {
    color: "red"
  };

  return (
    <div className="App">
      <h1>LeapYear</h1>
      <h2>Select date to check wheather it's Leap Year Or Not !</h2>
      <p className={nonLeapYearText}>{date}</p>
      <label htmlFor="chooseDate">
        Choose Date:
        <input
          id="chooseDate"
          value={date}
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      {/* <button onClick={() => checkLeapYear(getYear)}>Click</button> */}

      <h2
        className={checkLeapYear(getYear) ? "leapyerText" : "nonLeapYearText"}
      >
        {checkLeapYear(getYear) ? "Leap Year" : "Not Leap Year"}
      </h2>
    </div>
  );
}
