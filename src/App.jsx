import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Components/Forms/Login'
import Signup from './Components/Forms/Signup'
import Contact from './Components/Contact/Contact'
import AppClass from './Components/Classess/AppClass'
import AppSchedule from './Components/Schedule/AppSchedule'
import Blog from './Components/Blog/Blog'
import AboutUs from './Components/AboutUs/AboutUs'
import ScrollToTop from './ScrollToTop'


function App() {

  return (
    <>
    <Router>
      <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<AboutUs/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='/classses' element={<AppClass/> }/>
    <Route path='/schedule' element={<AppSchedule/> }/>
    <Route path='/contact' element={<Contact/> }/>
    <Route path='/login' element={<Login/> }/>
    <Route path='/signup' element={<Signup/> }/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
