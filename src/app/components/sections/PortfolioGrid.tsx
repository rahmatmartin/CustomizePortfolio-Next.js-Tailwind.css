export const PortfolioGrid = () => {
     return (
          <section id="portfolio" className="py-16 px-4">
               <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold">My Work</h2>

                    {/* Grid Project Utama */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <img src="/portfolio1.jpeg" alt="Project 1" className="w-full h-48 object-cover rounded-lg" />
                              <h3 className="mt-4 text-xl font-semibold">Project 1</h3>
                              <p className="mt-2">Description of project 1 goes here.</p>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <img src="/portfolio2.jpeg" alt="Project 2" className="w-full h-48 object-cover rounded-lg" />
                              <h3 className="mt-4 text-xl font-semibold">Project 2</h3>
                              <p className="mt-2">Description of project 2 goes here.</p>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <img src="/portfolio3.jpeg" alt="Project 3" className="w-full h-48 object-cover rounded-lg" />
                              <h3 className="mt-4 text-xl font-semibold">Project 3</h3>
                              <p className="mt-2">Description of project 3 goes here.</p>
                         </div>
                    </div>

                    {/* Tumpukan Card Modern */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                         {[4, 5, 6].map((index) => (
                              <div
                                   key={index}
                                   className="group relative cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
                              >
                                   {/* Tumpukan background blur */}
                                   <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 blur-md opacity-30 z-0"></div>

                                   {/* Card utama */}
                                   <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:rotate-[-1deg] group-hover:scale-[1.03]">
                                        <img src="/portfolio2.jpeg" alt="Project 3" className="w-full h-48 object-cover rounded-lg" />
                                        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                             Project {index}
                                        </h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                                             Description of project {index} goes here.
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     );
};
