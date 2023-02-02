/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import './App.css'
// import Button from './components/Navbar/Button'
import { Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Home from './components/pages/Home'
// import Course from './components/pages/Course'
import Course1 from './components/pages/Course/Course1'
import Course2 from './components/pages/Course/Course2'
import Course3 from './components/pages/Course/Course3'
import Course4 from './components/pages/Course/Course4'
// import Products from './components/Pages/Products'

// import SignUp from './components/Pages/SignUp'
import SearchPage from './components/Search/Searchs'
import Contact from './components/pages/Contact'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './components/Search/core/api'
import Blog from './components/pages/Blog'
import ArticleNo1 from './components/pages/Article/Article1'
import ArticleNo2 from './components/pages/Article/Article2'
import ArticleNo3 from './components/pages/Article/Article3'
import ArticleNo4 from './components/pages/Article/Article4'
import ArticleNo5 from './components/pages/Article/Article5'
import ArticleNo6 from './components/pages/Article/Article6'
import Ourstory from './components/pages/Ourstory'

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HashRouter basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/article_1" element={<ArticleNo1 />} />
            <Route path="/article_2" element={<ArticleNo2 />} />
            <Route path="/article_3" element={<ArticleNo3 />} />
            <Route path="/article_4" element={<ArticleNo4 />} />
            <Route path="/article_5" element={<ArticleNo5 />} />
            <Route path="/article_6" element={<ArticleNo6 />} />
            <Route path="/ourstory" element={<Ourstory />} />

            <Route path="/course" element={<Course3 />} />
            <Route path="/course1" element={<Course1 />} />
            <Route path="/course2" element={<Course2 />} />
            <Route path="/course3" element={<Course3 />} />
            <Route path="/course4" element={<Course4 />} />

            {/* <Route path="Course" element={<Course />}>
              <Route path="course1" element={<Course1 />} />
              <Route path="course2" element={<Course2 />} />
              <Route path="course3" element={<Course3 />} />
              <Route path="course4" element={<Course4 />} />
            </Route> */}
            {/* <Route path="services" element={<Services />}> */}
            {/* <Route path="page1" element={<Page1 />} />
              <Route path="course" element={<Page2 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
              <Route path="page4" element={<Page4 />} />
              <Route path="page5" element={<Page5 />} />
              <Route path="page7" element={<Page7 />} />
              <Route path="page8" element={<Page8 />} /> */}
            {/* </Route> */}
          </Routes>
        </HashRouter>
      </QueryClientProvider>
      {/* <div className="abc">
        <img src="./components/Pages/Hero.png" alt="" />
      </div> */}
    </>
  )
}

export default App
