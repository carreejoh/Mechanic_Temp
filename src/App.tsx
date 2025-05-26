import { Phone, MapPin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Header";

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  const location = useLocation()

  useEffect(() => {
    if (location.hash === "") { scrollToHome() }
    if (location.hash === "#services") { scrollToService() }
    if (location.hash === "#contact") { scrollToContact() }
  }, [location])

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <main className="min-h-screen w-full pt-24  overflow-x-hidden bg-[#171716] text-base-content font-sans">
      <Header />

      {/* Hero Section */}
      <section
        ref={homeRef}
        className="relative flex items-center justify-center h-[90vh] bg-gray-800 text-white bg-cover bg-center
         px-6
      sm:px-6    /* 1.5rem on ≥640px */
      md:px-8    /* 2rem on ≥768px */
        lg:px-24   /* 8rem on ≥1024px */
        xl:px-28   /* 10rem on ≥1280px */
        2xl:px-48 "
        style={{ backgroundImage: 'url(/AMR_Auto.png)' }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Action Mobile Auto Repair</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Honest, skilled mechanics serving Salt Lake City and beyond. We keep you running smoothly.
          </p>
          <button
            onClick={scrollToContact}
            className="btn btn-md bg-yellow-400 border-yellow-400 text-sm md:text-base"
          >
            Give Us A Call
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={serviceRef}
        className="
      px-6
      sm:px-6    /* 1.5rem on ≥640px */
      md:px-8    /* 2rem on ≥768px */
        lg:px-24   /* 8rem on ≥1024px */
        xl:px-28   /* 10rem on ≥1280px */
        2xl:px-48 
        py-16 bg-[#171716] text-base-content border-t-[2px] border-yellow-400">
        <h2 className="text-4xl font-bold text-base-100 text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {[
            {
              title: "Tire Services",
              image: "/tireBalance.jpg",
              bullets: ["Tire repair", "Tire balancing", "Tire swapping"]
            },
            {
              title: "Engine Repair",
              image: "/engineRepair.jpg",
              bullets: ["Diagnostics", "Timing belt replacement", "Engine rebuild"]
            },
            {
              title: "Scheduled Maintainence",
              image: "/oilChange.jpeg",
              bullets: ["Oil change", "Battery testing", "Fluid change"]
            },
            {
              title: "Brakes",
              image: "/brakeJob.jpg",
              bullets: ["Brake pad replacement", "Rotor resurfacing", "Fluid bleed"]
            },
          ].map((service, index) => (
            <div key={index} className="card bg-[#272627] w-full shadow-md">
              <figure>
                <img
                  src={service.image}
                  alt={service.title}
                  className="brightness-60 w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-base-100 text-2xl font-bold">{service.title}</h2>
                <ul className="list-disc list-inside text-sm text-base-200">
                  {service.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-[#171716] text-base-100">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          <div className="w-full lg:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.7052202371249!2d-111.89263766984047!3d40.74396671929422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f53ab3a61df5%3A0x16439d32409dd44b!2sAction%20Mobile%20Repair!5e0!3m2!1sen!2sus!4v1748289559907!5m2!1sen!2sus"
              width="100%"
              height="350"
              loading="lazy"
              className="rounded-sm"
              referrerPolicy="no-referrer-when-downgrade">

            </iframe>
          </div>
          <div className="w-full flex lg:w-1/2 gap-2">
            <div>
              <h3 className="text-lg font-bold">AMR Auto Repair</h3>
              <div className="flex items-center">
                <MapPin
                  size={24}
                  color="#FDC700"
                />
                <a href="https://www.google.com/maps/place/Action+Mobile+Repair/@40.7439955,-111.8925289,117m/data=!3m1!1e3!4m14!1m7!3m6!1s0x8752f53ab3a61df5:0x16439d32409dd44b!2sAction+Mobile+Repair!8m2!3d40.7439845!4d-111.892386!16s%2Fg%2F1tfbj64m!3m5!1s0x8752f53ab3a61df5:0x16439d32409dd44b!8m2!3d40.7439845!4d-111.892386!16s%2Fg%2F1tfbj64m?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" className="mt-2 ml-2 underline">1145 Richards St, <br></br>Salt Lake City, UT 84101</a>
              </div>
              <div className="flex items-center mt-3">
                <Phone size={24} color="#FDC700" />
                <a href="tel:+18015551234" className="ml-2 hover:text-yellow-400">
                  (801) 555-1234
                </a>
              </div>
              <div className="flex items-center mt-3">
                <Mail size={24} color="#FDC700" />
                <a href="mailto:AMR_Auto@gmail.com" className="ml-2 hover:text-yellow-400">
                  AMR_Auto@gmail.com
                </a>
              </div>
            </div>
            <div className="ml-10">
              <h4 className="text-lg font-bold">Hours of Operation</h4>
              <p className="mt-2">Monday – Friday: 7am – 8pm</p>
              <p>Saturday: 7am – 5pm</p>
              <p>Sunday: Closed</p>
              {/* <div className="flex gap-4 mt-4">
                <a href="#" className="text-base-100 hover:text-yellow-400"><i className="fab fa-facebook"></i> Facebook</a>
                <a href="#" className="text-base-100 hover:text-yellow-400"><i className="fab fa-twitter"></i> Twitter</a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 py-6 h-16 bg-[#272627] text-neutral-content text-sm text-center">
        &copy; {new Date().getFullYear()} AMR Auto Repair. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
