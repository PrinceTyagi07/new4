import React from 'react'

const Filter = ({ filterData }) => {
    return (
        <div>
            {filterData.map((data) => {
                return (
                    <button className=' text-lg px-2 py-1 rounded-md font-medium 
            text-white  hover:bg-black border-2 transition-all duration-300 gradient-text mx-2
           ' key={data.id}>{data.title} </button>
                    )
            }
            )}
        </div>
    )
}

export default Filter