import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import AddStudent from './components/AddStudent'

function App() {

  return (
    <>
      <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/add-student' element={<AddStudent/>}/>
      </Routes>
      <Footer />

      </BrowserRouter>
      
    </>
  )
}

export default App
