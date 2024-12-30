
const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-gray-100 p-8 rounded-xl shadow-neumorph-colored">
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed text-center">
          We'd love to hear from you! Whether you have feedback, questions, or
          just want to say hello, feel free to reach out.
        </p>
        <form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-gray-100 shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-indigo-500 text-white font-semibold shadow-neumorph-colored hover:shadow-neumorph-colored-hover active:shadow-neumorph-inset-colored transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
