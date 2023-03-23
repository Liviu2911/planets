import { useEffect, useState } from 'react'
import './style/main.scss'
import stars from './assets/Images/background-stars.svg'
import Nav from './components/nav'
import Home from './components/home'
import Planet from './components/planetPage'
import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("");
  const [activePage, setActivePage] = useState("Mercury");

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  const onLocation = () => location.pathname === '/' ? open() : close();

  useEffect(() => {
    return onLocation();
  }, [location.pathname]);


  return (
    <>
      <div className="bg-stars">
        <img src={stars} alt="stars" />
      </div>
      <Nav active={active} setActive={setActive} setActivePage={setActivePage} />
      <Routes>
        <Route path="/" />
        <Route path='/:name' element={<Planet activePage={activePage} />} />
      </Routes>
      <Home vis={visible} active={active} />
    </>
  )
}

export default App
