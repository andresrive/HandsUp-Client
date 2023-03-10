import Calendar from "../../components/Calendar";
import React, { useState } from 'react';
import "./ProfilePage.css";

function ProfilePage() {

  const [selectedRange, setSelectedRange] = useState('');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleRangeChange = () => {
    setSelectedRange(selectedRange);
    setFromValue(fromValue);
    setToValue(toValue);
  }

  return (
    <div>
      <h1>Profile page</h1>
      <Calendar onRangeChange={handleRangeChange} />
    </div>
  );
}

export default ProfilePage;
