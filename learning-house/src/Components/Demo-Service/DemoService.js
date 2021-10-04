import React from 'react';

const DemoService = (props) => {
    const{img,courseName,mentor,price}=props.course;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{courseName}</h3>
            <h5>Mentor : {mentor}</h5>
            <p>Price : {price}</p>
        </div>
    );
};

export default DemoService;