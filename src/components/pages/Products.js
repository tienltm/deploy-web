import React from 'react';
import CardItem from '../CardItem';
import { Routes, Route, Link } from 'react-router-dom';
import '../Cards.css';
import _note1 from './_note1';


function Products() {
  return (
    <div className='cards'>
      <h1>Tại sao nên học lập trình tại Aptech</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              <Link to="note1">
              <CardItem
                src='https://chefjob.vn/wp-content/uploads/2020/07/phan-hoi-cua-khach-hang-la-co-so-nang-cao-chat-luong-dich-vu.jpg'
                text='Tổng hợp các sản phẩm của học viên'
                label='abc'
                path='note1'
              />
              </Link>
              <Routes>
                <Route path="note1" element={<_note1 />} />
              </Routes>
            <CardItem
              src='https://chefjob.vn/wp-content/uploads/2020/07/phan-hoi-cua-khach-hang-la-co-so-nang-cao-chat-luong-dich-vu.jpg'
              text='Ký sự ngày thứ 25 học tại Aptech'
              label='abc'
              path='/ky-su-ngay-thu-25-hoc-tai-aptech'
            />
            <CardItem
              src='https://chefjob.vn/wp-content/uploads/2020/07/phan-hoi-cua-khach-hang-la-co-so-nang-cao-chat-luong-dich-vu.jpg'
              text='Động lực giúp tôi học lập trình'
              label='abc'
              path='/dong-luc-giup-toi-hoc-lap-trinh'
            />
            <CardItem
              src='https://chefjob.vn/wp-content/uploads/2020/07/phan-hoi-cua-khach-hang-la-co-so-nang-cao-chat-luong-dich-vu.jpg'
              text='Thời gian và động lực'
              label='abc'
              path='/thoi-gian-va-cong-luc'
            />
          </ul>
        </div>
      </div>
    </div>
    );
}

export default Products;