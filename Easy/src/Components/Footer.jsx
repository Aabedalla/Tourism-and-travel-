
export default function Footer() {
  return (
    <>
    <section className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="nav__logo">
                <a href="#" className="logo text-2xl font-semibold" style={{ color: "#333333" }}>
                  LifeEase Travel
                </a>
              </div>
              <p style={{ textAlign: "left", marginTop: "10px" }}>
                Explore the world with ease and excitement through our
                comprehensive travel platform. Your journey begins here, where
                seamless planning meets unforgettable experiences.
              </p>
              <div className="socialMedia flex space-x-3">
              <i className="fa-brands fa-facebook text-blue-600 text-2xl"></i>
              <i className="fa-brands fa-whatsapp text-green-400 text-2xl"></i>
              <i className="fa-brands fa-instagram text-pink-500 text-2xl"></i>
              </div>
            </div>

            <div className="col-md-2">
              <div className="Quicklinks grid " style={{lineHeight: '2rem' , color: '#333333'}}>
                <h4>Quick Links</h4>
                <a href="#">Home</a>
                <a href="#">Flights</a>
                <a href="#">Hotels</a>
                <a href="#">Cruise</a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="Quicklinks grid" style={{lineHeight: '2rem' , color: '#333333'}}>
                <h4>Contact Us</h4>
                <a href="#">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>{" "}
                  +91 9876543210
                </a>
                <a href="#">
                  <span>
                    <i className="ri-record-mail-line"></i>
                  </span>{" "}
                  info@skywings
                </a>
                <a href="#">
                  <span>
                    <i className="ri-map-pin-2-fill"></i>
                  </span>{" "}
                  New Delhi, India
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="Quicklinks">
                <h4>Subscribe</h4>
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="border p-2 w-full rounded-md"
                />
                <button className="btn btn-primary mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="Copyright text-center mt-5">Copyright © {new Date().getFullYear()} ABEDALLA EMARA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
    </>
    
  );
}
