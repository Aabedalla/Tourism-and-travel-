import deal1 from '../assets/pexels-adria.jpg'
import deal2 from '../assets/pexels-carolina.jpg'
import deal3 from '../assets/pexels-adria.jpg'


function TravelDeals(){
    const Slider = [
        { id: 1, img: deal1, title: "Paris Getaway", descrption: "Enjoy the romantic city of Paris at an unbeatable price.", price: "$179" },
        { id: 2, img: deal2, title: "Beach Escape", descrption: "Relax on the sunny beaches with our special deal.", price: "$150" },
        { id: 3, img: deal3, title: "New York Adventure", descrption: "Explore the Big Apple with exclusive discounts.", price: "$189" },
    ];

    return (
        <>
        <section>
            <div className="container mx-auto px-4 my-16">
                <h2 className="text-2xl font-bold text-[#002E8B] text-center py-5">Travel deals under $190</h2>
                <div id="travelDealsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {Slider.map((slide, index) => (
                            <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="flex justify-center mb-5">
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
                                        <img src={slide.img} alt="Trip Image" className="w-full h-48 object-cover" />
                                        <div className="p-4 text-center">
                                            <h3 className="text-lg font-bold text-[#002E8B]">{slide.title}</h3>
                                            <p className="text-gray-600 text-sm">{slide.descrption}</p>
                                            <p className="mt-2 font-bold text-[#002E8B]">From {slide.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#travelDealsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#travelDealsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}

export default TravelDeals;
