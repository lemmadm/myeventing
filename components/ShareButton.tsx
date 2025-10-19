import React, { useState } from 'react';

const ShareIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path></svg>
);
const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);
const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);
const WhatsAppIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.894-9.896-9.894-5.459 0-9.885 4.437-9.885 9.894 0 2.025.658 3.996 1.919 5.66l-1.21 4.426 4.564-1.189z" /></svg>
);
const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

export const ShareButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pageUrl = encodeURIComponent(window.location.origin);
    const shareText = encodeURIComponent("I just requested a custom event page from MyEvent.i.ng! You should check them out for your next event.");

    const platforms = [
        { name: 'Facebook', icon: <FacebookIcon />, color: '#1877F2', url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}` },
        { name: 'Twitter', icon: <TwitterIcon />, color: '#1DA1F2', url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}` },
        { name: 'WhatsApp', icon: <WhatsAppIcon />, color: '#25D366', url: `https://api.whatsapp.com/send?text=${shareText}%20${pageUrl}` },
        { name: 'LinkedIn', icon: <LinkedInIcon />, color: '#0A66C2', url: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=MyEvent.i.ng&summary=${shareText}` },
    ];

    return (
        <div className="relative w-full h-24 flex items-center justify-center">
            <div id="social-share-options" className="relative w-16 h-16">
                {platforms.map(({ name, icon, color, url }, index) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`share-icon-wrapper platform-${index + 1} ${isOpen ? 'open' : ''}`}
                        aria-label={`Share on ${name}`}
                        style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                    >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110" style={{ backgroundColor: color }}>
                            {icon}
                        </div>
                    </a>
                ))}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#464845] focus:outline-none focus:ring-4 focus:ring-[#c1c1c1] transform transition-transform duration-300 hover:scale-110"
                    aria-expanded={isOpen}
                    aria-controls="social-share-options"
                >
                     <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                         <ShareIcon />
                     </div>
                </button>
            </div>
        </div>
    );
};
