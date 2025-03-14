import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string, index: number) => {
    setLoadingIndex(index);
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  const PhoneOutline = ({ index }: { index: number }) => (
    <div 
      className="relative mb-20"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Phone outline container */}
      <div className="relative w-[196px] h-[350px] border-8 border-white rounded-[28px] flex items-center justify-center transition-all duration-300 hover:border-[#ffdab8] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        {/* Notch */}
        <div className="absolute top-2 w-[84px] h-[18px] bg-gray-400/10 rounded-full"></div>
        
        {/* Content */}
        {loadingIndex === index ? (
          <LoadingScreen />
        ) : (
          <div className="absolute inset-0 rounded-[20px] overflow-hidden">
            {index === 0 ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/ai-animation.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9haS1hbmltYXRpb24ubXA0IiwiaWF0IjoxNzQxNzQzODkxLCJleHAiOjE3NzMyNzk4OTF9.DpC1P7LHsRuDDaUKBhvYbtfJdblh5jYOQW34FBRQeC0" type="video/mp4" />
              </video>
            ) : index === 1 ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/Professional_Mode_The_giant_curtain_opens_up__reve.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9Qcm9mZXNzaW9uYWxfTW9kZV9UaGVfZ2lhbnRfY3VydGFpbl9vcGVuc191cF9fcmV2ZS5tcDQiLCJpYXQiOjE3NDE3NDUwMjAsImV4cCI6MTc3MzI4MTAyMH0.mhoGbF5wkYaarx0zoltnQqsZz5350dEh-yyznYet9S8" type="video/mp4" />
              </video>
            ) : (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/Professional_Mode_in_a_bustling_urban_scene__ln_Ho%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9Qcm9mZXNzaW9uYWxfTW9kZV9pbl9hX2J1c3RsaW5nX3VyYmFuX3NjZW5lX19sbl9IbyAoMSkubXA0IiwiaWF0IjoxNzQxODIzMTcxLCJleHAiOjE3NzMzNTkxNzF9.EuIFTGLKImlBH_X5QUzgKUkKSYw-ve6r9mdegcuxjfg" type="video/mp4" />
              </video>
            )}
          </div>
        )}

        {/* Hover-triggered select button */}
        <button 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 
            bg-white text-black rounded-full font-bold text-xl border-4 border-black
            flex items-center gap-2 transition-all duration-300
            hover:bg-[#ffdab8] hover:text-black hover:border-black
            focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black 
            active:transform active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            opacity-0 pointer-events-none whitespace-nowrap
            ${hoveredIndex === index ? 'opacity-100 pointer-events-auto' : ''}`}
          onClick={() => {
            if (index === 0) handleNavigation('/preview', index);
            if (index === 1) handleNavigation('/second-preview', index);
            if (index === 2) handleNavigation('/third-preview', index);
          }}
          aria-label={`Select phone option ${index + 1}`}
          role="button"
          tabIndex={hoveredIndex === index ? 0 : -1}
        >
          Select <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-black flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 max-w-4xl">
            <div className="mb-6">
              <a 
                href="https://www.jojo.ventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/png_trns_logo_3x%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9wbmdfdHJuc19sb2dvXzN4ICgyKS5wbmciLCJpYXQiOjE3NDE3NDM3NDEsImV4cCI6MTc3MzI3OTc0MX0.yTJQnLkppmvEDEzlc6KaHsFl-HkrGf4t4Z2-BvW3eds"
                  alt="JoJo Ventures Logo"
                  className="h-40 md:h-48 lg:h-56 mx-auto w-auto object-contain transition-all duration-300"
                />
              </a>
            </div>
            <h1 className="text-[32px] font-bold text-white mb-6">
              Create Unforgettable Moments with JoJo Ventures
            </h1>
            <div className="text-[18px] text-white mb-8 leading-relaxed max-w-3xl mx-auto space-y-2">
              <p>Turn your vision into reality with our AI-powered creative studio.</p>
              <p>We craft immersive experiences that captivate audiences and elevate brands.</p>
              <p>Ready to innovate? Let's create magic together.</p>
            </div>
            <h2 className="text-[32px] font-bold text-white mb-8">
              Step 1 - Choose Your Advertising Space
            </h2>
          </div>

          {/* Phone Outlines */}
          <div className="flex gap-12 flex-wrap justify-center mt-8">
            {[0, 1, 2].map((index) => (
              <PhoneOutline key={index} index={index} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

export default App;