import './App.css';
import './styles/res1024.css';
import './styles/res768.css';
import './styles/res500.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Collection from './pages/Collection';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import SinglePage from './components/SinglePage';

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/single/:id' element={<SinglePage/>} />
      </Routes>
    </>
  )
}

export default App
