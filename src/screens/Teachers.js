// ----------- System Components -----------  
import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
// ----------- Custom Components ----------- 
import { getTeachers } from '../helpers/Request'
import TeacherList from '../components/lists/TeacherList'
import Header from '../components/Header'

const Teachers = () => {
    // States ----------
    const [noData, setNoData] = useState(false);
    const [data, setData] = useState([]);
    // Get teachers by student id ----------
    const teacherHandler = async () => {
        try {
            // loading ...
            let res = await getTeachers();
            // End Loading ...
            if (res.status) {
                setData(res.data.data);
                setNoData(false);
            } else {
                setData([]);
                setNoData(true);
            }
        } catch (error) {
            setData([]);
            setNoData(true);
        }
    }

    useEffect(() => {
        teacherHandler();
    }, [])

    return (
        <>
            <Header
                pageName="Select Your Teacher"
                iconName="arrow-back"
                navLink={() => navigation.goBack()}
            />
            <TeacherList data={data} noData={noData} />
        </>
    )
}

export default Teachers