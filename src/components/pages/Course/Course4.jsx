import React, { useState } from 'react'
import Data1 from './Data1'
import Card from './Card'
import Buttons from './Buttons'
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
      <Course />
      <div className="all_tong">
        <div className="container-fluid">
          <div className="row">
            <h1 className="col-12 text-center my-3 fw-bold">
              Course Online App
            </h1>
            <Buttons
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <Card item={item} />
          </div>
        </div>
      </div>
      <div>
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
      </div>
    </>
  )
}
export default Course4