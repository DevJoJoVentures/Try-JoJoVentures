import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function SecondPreview() {
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
          className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-[#ffdab8] transition-colors"
        >
          <ArrowLeft size={24} />
          <span>Back</span>
        </button>

        <main className="flex-1 flex items-center">
          {/* Left Side - Phone Preview */}
          <div className="flex items-center justify-end p-8 pr-0 w-[45%]">
            <div className="relative w-[400px] h-[800px] border-8 border-white rounded-[48px] overflow-hidden hover:border-[#ffdab8] transition-all duration-300">
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
                    <source src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/Professional_Mode_The_giant_curtain_opens_up__reve.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9Qcm9mZXNzaW9uYWxfTW9kZV9UaGVfZ2lhbnRfY3VydGFpbl9vcGVuc191cF9fcmV2ZS5tcDQiLCJpYXQiOjE3NDE3NDUwMjAsImV4cCI6MTc3MzI4MTAyMH0.mhoGbF5wkYaarx0zoltnQqsZz5350dEh-yyznYet9S8" type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col items-center justify-center p-12 pl-8 w-[55%]">
            <div className="w-full max-w-xl text-center">
              <a 
                href="https://www.jojo.ventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/png_trns_logo_3x%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9wbmdfdHJuc19sb2dvXzN4ICgyKS5wbmciLCJpYXQiOjE3NDE3NDM3NDEsImV4cCI6MTc3MzI3OTc0MX0.yTJQnLkppmvEDEzlc6KaHsFl-HkrGf4t4Z2-BvW3eds"
                  alt="JoJo Ventures Logo"
                  className="h-32 w-auto mx-auto mb-8"
                />
              </a>
              <h2 className="text-[28px] font-bold text-white mb-8 whitespace-nowrap">
                Step 2 - Choose Your Product To Be Displayed
              </h2>
              
              {/* Wireframe Selection Buttons */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredWireframe(0)}
                    onMouseLeave={() => setHoveredWireframe(null)}
                  >
                    <button className="relative w-48 h-48 border-4 border-white rounded-lg overflow-hidden hover:border-[#ffdab8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black mb-4 bg-white">
                      <div className="w-full h-full p-4 flex items-center justify-center">
                        <img 
                          src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/Jojoventuresshiba.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9Kb2pvdmVudHVyZXNzaGliYS5qcGciLCJpYXQiOjE3NDE5MTkyMzcsImV4cCI6MTc3MzQ1NTIzN30.ksLgoyzG1Bvi7RfxVmWIcTkn3HL4iPGtoPpWbjJDPMI"
                          alt="Shiba"
                          className="w-auto h-auto max-w-full max-h-full object-contain"
                        />
                      </div>
                    </button>
                    {/* Hover Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-20 rounded-lg ${
                        hoveredWireframe === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <button
                        onClick={() => handleNavigation('/wireframe-one-second')}
                        className="px-8 py-3 bg-white text-black rounded-full font-bold text-xl border-4 border-black
                          flex items-center gap-2 transition-all duration-300
                          hover:bg-[#ffdab8] hover:text-black hover:border-black
                          focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black"
                      >
                        Select <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredWireframe(1)}
                    onMouseLeave={() => setHoveredWireframe(null)}
                  >
                    <button className="relative w-48 h-48 border-4 border-white rounded-lg overflow-hidden hover:border-[#ffdab8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black mb-4 bg-white">
                      <div className="w-full h-full p-4 flex items-center justify-center">
                        <img 
                          src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/jojoventureszebra.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9qb2pvdmVudHVyZXN6ZWJyYS5qcGVnIiwiaWF0IjoxNzQyMTk3NjM3LCJleHAiOjE3NzM3MzM2Mzd9._IjP2EVpPODBjuRcN5OvM9r-D9Bx9ocKKtuWCKFASyE"
                          alt="Zebra"
                          className="w-auto h-auto max-w-full max-h-full object-contain"
                        />
                      </div>
                    </button>
                    {/* Hover Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-20 rounded-lg ${
                        hoveredWireframe === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <button
                        onClick={() => handleNavigation('/wireframe-two-second')}
                        className="px-8 py-3 bg-white text-black rounded-full font-bold text-xl border-4 border-black
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

export default SecondPreview;