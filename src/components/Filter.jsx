import React from 'react'

const Filter = ({ filterData }) => {
    return (
        <div>
            {filterData.map((data) => {
                return (
                    <button className=' border-2 m-1 border-black px-3 font-semibold ' key={data.id}>{data.title} </button>
                    )
            }
            )}
        </div>
    )
}

export default Filter