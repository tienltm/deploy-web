import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Course.css'
// import Course3 from './Course/Course3'
function Course() {
  return (
    <>
      <div className="sidebar">
        <div className="khoahoc">
          <ul>
            <li>
              <Link to="/course4">Mathematics (Maths)</Link>
            </li>
            <li>
              <Link to="/course3">Physics</Link>
            </li>
            <li>
              <Link to="/course3">Chemistry</Link>
            </li>
            <li>
              <Link to="/course4">Biology</Link>
            </li>
            <li>
              <Link to="/course3">Information Technology.</Link>
            </li>
            <li>
              <Link to="/course2">Geography</Link>
            </li>
            <li>
              <Link to="/course4">Fine Art.</Link>
            </li>
            <li>
              <Link to="/course1">Literature</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  )
}
export default Course
