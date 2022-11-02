import React, { useEffect, useState } from 'react';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';
import './Experts.css';
const Experts = () => {
    const experts = [
        {
            id:1,
            img:expert1,
            name:'Expert1',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus!',
        },
        {
            id:2,
            img:expert2,
            name:'Expert2',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus!',
        },
        {
            id:3,
            img:expert3,
            name:'Expert3',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus!',
        },
        {
            id:4,
            img:expert4,
            name:'Expert4',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus!',
        },
        {
            id:5,
            img:expert5,
            name:'Expert5',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus!',
        },
        {
            id:6,
            img:expert6,
            name:'Expert6',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus!',
        },
    ]
    return (
        <div className='container'>
            <h1 className='expert-header'>All Expert Here: {experts.length}</h1>
            <div className='row g-5'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;