import React, { useEffect, useState } from 'react';

const Services = (props) => {
    
    const[Courses,setCourse]=useState([])
    useEffect(()=>
        fetch('https://raw.githubusercontent.com/sabbir421/json-course/main/generated%20(1).json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    ,[])
    return (
       
        <div>
             {
            Courses.map(course=><Services course={course}></Services>)
        }
           
        </div>
    );
};

export default Services;