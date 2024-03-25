import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
    let course = props.course;
    return (
        <div className='w-[300px] bg-opacity-80 rounded-md overflow-hidden'>
            <div  className='relative'>
                <img src={course.image.url} />
                <div  className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                    <button >
                        <FcLikePlaceholder />
                    </button>
                </div>

            </div>
            <div className=' bg-gradient-to-b from-[#76f12e] via-[#0df4a7] to-[#0184f0] p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p  className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    )
}

export default Card