import UserContext from "../context/userDetailContext";
import ProfileCard from "./ProfileCard";

const About = () => {
  // console.log("hello");

  const user = {
    name: "John Doe",
    bio: "A passionate developer with a love for creating intuitive user experiences.",
    avatar:"https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
    location: "San francisco, CA",
    email: "john.doe@example.com",
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <div className="flex justify-center items-center min-h-[60vh] bf-gray-100 py-8">
          <ProfileCard />
        </div>
      </UserContext.Provider>
      
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="w-full h-screen bg-gray-900 text-white flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-teal-400 mb-4">
              Desi Boys Company
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-teal-400 mb-4">
              About Our Store
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Your one-stop destination for quality, style, and unbeatable
              prices. At our store, we blend technology with trends to bring you
              the best in online shopping.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-6 md:px-20 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              We’re on a mission to revolutionize the way people shop online.
              With premium s, fast delivery, and outstanding customer service,
              we strive to create an experience you can trust and enjoy.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
              What We Stand For
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-6 rounded-lg border border-gray-200 shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2 text-teal-600">
                  Quality First
                </h4>
                <p className="text-gray-600">
                  Only the finest s from verified brands and suppliers.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2 text-teal-600">
                  Customer Focused
                </h4>
                <p className="text-gray-600">
                  Your satisfaction drives everything we do—from support to
                  delivery.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2 text-teal-600">
                  Innovation
                </h4>
                <p className="text-gray-600">
                  We constantly explore new ways to improve the shopping
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-teal-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands of Happy Customers
          </h2>
          <p className="text-lg mb-8">
            Start your shopping journey with us today.
          </p>
          <a
            href="/shop"
            className="bg-white text-teal-600 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </section>
      </div>
    </>
  );
};

export default About;
