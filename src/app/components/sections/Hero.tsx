import { useState } from 'react';

export const HeroSection = () => {
     // State untuk menentukan video yang ditampilkan
     const [videoIndex, setVideoIndex] = useState(1);

     // Fungsi untuk mengganti video
     const changeVideoBackground = () => {
          setVideoIndex((prevIndex) => (prevIndex === 1 ? 2 : 1));
     };

     return (
          <section className="relative flex items-center justify-center h-screen overflow-hidden">
               {/* Background Video 1 */}
               {videoIndex === 1 && (
                    <video
                         autoPlay
                         loop
                         muted
                         playsInline
                         className="absolute inset-0 w-full h-full object-cover"
                    >
                         <source src="/hero-vid1.mp4" type="video/mp4" />
                         Your browser does not support the video tag.
                    </video>
               )}

               {/* Background Video 2 */}
               {videoIndex === 2 && (
                    <video
                         autoPlay
                         loop
                         muted
                         playsInline
                         className="absolute inset-0 w-full h-full object-cover"
                    >
                         <source src="/hero-vid2.mp4" type="video/mp4" />
                         Your browser does not support the video tag.
                    </video>
               )}

               {/* Overlay */}
               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

               {/* Konten Hero */}
               <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                         HELLO, I'M STILL-MATT
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
                         Technology builds the engine. Design drives the experience. I do both.
                    </p>
                    <button className="relative mt-6 px-6 py-3 bg-gradient-to-r from-[#FDBA74] to-[#FB923C] text-white rounded-lg shadow-md shadow-orange-400/30 hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300 ease-in-out overflow-hidden">
                         <span className="relative text-white z-10">What I Do</span>
                         <span className="absolute inset-0 bg-white opacity-10 blur-md"></span>
                    </button>
               </div>

               {/* Tombol untuk mengganti video, dengan ikon yang berbeda */}
               <button
                    onClick={changeVideoBackground}
                    className="absolute top-100 right-6 p-4 bg-[#FDBA74] text-white rounded-full shadow-md hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300 ease-in-out z-20"
                    aria-label="Change Video Background"
               >
                    {videoIndex === 1 ? (
                         <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M4 16l4-4a3 3 0 014 0l4 4M4 7h.01M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                         </svg>
                    ) : (
                              <svg
                                   className="w-6 h-6 text-white"
                                   fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 16l4-4a3 3 0 014 0l4 4M4 7h.01M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
                                   />
                              </svg>
                    )}
               </button>
          </section>
     );
};
