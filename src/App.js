import './App.css';
import Navbar from './container/Navbar'
import News from './container/News'

// import NewsItem from './container/NewsItem'
import React  from 'react'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route  path="/index.html"  element={<News key='general' country='in' category='general' />} />
            <Route  path="/"  element={<News key='general' country='in' category='general' />} />
            <Route  path="/Business" element={<News key='business' country='in' category='business' />} />
            <Route  path="/Entertainment" element={<News key='entertainment'  country='in' category='entertainment' />} />
            <Route  path="/Health" element={<News key='health'  country='in' category='health' />} />
            <Route  path="/Sports" element={<News key='sports'  country='in' category='sports' />} />
            <Route  path="/Science" element={<News key='science'  country='in' category='science' />} />
            <Route   path="/Technology" element={<News key='technology' country='in' category='technology' />} />
            
          </Routes>
      </BrowserRouter>
        
        
      </>
    )
  }
 export default App

