import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We're here to help and answer any question you might have.
          </p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Reach Us Directly</h2>
            <p className="mb-4">
              Need quick help? Contact us through these channels:
            </p>
            <ul className="space-y-4">
              <li>
                📍 <strong>Address:</strong> 123 E-Commerce Ave, New York, NY
                10001
              </li>
              <li>
                📞 <strong>Phone:</strong> +1 (800) 123-4567
              </li>
              <li>
                📧 <strong>Email:</strong> support@shopnow.com
              </li>
              <li>
                🕒 <strong>Working Hours:</strong> Mon - Fri, 9am - 6pm
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4 text-blue-600 text-2xl">
                <a href="#" className="hover:text-blue-800">
                  🌐
                </a>
                <a href="#" className="hover:text-blue-800">
                  📘
                </a>
                <a href="#" className="hover:text-blue-800">
                  📸
                </a>
                <a href="#" className="hover:text-blue-800">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
            Visit Our Store
          </h2>
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              className="w-full h-96"
              title="store-location"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
