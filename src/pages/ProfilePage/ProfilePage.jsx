import Calendar from "../../components/Calendar";
import React, { useState } from 'react';
import "./ProfilePage.css";

function ProfilePage() {

  const [selectedRange, setSelectedRange] = useState('');
  const [fromDate, setfromDate] = useState('');
  const [toDate, settoDate] = useState('');

  const handleRangeChange = (selectedRange, fromDate, toDate) => {
    setSelectedRange(selectedRange);
    setfromDate(fromDate);
    settoDate(toDate);
  }

  return (
    <div>
      <h1>Profile page</h1>
      <Calendar onRangeChange={handleRangeChange} />
    </div>
  );
}

export default ProfilePage;
