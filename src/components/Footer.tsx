import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/JojoVentures',
      icon: Facebook,
      ariaLabel: 'Visit JoJo Ventures Facebook page'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/JojoVentures',
      icon: Twitter,
      ariaLabel: 'Visit JoJo Ventures Twitter page'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jojoaiventures/#',
      icon: Instagram,
      ariaLabel: 'Visit JoJo Ventures Instagram page'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/jojo-ventures/posts/?feedView=all',
      icon: Linkedin,
      ariaLabel: 'Visit JoJo Ventures LinkedIn page'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@JoJoAIventures',
      icon: Youtube,
      ariaLabel: 'Visit JoJo Ventures YouTube channel'
    }
  ];

  return (
    <footer className="w-full bg-black border-t border-white/10 py-6 md:py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a 
            href="https://www.jojo.ventures" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="https://ugricruidisirwkjayzw.supabase.co/storage/v1/object/sign/JoJo%20Ventures%20-%20Website/jojo_J_logo%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKb0pvIFZlbnR1cmVzIC0gV2Vic2l0ZS9qb2pvX0pfbG9nbyAoMSkucG5nIiwiaWF0IjoxNzQxODQ1OTQ3LCJleHAiOjE3NzMzODE5NDd9.rhn70OAFg3SxLB-zBKH8lQp7Jy8v3dlp0kgp8I91Uok"
              alt="JoJo Ventures Logo"
              className="h-8 w-auto"
            />
          </a>
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} JoJo Ventures. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-white/70 hover:text-white transition-colors duration-300 transform hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <link.icon size={24} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;