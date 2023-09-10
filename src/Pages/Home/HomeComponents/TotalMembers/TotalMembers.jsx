import React, { useEffect, useState } from 'react';
import Tittle from '../../../../Common_Component\'s/Tittle';
import CountUp from 'react-countup';
import './TotalMembers.css'


const TotalMembers = () => {
    const [totalMusician, setTotalMusician] = useState([])
    const [totalStudents, setTotalStudents] = useState([])
    const [totalCourses, setTotalCourses] = useState([])
    console.log(totalCourses, totalMusician, totalStudents);

    useEffect(() => {
        fetch('https://the-music-mystrey-server.vercel.app/musicians')
            .then(res => res.json())
            .then(data => {
                setTotalMusician(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://the-music-mystrey-server.vercel.app/allClasses')
            .then(res => res.json())
            .then(data => {
                setTotalCourses(data);
            })
    }, [])

    useEffect(() => {
        fetch('https://the-music-mystrey-server.vercel.app/allStudents')
            .then(res => res.json())
            .then(data => {
                setTotalStudents(data);
            })
    }, [])
    return (
        <div>
            <Tittle heading={'Total Members'}></Tittle>
            <div className='border-2 rounded-lg md:w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 justify-between mt-10 text-6xl text-white font-bold md:px-20 md:py-20 px-5 py-5 gap-10 md:gap-0 bgImg bg-fixed'>
                <div className='text-center'>
                    <div className='border-2 rounded-full w-[150px] h-[150px] flex justify-center items-center bg-slate-300 bg-opacity-30 mx-auto'>
                        <CountUp start={0} end={totalCourses.length} delay={0} duration={10}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className='text-3xl mt-2 text-white'>Courses</div>
                </div>
                <div className='text-center'>
                    <div className='border-2 rounded-full w-[150px] h-[150px] flex justify-center items-center bg-slate-300 bg-opacity-30 mx-auto'>
                        <CountUp start={0} end={totalMusician.length} delay={0} duration={10}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className='text-3xl mt-2 text-white'>Musician</div>
                </div>
                <div className='text-center'>
                    <div className='border-2 rounded-full w-[150px] h-[150px] flex justify-center items-center bg-slate-300 bg-opacity-30 mx-auto'>
                        <CountUp start={0} end={totalStudents.length} delay={0} duration={10}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className='text-3xl mt-2 text-white'>Student's</div>
                </div>
                <div className='text-center'>
                    <div className='border-2 rounded-full w-[150px] h-[150px] flex justify-center items-center bg-slate-300 bg-opacity-30 mx-auto'>
                        <CountUp start={0} end={25} delay={0} duration={10}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className='text-3xl mt-2 text-white'>Reword's</div>
                </div>
            </div>
        </div>
    );
};

export default TotalMembers;