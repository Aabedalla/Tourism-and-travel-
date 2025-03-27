import React from "react"
import Heder from "../assets/header.png"
function Homepage(){

    const BookingTabs = [
        {id:1 , TabName: "Flights"},
        {id:2 , TabName: "Hotels"},
        {id:3 , TabName: "Car Rental"},
        {id:4 , TabName: "Packages"},
    ]
    return(
        <>
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
                    <div className="bookingTabs">

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
                            محتوى رحلات الطيران
                        </div>
                        <div className="tab-pane fade" id="Hotels">
                            محتوى الفنادق
                        </div>
                        <div className="tab-pane fade" id="CarRental">
                            محتوى تأجير السيارات
                        </div>
                        <div className="tab-pane fade" id="Packages">
                            محتوى الباقات
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>


        </>
    )
}

export default Homepage;