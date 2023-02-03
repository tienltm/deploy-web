import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Data1 from './Data1'
import Card from './Card'
import Buttons_ from './Buttons_'
import Course from '../Course'
import './Course4.css'
const Course4 = () => {
  const [item, setItem] = useState(Data1)
  const menuItems = [...new Set(Data1.map((Val) => Val.category))]
  const filterItem = (curcat) => {
    const newItem = Data1.filter((newVal) => {
      return newVal.category === curcat
    })
    setItem(newItem)
  }
  return (
    <>
      {/* <Course /> */}
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
              <Link to="/mathscourse">Chemistry</Link>
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
              <Link to="/math_couse">Fine Art.</Link>
            </li>
            <li>
              <Link to="/course4">Literature</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>

      <div className="all_tong">
        <div className="container-fluid">
          <div className="row">
            <h1 className="col-12 text-center my-3 fw-bold">
              Course Online App
            </h1>
            <Buttons_
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <Card item={item} />
          </div>
        </div>
      </div>
      {/* <div>
        {' '}
        <button
          type="button"
          className="btn btn-dark btn-flat"
          data-toggle="modal"
          data-target=".bs-example-modal-lg"
        >
          Large modal
        </button>
        <div
          className="modal fade bs-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">...</div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark btn-flat"
          data-toggle="modal"
          data-target=".bs-example-modal-sm"
        >
          Small modal
        </button>
        <div
          className="modal fade bs-example-modal-sm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">...</div>
          </div>
        </div>
      </div> */}
    </>
  )
}
export default Course4
