import TruvelDeals from "./Traveldeals.jsx"
import Trip from "./Trip.jsx"
import React from "react"
import Heder from "../assets/header.png"
import Clint1 from "../assets/clientone.jpg"
import Clint2 from "../assets/client-2.jpg"
import Clint3 from "../assets/client-3.jpg"
import Clint4 from "../assets/client-4.jpg"
import company1 from "../assets/01.png"
import company2 from "../assets/02.png"
import company3 from "../assets/03.png"
import company4 from "../assets/04.png"
import company5 from "../assets/05.png"
import company6 from "../assets/06.png"
function Homepage(){

    const patner = [
        {id: 1 , patnerLogo: company1},
        {id: 2 , patnerLogo: company2},
        {id: 3 , patnerLogo: company3},
        {id: 4 , patnerLogo: company4},
        {id: 5 , patnerLogo: company5},
        {id: 6 , patnerLogo: company6},
    ]

    const BookingTabs = [
        {id:1 , TabName: "Flights"},
        {id:2 , TabName: "Hotels"},
        {id:3 , TabName: "CarRental"},
        {id:4 , TabName: "Packages"},
    ]
    return(
        <div>
        <style>
        
        </style>
        <section className="topSection">
            <div className="container">
                <div className="row">
            <div className="col-md-6">
                <div className="companyTitle my-5">
                    <h1 className="text-white font-black py-3 text-[60px]">Lets Travel More Easy !!</h1>
                    <p className="text-white font-semibold py-3">
                        LifeEase Travel aims to revolutionize the travel by providing personalized,
                         hassle-free, and memorable travel experiences.
                    </p>
                    <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-800 transition">More info</a>
                </div>
            </div>

            <div className="col-md-6">
                <div className="plane">
                    <img src={Heder} className="my-5" />
                </div>
            </div>
            </div>
            </div>
        </section>

        <section className="bookingSection">
            <div className="container">
                <div className="row">
                    <div className="bookingTabs my-5">

                    <h1 className="text-[#2563eb] font-black pt-5 pb-3">Booking</h1>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {BookingTabs.map((tab, index) => (
                            <li className="nav-item" role="presentation" key={tab.id}>
                                <button 
                                    className={`nav-link ${index === 0 ? "active" : ""}`} 
                                    id={`${tab.TabName.replace(/\s+/g, "-")}-tab`}  
                                    data-bs-toggle="tab" 
                                    data-bs-target={`#${tab.TabName.replace(/\s+/g, "-")}`} 
                                    type="button" 
                                    role="tab">
                                    {tab.TabName}
                                </button>
                            </li>
                        ))}
                    </ul>

                    
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="Flights">
                            <form className="flex  flex-wrap my-3 justify-content-between Find-Flights">
                                <input type="text" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100" placeholder="from"></input>
                                <input type="text" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100" placeholder="to"></input>
                                <input type="date" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                                <select className="border-none px-3 py-2 mr-2 outline-none bg-gray-100">
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>Brazel</option>
                                    <option>Jaban</option>
                                </select>
                                <button type="submit" className="bg-blue-600 text-white hover:bg-blue-500 px-5 py-3 rounded-lg ">Find Flights</button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="Hotels">
                        <form className="flex flex-wrap  my-3 justify-content-between Find-Hotels">
                        <select className="border-none px-3 py-2 mr-2 outline-none bg-gray-100">
                                    <option>Plaza</option>
                                    <option>Marute</option>
                                    <option>Karbala</option>
                                    <option>Shamy</option>
                                </select>
                                <input type="date" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                                <input type="date" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                                <select className="border-none px-3 py-2 mr-2 outline-none bg-gray-100">
                                    <option>one room</option>
                                    <option>three rooms</option>
                                    <option>fife rooms</option>
                                    <option>other</option>
                                </select>
                                <select className="border-none px-3 py-2 mr-2 outline-none bg-gray-100">
                                    <option>1 presone</option>
                                    <option>2 pepole</option>
                                    <option>3 pepole</option>
                                    <option>other</option>
                                </select>
                                <button type="submit" className="bg-blue-600 text-white hover:bg-blue-500 px-5 py-3 rounded-lg ">Find Hotels</button>
                        </form>
                        </div>
                        <div className="tab-pane fade" id="CarRental">
                        <form className="flex  flex-wrap my-3 justify-content-between CarRental">
                        <select className="border-none px-3 py-2 mr-2 outline-none bg-gray-100">
                                    <option>Brazel</option>
                                    <option>Usa</option>
                                    <option>Germany</option>
                                    <option>Saudi Arabia</option>
                                </select>
                                <select className="border-none px-3 py-2 mr-2 outline-none bg-gray-100">
                                    <option>Brazel</option>
                                    <option>Usa</option>
                                    <option>Germany</option>
                                    <option>Saudi Arabia</option>
                                </select>                                <input type="date" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                                <select className="border-none px-3 py-2 mr-2 outline-none bg-gray-100">
                                    <option>Economy</option>
                                    <option>Luxury</option>
                                    <option>SUV</option>
                                </select>
                                
                                <button type="submit" className="bg-blue-600 text-white hover:bg-blue-500 px-5 py-3 rounded-lg ">Find Car</button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="Packages">
                        <form className="flex flex-wrap my-3 justify-content-between Packages">
                            <input type="text" placeholder="Hight" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                            <input type="text" placeholder="Width" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                            <input type="date" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                            <input type="text" placeholder="wight" className="border-none px-3 py-2 mr-2 outline-none bg-gray-100"></input>
                            <button type="submit" className="bg-blue-600 text-white hover:bg-blue-500 px-5 py-3 rounded-lg ">Send Now</button>
                        </form> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-4">
                        <div className="bg-[#002e8b] mb-3 text-center text-white rounded-md p-3">
                            <div className="flex user justify-center">
                                <img src={Clint1} className="rounded-full" width={"60"}></img>
                                <img src={Clint2} className="rounded-full" width={"60"}></img>
                                <img src={Clint3} className="rounded-full" width={"60"}></img>
                                <img src={Clint4} className="rounded-full" width={"60"}></img>
                            </div>
                            <div className="userinfo pt-2"> 
                                <h6 className="text-center text-lg font-bold pb-0">Save when you compare</h6>
                                <span className="text-center text-gray-400">More deals. More sites. One search</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                    <div className="bg-[#002e8b] mb-3 text-center text-white rounded-md p-3">
                            <div className="flex user justify-center">
                                <img src={Clint1} className="rounded-full" width={"60"}></img>
                                <img src={Clint2} className="rounded-full" width={"60"}></img>
                                <img src={Clint3} className="rounded-full" width={"60"}></img>
                                <img src={Clint4} className="rounded-full" width={"60"}></img>
                            </div>
                            <div className="userinfo pt-2"> 
                                <h6 className="text-center text-lg font-bold pb-0">41,000,000+</h6>
                                <span className="text-center text-gray-400">searches this week</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                    <div className="bg-[#002e8b] mb-3 text-center text-white rounded-md p-3">
                            <div className="flex user justify-center">
                                <span class="text-yellow-400 text-6xl">★</span>
                                <span class="text-yellow-400 text-6xl">★</span>
                                <span class="text-yellow-400 text-6xl">★</span>
                                <span class="text-yellow-400 text-6xl">★</span>
                                <span class="text-yellow-400 text-6xl">★</span>
                            </div>
                            <div className="userinfo pt-2"> 
                                <h6 className="text-center text-lg font-bold pb-0">Travelers love us</h6>

                                <span className="text-center text-gray-400">1M+ ratings on our app</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <h1 className="text-center font-bold my-3">Our Partner</h1>
                    <div className="flex flex-wrap justify-center">
                        
                        {patner.map((partImg) => (
                            <div className="col-md-2">
                                <img key={partImg.id} src={partImg.patnerLogo} className="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <TruvelDeals />

        <Trip />
        </div>
    )
}

export default Homepage;