import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function WireframeTwoPreview() {
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
          className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-[#ffdab8] transition-colors min-h-[44px] min-w-[44px]"
        >
          <ArrowLeft size={24} />
          <span className="hidden md:inline">Back</span>
        </button>

        <main className="flex-1 flex flex-col md:flex-row items-center">
          {/* Left Side - Phone Preview */}
          <div className="w-full md:w-[45%] flex items-center justify-center md:justify-end p-4 md:p-8 md:pr-0 order-1 md:order-none">
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
                    <source src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/Professional_Mode_A_rubberneck_levitating_and_flyi.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9Qcm9mZXNzaW9uYWxfTW9kZV9BX3J1YmJlcm5lY2tfbGV2aXRhdGluZ19hbmRfZmx5aS5tcDQiLCJpYXQiOjE3NDE5MTY0NzQsImV4cCI6MTc3MzQ1MjQ3NH0.LXPIXUQUqSniBMPScDLNa7eo6DKBeSj37x6a7MU7rpM" type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-[55%] flex flex-col items-center md:items-start justify-center p-4 md:p-12 md:pl-8 order-2 md:order-none">
            {/* Text Above Form */}
            <div className="text-white text-center md:text-left mb-6 md:mb-8 max-w-[400px] w-full">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
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

export default WireframeTwoPreview;