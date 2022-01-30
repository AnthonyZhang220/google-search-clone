import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from './Results';

export const Catogories = ({ darkTheme }) => {
    const [resNum, setResNum] = useState(10);


    return (
        <div className='p-4'>
            <select onChange={(e) => setResNum(e.target.value)} id='resNum' className={darkTheme ? 'text-[#202124]' : ''}>
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <label htmlFor="resNum">Results</label>
            <Routes>
                <Route exact path='/' element={<Navigate to='/search' />} />
                <Route exact path="/search" element={<Results resNum={resNum} />} />
                <Route exact path='/images' element={<Results resNum={resNum} />} />
                <Route exact path='/news' element={<Results resNum={resNum} />} />
                <Route exact path='/videos' element={<Results resNum={resNum} />} />
            </Routes>
        </div>
    );
};
