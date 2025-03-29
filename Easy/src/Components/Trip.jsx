import Trip1 from '../assets/tripOne.jpg'
import Trip2 from '../assets/tripThree.jpg'
import Trip3 from '../assets/tripTow.jpg'
function Trip(){

    const TripCards = [
        {id: 1 , img: Trip1 , title: "trip to Maldivs" , disc: "Live in paradise for a while and enjoy your stay at our hotel on Kuredhivaru Island in the Maldives."},
        {id: 2 , img: Trip2 , title: "Istanbul city trip" , disc: "Istanbul, a city that blends modernity with tradition charm, attracts millions of tourists every year."},
        {id: 3 , img: Trip3 , title: "Spain trip" , disc: "It is considered one of the most visited countries in the world, with its amazing cities and tourist"},
       
    ]
    return(
        <>
        <section>
            <div className='container'>
                <div className='row'>
                <h1 className='text-center font-semibold'>Ouer trip</h1>
                <p className='text-center font-medium text-gray-500'>Highlight of exclusiv travel service and experiences</p>

                {TripCards.map((trip) => (
                        <div key={trip.id} className={`col-md-4 my-3`} >
                        <div className="tropImg" >
                            <img src={trip.img} className='w-full h-62 rounded-t-md'></img>
                        </div>
                        <div className="tripInfo border-[1px] border-gray-200 p-3">
                            <h5 className='py-1 '>{trip.title}</h5>
                            <p className='py-1 text-justify'>{trip.disc}</p>
                            <button className='border-[1px] bg-blue-600 rounded-md shadow-2xl hover:bg-blue-800 text-white px-3 py-2' >Request</button>
                        </div>
                    </div>
                    ))}

                    <div className='seerEQUEST flex justify-center my-2'>
                        <a href='#' className='text-white bg-gray-900 px-3 py-2 mx-1 rounded-md '>see More</a>
                        <a href='#' className='text-white bg-blue-600 px-3 py-2 mx-1 rounded-md  hover:bg-blue-800'>request servise</a>
                    </div>
                </div>
                </div>
        </section>
        </>
    )
}

export default Trip;