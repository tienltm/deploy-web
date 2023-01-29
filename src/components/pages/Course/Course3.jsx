import React, { useState } from 'react'
import Data from './Data'
import Card from './Card'
import Buttons from './Buttons'
import Course from '../Course'
import './Course3.css'
const Course3 = () => {
  const [item, setItem] = useState(Data)
  const menuItems = [...new Set(Data.map((Val) => Val.category))]
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
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
        <button
          type="button"
          class="btn btn-dark btn-flat"
          data-toggle="modal"
          data-target=".bs-example-modal-lg"
        >
          Large modal
        </button>

        <div
          class="modal fade bs-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">...</div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-dark btn-flat"
          data-toggle="modal"
          data-target=".bs-example-modal-sm"
        >
          Small modal
        </button>

        <div
          class="modal fade bs-example-modal-sm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">...</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Course3
