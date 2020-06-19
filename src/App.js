import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <h1>Date Picker</h1>
      <h2>Start picking some date!</h2>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        // minDate={new Date()}
        //maxDate={new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}
