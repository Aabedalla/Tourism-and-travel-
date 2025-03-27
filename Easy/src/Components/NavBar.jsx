function Nav(){
    return(
        <header>
            <nav className="bg-blue-600 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center" >
            <a href="index.html" className="text-white text-2xl font-bold">LifeEase Travel</a>
            <div className="hidden md:flex space-x-6">
                <a href="index.html" className="text-white  font-bold text-lg hover:text-gray-300 transition">Home</a>
                <a href="About-us.html" className="text-white font-bold text-lg hover:text-gray-300 transition">About</a>
                <a href="partner.html" className="text-white font-bold text-lg hover:text-gray-300 transition">Partners</a>
                <a href="service.html" className="text-white font-bold text-lg hover:text-gray-300 transition">Service</a>
                <a href="contact-us.html" className="text-white font-bold text-lg hover:text-gray-300 transition">Contact</a>
                <a href="requestservice.html" className="text-white font-bold text-lg hover:text-gray-300 transition">Request Service</a>
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-200 transition">Sign In</a>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-800 transition">Sign Up</a>
            </div>
            <button className="md:hidden text-white text-2xl" id="menu-btn">☰</button>
        </div>
        <div className="hidden md:hidden bg-blue-600 p-4" id="mobile-menu">
            <a href="index.html" className="block text-white py-2 hover:text-gray-300">Home</a>
            <a href="About-us.html" className="block text-white py-2 hover:text-gray-300">About</a>
            <a href="partner.html" className="block text-white py-2 hover:text-gray-300">Partners</a>
            <a href="service.html" className="block text-white py-2 hover:text-gray-300">Service</a>
            <a href="contact-us.html" className="block text-white py-2 hover:text-gray-300">Contact</a>
            <a href="requestservice.html" className="block text-white py-2 hover:text-gray-300">Request Service</a>
            <a href="#" className="block text-white py-2 hover:text-gray-300">Sign In</a>
            <a href="#" className="block text-white py-2 hover:text-gray-300">Sign Up</a>
        </div>
    </nav>
        </header>
    )
}

export default Nav;