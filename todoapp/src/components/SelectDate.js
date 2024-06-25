import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}

export default SelectDate;
