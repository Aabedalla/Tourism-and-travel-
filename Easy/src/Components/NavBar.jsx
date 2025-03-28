import React from "react";
import { useState } from "react";
function Nav(){
    const [isMobileMenuOpen , setisMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen)
    }
    const nav = [
        {id:1 , navName: 'Home'},
        {id:2 , navName: 'About'},
        {id:3 , navName: 'Partners'},
        {id:4 , navName: 'Service'},
        {id:5 , navName: 'Contact'},
        {id:6 , navName: 'Request Service'},
    ]
    const mobileNave = [
        {id:1 , navName: 'Home'},
        {id:2 , navName: 'About'},
        {id:3 , navName: 'Partners'},
        {id:4 , navName: 'Service'},
        {id:5 , navName: 'Contact'},
        {id:6 , navName: 'Request Service'},
    ]
    return(
        <header>
            <nav className="bg-blue-600 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center" >
            <a  className="text-white text-2xl font-bold">LifeEase Travel</a>
            <div className="hidden md:flex space-x-6">
                {nav.map((navBarName ) => (
                    <a key={navBarName.id} href="#" className="text-white font-bold text-lg hover:text-gray-300 transition">{navBarName.navName}</a>
                ))}
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-200 transition">Sign In</a>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-800 transition">Sign Up</a>
            </div>
            <button className="md:hidden text-white text-2xl" onClick={toggleMobileMenu} id="menu-btn">☰</button>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-600  p-4`}  id="mobile-menu">
            {mobileNave.map((Mobaile) => (
                    <a key={Mobaile.id} className="block text-white py-2 hover:text-gray-300">{Mobaile.navName}</a>
                ))}
            <a href="#" className="block text-white py-2 hover:text-gray-300">Sign In</a>
            <a href="#" className="block text-white py-2 hover:text-gray-300">Sign Up</a>
        </div>
    </nav>
        </header>
    )
}

export default Nav;