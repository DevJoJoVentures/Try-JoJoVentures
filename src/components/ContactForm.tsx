import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ArrowRight } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface FormData {
  fullName: string;
  email: string;
  role: string;
  interest: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    role: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            role: formData.role,
            interest: formData.interest,
            message: formData.message
          }
        ]);

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'business@jojo.ventures',
          subject: `New Contact Form Submission from ${formData.fullName}`,
          formData: {
            fullName: formData.fullName,
            email: formData.email,
            role: formData.role,
            interest: formData.interest,
            message: formData.message
          }
        }
      });

      if (emailError) throw emailError;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        role: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-8">
      <div className="space-y-4 md:space-y-6">
        {/* Full Name */}
        <div className="text-left">
          <label htmlFor="fullName" className="block text-sm font-medium text-white mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-left text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:border-transparent transition-all min-h-[44px]"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="text-left">
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-left text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:border-transparent transition-all min-h-[44px]"
            placeholder="Enter your email"
          />
        </div>

        {/* Role */}
        <div className="text-left">
          <label htmlFor="role" className="block text-sm font-medium text-white mb-1">
            Your Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-left text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:border-transparent transition-all min-h-[44px] appearance-none"
          >
            <option value="">Select your role</option>
            <option value="marketing_c_suite">Marketing Professional - C Suite</option>
            <option value="marketing_professional">Marketing Professional</option>
            <option value="business_c_suite">Business Executive - C Suite</option>
            <option value="business_executive">Business Executive</option>
            <option value="ai_enthusiast">AI Enthusiast</option>
            <option value="kol_influencer">KOL Influencer</option>
            <option value="other">Other (Please Specify)</option>
          </select>
        </div>

        {/* Interest */}
        <div className="text-left">
          <label htmlFor="interest" className="block text-sm font-medium text-white mb-1">
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-left text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:border-transparent transition-all min-h-[44px] appearance-none"
          >
            <option value="">Select your interest</option>
            <option value="social_media">Social Media Advertising</option>
            <option value="general_media">General Media Advertising</option>
            <option value="immersive_ads">Immersive Ads</option>
            <option value="ai_consultancy">AI Consultancy</option>
            <option value="ai_media">AI Media Production</option>
            <option value="ai_events">AI Powered Events</option>
          </select>
        </div>

        {/* Message */}
        <div className="text-left">
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-left text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:border-transparent transition-all resize-none min-h-[120px]"
            placeholder="Tell us about your project or requirements"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[44px] px-6 md:px-8 py-3 bg-white text-black rounded-full font-bold text-base border-4 border-black
            flex items-center justify-center gap-2 transition-all duration-300
            hover:bg-[#ffdab8] hover:text-black hover:border-black
            focus:outline-none focus:ring-2 focus:ring-[#ffdab8] focus:ring-offset-2 focus:ring-offset-black
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'} <ArrowRight size={24} />
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm text-center md:text-left mt-4">
            Thank you! Your message has been sent successfully.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm text-center md:text-left mt-4">
            There was an error sending your message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;