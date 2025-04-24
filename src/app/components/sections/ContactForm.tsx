export const ContactForm = () => {
     return (
          <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
               <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold">Contact Me</h2>
                    <form className="mt-8 max-w-lg mx-auto">
                         <div className="flex flex-col gap-4">
                              <input
                                   type="text"
                                   placeholder="Your Name"
                                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <input
                                   type="email"
                                   placeholder="Your Email"
                                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <textarea
                                   placeholder="Your Message"
                                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              ></textarea>
                              <button type="submit" className="mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                   Send Message
                              </button>
                         </div>
                    </form>
               </div>
          </section>
     )
}
