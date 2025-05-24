import { Wrench, Car, Droplet, Thermometer, Battery, MoveRight } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#171716] text-base-content font-sans">
      <header className="flex items-center justify-between px-36 py-6 h-24 bg-[#272627] text-neutral-content shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-wide text-yellow-400 italic">AMR Auto Repair</span>
        </div>
        <nav className="flex gap-6 text-md">
          <a className="hover:text-yellow-400  cursor-pointer">Services</a>
          <a className="hover:text-yellow-400  cursor-pointer">About</a>
          <a className="hover:text-yellow-400  cursor-pointer">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[90vh] bg-gray-800 text-white bg-cover bg-center"
        style={{ backgroundImage: 'url(/AMR_Auto.png)' }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Action Mobile Auto Repair</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Honest, skilled mechanics serving Salt Lake City and beyond. We keep you running smoothly.
          </p>
          <button className="btn btn-md bg-yellow-400 border-yellow-400 text-sm md:text-base">Give Us A Call</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-36 py-16 bg-[#171716] text-base-content">
        <h2 className="text-5xl font-bold text-base-100 text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Tire Services",
              icon: <MoveRight className="w-8 h-8 text-yellow-400 mb-2" />,
              bullets: ["Tire repair", "Tire balancing", "Tire swapping"]
            },
            {
              title: "Engine Repair",
              icon: <Wrench className="w-8 h-8 text-yellow-400 mb-2" />,
              bullets: ["Diagnostics", "Timing belt replacement", "Engine rebuild"]
            },
            {
              title: "Oil & Fluids",
              icon: <Droplet className="w-8 h-8 text-yellow-400 mb-2" />,
              bullets: ["Oil changes", "Coolant flush", "Transmission fluid"]
            },
            {
              title: "AC & Heating",
              icon: <Thermometer className="w-8 h-8 text-yellow-400 mb-2" />,
              bullets: ["AC recharge", "Heater repair", "Blower motor replacement"]
            },
            {
              title: "Battery Service",
              icon: <Battery className="w-8 h-8 text-yellow-400 mb-2" />,
              bullets: ["Battery testing", "Replacement", "Terminal cleaning"]
            },
            {
              title: "Brakes",
              icon: <Car className="w-8 h-8 text-yellow-400 mb-2" />,
              bullets: ["Brake pad replacement", "Rotor resurfacing", "Fluid bleed"]
            },
          ].map((service, index) => (
            <div key={index} className="p-6 rounded-md shadow bg-[#272627]">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl text-base-100 font-semibold mb-2">{service.title}</h3>
                <ul className="text-sm text-base-200 list-disc list-inside">
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
      <section className="px-6 md:px-36 py-20 bg-[#171716] text-base-100">
        <h2 className="text-5xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8498917208495!2d-111.89104892404513!3d40.76077933510363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f4d0f0b3fc0f%3A0xdea1b7b5c5e4f42a!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1716587430582!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-md border"
            ></iframe>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <p><strong>Phone:</strong> (801) 555-1234</p>
            <p><strong>Email:</strong> contact@amrautorepair.com</p>
            <p><strong>Address:</strong> 123 Mechanic Lane, Salt Lake City, UT</p>
            <p><strong>Hours:</strong> Mon–Fri, 8am–6pm</p>
          </div>
        </div>
      </section>

      <footer className="px-8 py-6 h-24 bg-[#272627] text-neutral-content text-sm text-center">
        &copy; {new Date().getFullYear()} AMR Auto Repair. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
