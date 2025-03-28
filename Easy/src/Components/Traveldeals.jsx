function TruvelDeals(){
    return(
        <>
        <section>
    <div className="container mx-auto  px-4 my-16">
        <h2 className="text-2xl font-bold text-[#002E8B] text-center mb-6">Travel deals under $190</h2>

        <div id="travelDealsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <div className="flex justify-center mb-5">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
                            <img src="" alt="Trip Image" className="w-full h-48 object-cover"></img>
                            <div class="p-4 text-center">
                                <h3 className="text-lg font-bold text-[#002E8B]">Paris Getaway</h3>
                                <p className="text-gray-600 text-sm">Enjoy the romantic city of Paris at an unbeatable price.</p>
                                <p className="mt-2 font-bold text-[#002E8B]">From $179</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="flex justify-center mb-5">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
                            <img src="" alt="Trip Image" className="w-full h-48 object-cover"></img>
                            <div class="p-4 text-center">
                                <h3 className="text-lg font-bold text-[#002E8B]">Beach Escape</h3>
                                <p className="text-gray-600 text-sm">Relax on the sunny beaches with our special deal.</p>
                                <p className="mt-2 font-bold text-[#002E8B]">From $150</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="flex justify-center mb-5">
                        <div class="bg-white shadow-lg rounded-lg overflow-hidden w-80">
                            <img src="" alt="Trip Image" class="w-full h-48 object-cover"></img>
                            <div class="p-4 text-center">
                                <h3 class="text-lg font-bold text-[#002E8B]">New York Adventure</h3>
                                <p class="text-gray-600 text-sm">Explore the Big Apple with exclusive discounts.</p>
                                <p class="mt-2 font-bold text-[#002E8B]">From $189</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#travelDealsCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#travelDealsCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

        </div>
    </div>
</section>
        </>
    )
}

export default TruvelDeals;