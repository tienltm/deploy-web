import React from 'react';
import '../../App.css';
import { Link, Route, Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './product.css';


function Products() {
  return (
    <div className='feedbacks'>
      <div className='feedback'>
        <Link to = "/feedback">
          <img src="https://i0.wp.com/crmviet.vn/wp-content/uploads/2021/01/feedback-art-sign-760-min.jpg?ssl=1" className='fb-img'></img>
          <div className='fb-content'>Chỗ ni ghi nội dung sơ lược</div>
        </Link>
      </div>
      <div className='feedback'>
        <Link to = "/feedback">
          <img src="https://i0.wp.com/crmviet.vn/wp-content/uploads/2021/01/feedback-art-sign-760-min.jpg?ssl=1" className='fb-img'></img>
          <div className='fb-content'>Chỗ ni ghi nội dung sơ lược</div>
        </Link>
      </div>
      <div className='feedback'>
        <Link to = "/feedback">
          <img src="https://i0.wp.com/crmviet.vn/wp-content/uploads/2021/01/feedback-art-sign-760-min.jpg?ssl=1" className='fb-img'></img>
          <div className='fb-content'>Chỗ ni ghi nội dung sơ lược</div>
        </Link>
      </div>
      <div className='feedback'>
        <Link to = "/feedback">
          <img src="https://i0.wp.com/crmviet.vn/wp-content/uploads/2021/01/feedback-art-sign-760-min.jpg?ssl=1" className='fb-img'></img>
          <div className='fb-content'>Chỗ ni ghi nội dung sơ lược</div>
        </Link>
      </div>
      <div className='feedback'>
        <Link to = "/feedback">
          <img src="https://i0.wp.com/crmviet.vn/wp-content/uploads/2021/01/feedback-art-sign-760-min.jpg?ssl=1" className='fb-img'></img>
          <div className='fb-content'>Chỗ ni ghi nội dung sơ lược</div>
        </Link>
      </div>
      <div className='feedback'>
        <Link to = "/feedback">
          <img src="https://i0.wp.com/crmviet.vn/wp-content/uploads/2021/01/feedback-art-sign-760-min.jpg?ssl=1" className='fb-img'></img>
          <div className='fb-content'>Chỗ ni ghi nội dung sơ lược</div>
        </Link>
      </div>
      
    </div>
    )
}

export default Products;