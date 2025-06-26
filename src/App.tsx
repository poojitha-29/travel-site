import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './Components/Chatbot';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    destination: '',
    date: '',
    travelers: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search through available destinations
    alert(`Searching for:
    Destination: ${searchQuery.destination}
    Date: ${searchQuery.date}
    Travelers: ${searchQuery.travelers}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-blue-900">
  <img src="/sangeethalogo-removebg-preview (1).png"alt="Logo" className="h-12 w-12 object-contain" />
  <span>Sangeetha Holidays Pvt Ltd</span>
</a>

            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#" className="text-blue-900 hover:text-blue-700 font-medium">Home</a></li>
                <li><a href="#destinations" className="text-blue-900 hover:text-blue-700 font-medium">Destinations</a></li>
                <li><a href="#packages" className="text-blue-900 hover:text-blue-700 font-medium">Packages</a></li>
                <li><a href="#about" className="text-blue-900 hover:text-blue-700 font-medium">About</a></li>
                <li><a href="#contact" className="text-blue-900 hover:text-blue-700 font-medium">Contact</a></li>
                <li>
<div className="relative text-blue-900 font-medium">
  <button
    onClick={() => {
      const el = document.getElementById('quickLinksMenu');
      if (el) el.classList.toggle('hidden');
    }}
    className="hover:text-blue-700 focus:outline-none"
  >
    Quick Links 🔒
  </button>

  <div id="quickLinksMenu" className="mt-2 hidden">
    <div>
      <a
        href="https://preview--flight-horizon-reminders.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-blue-700"
      >
        Flight Reminder App
      </a>
    </div>
    <div>
      <a
        href="https://sangeethaholidayspvtltd.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-blue-700"
      >
        Specially Curated for Starhealth
      </a>
    </div>
  </div>
</div>



</li>

              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <ul className="flex flex-col">
              <li><a href="#" className="block px-4 py-3 text-blue-900 hover:bg-blue-50">Home</a></li>
              <li><a href="#destinations" className="block px-4 py-3 text-blue-900 hover:bg-blue-50">Destinations</a></li>
              <li><a href="#packages" className="block px-4 py-3 text-blue-900 hover:bg-blue-50">Packages</a></li>
              <li><a href="#about" className="block px-4 py-3 text-blue-900 hover:bg-blue-50">About</a></li>
              <li><a href="#contact" className="block px-4 py-3 text-blue-900 hover:bg-blue-50">Contact</a></li>
              <li>
  <a
    href="https://preview--flight-horizon-reminders.lovable.app"
    target="_blank"
    rel="noopener noreferrer"
    className="block px-4 py-3 text-blue-900 hover:bg-blue-50"
  >
    Quick Links 🔒
  </a>
</li>

            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Explore breathtaking destinations around the world with personalized travel experiences.</p>
         <a href="#gallery">
  <button className="text-lg px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition">
    Customer Testiomonals
  </button>
</a>

          
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our handpicked selection of stunning locations around the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">{destination.price}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{destination.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Travel Gallery</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Capture the essence of adventure through our stunning travel photography
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((photo, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={photo.url} 
                  alt={photo.location}
                  className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{photo.location}</h3>
                    <p>{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real experiences from real travelers who have explored the world with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.destination}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">{testimonial.comment}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://static.toiimg.com/photo/msid-68113999,width-96,height-65.cms"
                alt="About Wanderlust"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">We Help You Discover the World</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2017, Sangeetha Holidays has been helping travelers create unforgettable memories around the globe. 
                Our mission is to make travel accessible, enjoyable, and enriching for everyone.
              </p>
              <p className="text-gray-600 mb-8">
                We handpick each destination and experience to ensure the highest quality and authentic travel adventures for our clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
      Have questions? We'd love to hear from you.
    </p>

    <div className="max-w-4xl mx-auto">
      <div className="relative" style={{ height: '600px' }}>
        <iframe
          title="Contact Form"
          src="https://lcihg81xmsi.typeform.com/to/ilOmkChP" // Replace with your Typeform link
          className="w-full h-full border-0"
          allow="camera; microphone; autoplay; encrypted-media;"
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
    <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Company Info */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Sangeetha Holidays Pvt Ltd</h3>
        <p className="text-gray-400 mb-4">
          Discover the world with us. We provide unforgettable travel experiences to destinations worldwide.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#destinations" className="text-gray-400 hover:text-white">Destinations</a></li>
          <li><a href="#packages" className="text-gray-400 hover:text-white">Packages</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="font-bold mb-4">Contact Info</h4>
        <ul className="space-y-2 text-gray-400">
          <li>Hyderabad, India</li>
          <li>Phone: +91 81068 68686</li>
          <li>Email: sangeethaholidayspvtltd@gmail.com</li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h4 className="font-bold mb-4 text-center">Follow Us</h4>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/people/Sangeetha-Holiday/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/sangeethaholidays/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@sangeethaholidays302" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 text-2xl">
            <FaYoutube />
          </a>
        </div>
      </div>

    </div>

    {/* Bottom Line */}
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; 2025 Sangeetha Holidays. All rights reserved.</p>
    </div>
  </div>
  <Chatbot />
</footer>


    </div>
  );
}

const destinations = [
  {
    name: "Dubai",
    location: "6N/7D",
    description: "Golden sands, sparkling lights, and endless dreams — welcome to magical Dubai!",
    price: "Starting From 56000 PP",
    rating: "4.9",
    image: "https://wallpaperaccess.com/full/222783.jpg"
  },
  {
    name: "Vietnam",
    location: "6N/7D",
    description: "Journey through Vietnam’s lush landscapes, vibrant markets, and timeless traditions — where every moment tells a story",
    price: "Starting From 40000 PP",
    rating: "4.8",
    image: "https://wallpaperaccess.com/full/201088.jpg"
  },
  {
    name: "Kashmir",
    location: "4N/5D",
    description: "Embrace the serenity of snow-capped peaks, blooming valleys, and shikara rides — Kashmir, where heaven meets Earth.",
    price: "Starting From 30000 PP",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2874386.jpg"
  },
  {
    name: "Ooty & kodaikanal",
    location: "4N/5D",
    description: "Mist-kissed hills, tea-scented air, and timeless charm — escape to the soothing soul of Ooty and Kodaikanal.",
    price: "Starting From 26000 PP",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp5392678.jpg"
  },
  {
    name: "Thailand",
    location: "4N/5D",
    description: "Golden temples, tropical beaches, and street food wonders — discover the vibrant spirit of Thailand.",
    price: "Starting From 40000 PP",
    rating: "4.8",
    image: "https://wallpaperaccess.com/full/3207279.jpg"
  },
  {
    name: "Ujjain & Omkareshwar",
    location: "3N/4D",
    description: "Walk through the sacred ghats and timeless temples — Ujjain, where spirituality meets ancient heritage.",
    price: "Starting From 20000 PP",
    rating: "4.9",
    image: "https://chaloghumane.com/wp-content/uploads/2021/08/Ujjain.jpg"
  }
];

const features = [
  {
    title: "Curated Destinations",
    description: "We personally select and vet all of our destinations to ensure exceptional experiences.",
    icon: <span className="text-blue-600 text-xl">🌍</span>
  },
  {
    title: "Safety First",
    description: "Your safety is our priority with 24/7 support and carefully planned itineraries.",
    icon: <span className="text-blue-600 text-xl">🛡️</span>
  },
  {
    title: "Best Value",
    description: "Get the most out of your travel budget with our price match guarantee.",
    icon: <span className="text-blue-600 text-xl">💰</span>
  },
  {
    title: "Expert Guides",
    description: "Our local guides provide authentic insights and unforgettable experiences.",
    icon: <span className="text-blue-600 text-xl">👤</span>
  }
];

const gallery = [
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.37_e8487b45.jpg",
    location: "",
    description: ""
  },
   {
    url: "/WhatsApp Image 2025-05-22 at 13.17.01_33ac5032.jpg",
    location: "",
    description: ""
  },
 
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.38_abcd911b.jpg",
    location: "",
    description: ""
  },
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.39_0c92d2fe.jpg",
    location: "",
    description: ""
  },
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.39_75bd6785.jpg",
    location: "",
    description: ""
  },
  {
    url: "//WhatsApp Image 2025-04-13 at 11.39.40_c4b32e07.jpg",
    location: "",
    description: ""
  },
   {
    url: "/WhatsApp Image 2025-04-13 at 11.39.44_0c7796d0.jpg",
    location: "",
    description: ""
  },
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.49_f1a472bd.jpg",
    location: "",
    description: ""
  },
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.49_a176d5bb.jpg",
    location: "",
    description: ""
  },
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.47_c3236055.jpg",
    location: "",
    description: ""
  },
   {
    url: "/WhatsApp Image 2025-04-13 at 11.39.48_d25f4b2e.jpg",
    location: "",
    description: ""
  },
   {
    url: "/WhatsApp Image 2025-04-13 at 11.39.47_b6a1f470.jpg",
    location: "",
    description: ""
  },

   {
    url: "/WhatsApp Image 2025-04-13 at 11.39.47_2263f2ce.jpg",
    location: "",
    description: ""
  },
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.46_d10d43be.jpg",
    location: "",
    description: ""
  },
   {
    url: "/WhatsApp Image 2025-04-13 at 11.39.45_073c2bbd.jpg",
    location: "",
    description: ""
  },
 {
    url: "/WhatsApp Image 2025-04-13 at 11.39.44_41987578.jpg",
    location: "",
    description: ""
  },
  {
    url: "/WhatsApp Image 2025-04-13 at 11.39.44_0c7796d0.jpg",
    location: "",
    description: ""
  },
   {
    url: "/WhatsApp Image 2025-04-13 at 11.39.38_522483ee.jpg",
    location: "",
    description: ""
  },
 
   {
    url: "/WhatsApp Image 2025-05-22 at 13.17.02_367f1450.jpg",
    location: "",
    description: ""
  },
   {
    url: "/WhatsApp Image 2025-05-22 at 13.17.02_f7a2841a.jpg",
    location: "",
    description: ""
  }
];

const testimonials = [
  {
    name: "Ananth",
    destination: "Hyderabad",
    comment: "We went to Andaman in March 9th... we spent four days...we enjoyed a lot..receiving and pick up is very nice..we suggest this tours and travels like honeymoon and family trips..facilities are very good..Accommodation and hotels are fine. More over, we are planning another trip with same travels.",
    image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
  },
  {
    name: "G.s.sriharsha",
    destination: "Hyderabad",
    comment: "We travelled to Malaysia trip planned by Sangeeta Tours in the mid of September. That was a very well organized trip and he was always ready on call to help anytime. Best Experience, will definitely plan with him again in the future..",
    image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
  },
  {
    name: "MSN Murthy",
    destination: "Ananthapur",
    comment: "went to Australia from May 3 to 27 th May to Melbourne, Sydney and Brisbane. Booked through Sangeetha travels. Value for Money. All 4 star hotels and Indian food arrangment. very well Satisfied.",
    image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
  }
];



export default App;
