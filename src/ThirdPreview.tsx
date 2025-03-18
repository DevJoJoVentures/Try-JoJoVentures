import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function ThirdPreview() {
  const navigate = useNavigate();
  const [loadingPhone, setLoadingPhone] = useState(false);
  const [hoveredWireframe, setHoveredWireframe] = useState<number | null>(null);

  const handleNavigation = (path: string) => {
    setLoadingPhone(true);
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => handleNavigation('/')}
          className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-[#ffdab8] transition-colors min-h-[44px] min-w-[44px]"
        >
          <ArrowLeft size={24} />
          <span className="hidden md:inline">Back</span>
        </button>

        <main className="flex-1 flex flex-col md:flex-row items-center">
          {/* Left Side - Phone Preview */}
          <div className="w-full md:w-[45%] flex items-center justify-center md:justify-end p-4 md:p-8 md:pr-0">
            <div className="relative w-full max-w-[280px] md:w-[400px] h-[560px] md:h-[800px] border-8 border-white rounded-[48px] overflow-hidden hover:border-[#ffdab8] transition-all duration-300">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-gray-400/10 rounded-full z-10"></div>
              
              {/* Video Content */}
              {loadingPhone ? (
                <LoadingScreen />
              ) : (
                <div className="w-full h-full relative">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/Professional_Mode_in_a_bustling_urban_scene__ln_Ho%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9Qcm9mZXNzaW9uYWxfTW9kZV9pbl9hX2J1c3RsaW5nX3VyYmFuX3NjZW5lX19sbl9IbyAoMSkubXA0IiwiaWF0IjoxNzQxODIzMTcxLCJleHAiOjE3NzMzNTkxNzF9.EuIFTGLKImlBH_X5QUzgKUkKSYw-ve6r9mdegcuxjfg" type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-[55%] flex flex-col items-center md:items-start justify-center p-4 md:p-12 md:pl-8">
            <div className="w-full max-w-xl text-center md:text-left">
              <a 
                href="https://www.jojo.ventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/png_trns_logo_3x%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9wbmdfdHJuc19sb2dvXzN4ICgyKS5wbmciLCJpYXQiOjE3NDE3NDM3NDEsImV4cCI6MTc3MzI3OTc0MX0.yTJQnLkppmvEDEzlc6KaHsFl-HkrGf4t4Z2-BvW3eds"
                  alt="JoJo Ventures Logo"
                  className="h-24 md:h-32 w-auto mx-auto mb-8"
                />
              </a>
              <h2 className="text-2xl md:text-[28px] font-bold text-white mb-8">
                Step 2 - Choose Your Product To Be Displayed
              </h2>
              
              {/* Wireframe Selection Buttons */}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-4 md:mt-8">
                <div className="flex flex-col items-center w-full md:w-auto">
                  <div 
                    className="relative w-full md:w-48"
                    onMouseEnter={() => setHoveredWireframe(0)}
                    onMouseLeave={() => setHoveredWireframe(null)}
                  >
                    <button className="relative w-full md:w-48 h-48 border-4 border-white rounded-lg overflow-hidden hover:border-[#ffdab8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black mb-4 bg-white">
                      <div className="w-full h-full p-4 flex items-center justify-center">
                        <img 
                          src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/jojoventurespiagetwatch.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9qb2pvdmVudHVyZXNwaWFnZXR3YXRjaC53ZWJwIiwiaWF0IjoxNzQxOTU1Njk1LCJleHAiOjE3NzM0OTE2OTV9.NtpOJh6WHeimrrmLKP9BEvM1G6zlyEYyXeT_F4DUKrU"
                          alt="Piaget Watch"
                          className="w-auto h-auto max-w-full max-h-full object-contain"
                        />
                      </div>
                    </button>
                    {/* Hover/Touch Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-20 rounded-lg
                        ${hoveredWireframe === 0 ? 'opacity-100' : 'opacity-0 md:pointer-events-none'}`}
                    >
                      <button
                        onClick={() => handleNavigation('/wireframe-one-third')}
                        className="min-h-[44px] px-6 md:px-8 py-3 bg-white text-black rounded-full font-bold text-lg md:text-xl border-4 border-black
                          flex items-center gap-2 transition-all duration-300
                          hover:bg-[#ffdab8] hover:text-black hover:border-black
                          focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black"
                      >
                        Select <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full md:w-auto">
                  <div 
                    className="relative w-full md:w-48"
                    onMouseEnter={() => setHoveredWireframe(1)}
                    onMouseLeave={() => setHoveredWireframe(null)}
                  >
                    <button className="relative w-full md:w-48 h-48 border-4 border-white rounded-lg overflow-hidden hover:border-[#ffdab8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black mb-4 bg-white">
                      <img 
                        src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/jojoventuresnoseimage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9qb2pvdmVudHVyZXNub3NlaW1hZ2UuanBnIiwiaWF0IjoxNzQxOTU2MDgzLCJleHAiOjE3NzM0OTIwODN9.odZKThLuYjzuFXBV3P9gzCvern20HOqOgERKhxHJ9-M"
                        alt="Nose Sculpture"
                        className="w-full h-full object-cover"
                      />
                    </button>
                    {/* Hover/Touch Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-20 rounded-lg
                        ${hoveredWireframe === 1 ? 'opacity-100' : 'opacity-0 md:pointer-events-none'}`}
                    >
                      <button
                        onClick={() => handleNavigation('/wireframe-two-third')}
                        className="min-h-[44px] px-6 md:px-8 py-3 bg-white text-black rounded-full font-bold text-lg md:text-xl border-4 border-black
                          flex items-center gap-2 transition-all duration-300
                          hover:bg-[#ffdab8] hover:text-black hover:border-black
                          focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black"
                      >
                        Select <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

export default ThirdPreview;