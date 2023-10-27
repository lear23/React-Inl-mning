import React from 'react'
import './main.css'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Views/Home'
import Contacts from './Views/Contacts'
import NotFound from './Views/NotFound'
import News from './Views/News'
import NewsDetails from './Views/NewsDetails'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/contacts' element={<Contacts />} />
         <Route path='/News' element={<News />} />
         <Route path='/NewsDetails' element={<NewsDetails />} />
         <Route path='*' element={<NotFound />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
