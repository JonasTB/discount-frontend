import React, { useState, useEffect, useContext } from 'react';

import api from '../../services/api';
import { Context } from '../../hooks/authProvider';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);
    const { logout } = useContext(Context);
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        api.get('/course/many', {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => {
            setCourses(res.data)
        }).catch(err => {
            console.log('ai papai, quebrei', err);
        });

    }, [token]);

    return (
        <div>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}> {course.course} {course.percent} {course.full} {course.discout}</li>
                ))}
            </ul>

            <button type="button" onClick={logout}>Button</button>
        </div>
    )
}

export default Dashboard;