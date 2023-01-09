/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import './App.css'
import Button from './components/Navbar/Button'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
// import Products from './components/Pages/Products'
// import SignUp from './components/Pages/SignUp'
import SearchPage from './components/Search/Searchs'
import Contact from './components/Pages/Contact'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './components/Search/core/api'
import Blog from './components/Pages/Blog'
import Article_1 from './components/Pages/Article/Article1'
import Article_2 from './components/Pages/Article/Article2'
import Article_3 from './components/Pages/Article/Article3'
import Article_4 from './components/Pages/Article/Article4'
import Article_5 from './components/Pages/Article/Article5'
import Article_6 from './components/Pages/Article/Article6'

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/article-1" element={<Article_1 />} />
            <Route path="/article-2" element={<Article_2 />} />
            <Route path="/article-3" element={<Article_3 />} />
            <Route path="/article-4" element={<Article_4 />} />
            <Route path="/article-5" element={<Article_5 />} />
            <Route path="/article-6" element={<Article_6 />} />
            <Route path="services" element={<Services />}>
              {/* <Route path="page1" element={<Page1 />} />
              <Route path="course" element={<Page2 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
              <Route path="page4" element={<Page4 />} />
              <Route path="page5" element={<Page5 />} />
              <Route path="page7" element={<Page7 />} />
              <Route path="page8" element={<Page8 />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      {/* <div className="abc">
        <img src="./components/Pages/Hero.png" alt="" />
      </div> */}
    </>
  )
}

export default App
