import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function WireframeOnePreview() {
  const navigate = useNavigate();
  const [loadingPhone, setLoadingPhone] = useState(false);

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
          onClick={() => handleNavigation('/preview')}
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
                    <source src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/Professional_Mode_A_basketball_levitating_on_top_o.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9Qcm9mZXNzaW9uYWxfTW9kZV9BX2Jhc2tldGJhbGxfbGV2aXRhdGluZ19vbl90b3Bfby5tcDQiLCJpYXQiOjE3NDE4NTg1NjYsImV4cCI6MTc3MzM5NDU2Nn0.8MWgw3elMt_STMX70cEHvx7QfNNM_CRA-iEE1e0jccY" type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col items-start justify-center p-12 pl-8 w-[55%]">
            {/* Text Above Form */}
            <div className="text-white text-left mb-8 max-w-[400px] w-full">
              <p className="text-xl font-medium leading-relaxed">
                JoJo is open for Business. Inviting a limited number of users to explore our new demo platform. Interested in creating your own experience? Contact us today✨
              </p>
            </div>

            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

export default WireframeOnePreview;