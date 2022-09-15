import { BrowserRouter,Routes, Route} from 'react-router-dom'
import {Home} from './Pages/home/Home'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

