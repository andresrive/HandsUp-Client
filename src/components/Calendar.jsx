/* eslint-disable */
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import moment from 'moment'

export default function App({ onRangeChange, dateTo, dateFrom }) {

    const [selectedRange, setSelectedRange] = useState('');
    const [fromDate, setfromDate] = useState(dateFrom);
    const [toDate, settoDate] = useState(dateTo);
    
    const handleFromChange = (e) => {
        setfromDate(e.target.value);
    };

    const handleToChange = (e) => {
        settoDate(e.target.value);
    };

    const handleRangeSelect = (range) => {
        setSelectedRange(range);

        const formatedFrom = moment(range.from).format("DD-MM-YYYY")
        const formatedTo = moment(range.to).format("DD-MM-YYYY")
        setfromDate(formatedFrom)
        settoDate(formatedTo)
        onRangeChange(range, formatedFrom, formatedTo)


    };
    return (
        <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={handleRangeSelect}
            footer={
                <form className="ma2">
                    <input
                        size={10}
                        placeholder="From Date"
                        value={dateFrom}
                        onChange={handleFromChange}
                        className="input-reset pa2 ma bg-white black ba"
                    />
                    {' – '}
                    <input
                        size={10}
                        placeholder="To Date"
                        value={dateTo}
                        onChange={handleToChange}
                        className="input-reset pa2 bg-white black ba"
                    />
                </form>
            }
        />
    );
}
