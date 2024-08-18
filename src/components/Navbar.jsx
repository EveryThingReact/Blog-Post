import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <>
     <header className="bg-indigo-950 text-white py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <h1 className="text-3xl font-bold">
            <Link to="/">My Blog</Link>
          </h1>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
          <nav className={`flex-col md:flex-row items-center md:space-x-4 md:flex ${menuOpen ? 'flex' : 'hidden'} md:block mt-4 md:mt-0`}> 
            <Link to="/" className="px-4 hover:underline">Home</Link>
            <Link to="/about" className="px-4 hover:underline">About</Link>
            <Link to="/contact" className="px-4 hover:underline">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar