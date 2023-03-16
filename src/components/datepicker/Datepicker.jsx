import React, {useState} from "react";
import "./datepicker.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Datepicker({width}) {

  const [isRange, setIsRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className="bguest__datepicker" style={{width: width}}>
    <DateRange
      editableDateInputs={true}
      onChange={item => setIsRange([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={isRange}
    />
    </div>
  );
}

export default Datepicker;
