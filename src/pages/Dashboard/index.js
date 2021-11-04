import React, { useState, useEffect } from 'react';

import api from '../../services/api';

const Dashboard = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/many');

            setCourses(data);
        })();
    }, []);

    return (
        <div>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}> {course.course} {course.percent} {course.full} {course.discout}</li>
                ))}
            </ul>

            <button type="button">Button</button>
        </div>
    )
}

export default Dashboard;