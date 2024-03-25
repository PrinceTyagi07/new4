import React from 'react'
import Card from './Card'
const Cards = (props) => {
    let courses=props.Course;

    //  this function will merge the data in single array whose name is all courses
    const getCourses = () => {
        let allCourses = [];
        console.log("hello")
        console.log(courses)
        Object.values(courses).forEach((array) => {
            array.forEach((coursedata) => {
                allCourses.push(coursedata);
            })
        })
        return allCourses;
    }
    return (
        <div>
        {
            getCourses().map((course)=>{

            return <Card key={course.id} course={course}/>
            }
        )}
        </div>
    )
}

export default Cards