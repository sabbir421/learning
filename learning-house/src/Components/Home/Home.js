import React, { useEffect, useState } from 'react';
import DemoService from '../Demo-Service/DemoService';
import Services from '../Services/Services';


const Home = () => {
    const[Courses,setCourse]=useState([])
    useEffect(()=>
        fetch('https://raw.githubusercontent.com/sabbir421/json-course/main/generated%20(1).json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    ,[])
    return (
        <div>
           
           {
                Courses.map(course=><DemoService course={course}></DemoService>)
            }
        
        </div>
    );
};

export default Home;