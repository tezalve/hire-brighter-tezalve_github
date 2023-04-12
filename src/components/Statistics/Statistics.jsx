import './Statistics.css'
import React, { PureComponent, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [marks, setMarks] = useState([]);

    useEffect( () => {
        fetch('marks.json')
        .then(res => res.json())
        .then(data => setMarks(data))
    }, [])
    return (
        <div className='d-flex flex-column align-items-center justify-content-center p-5 m-5'>
            <h4 className='p-5'>My Assignment Marks</h4>
            <AreaChart
                width={500}
                height={400}
                data={marks}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;