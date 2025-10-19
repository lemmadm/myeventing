import React from 'react';
import { ShareButton } from './ShareButton';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="/images/Logo - PNG.png" alt="MyEvent Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-gray-900">
              MyEvent<span className="text-[#464845]">.i.ng</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Hero = ({ onShowForm }: { onShowForm: () => void }) => (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: '100vw',
                    height: '56.25vw', // 16:9 aspect ratio
                    minHeight: '100vh',
                    minWidth: '177.77vh', // 16:9 aspect ratio for 100vh height
                    objectFit: 'cover'
                }}
                src="https://www.youtube.com/embed/qVaiKwGvuag?autoplay=1&loop=1&playlist=qVaiKwGvuag&mute=1&controls=0&showinfo=0&autohide=1&modestbranding=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Background Video"
            ></iframe>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
                Let’s Create Your Event Page!
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200 drop-shadow-md whitespace-pre-line">
                {`Why You Should Consider MyEvent.i.ng/yourname.
No messy editors. No templates to wrestle with. Just tell us your event, and we’ll handcraft a stunning page that’s ready to share—fast, custom, and affordable.`}
            </p>
            <div className="mt-10">
                <button
                    onClick={onShowForm}
                    className="bg-white text-[#464845] font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                    Request a Custom Event Page
                </button>
                <div className="mt-8">
                    <p className="text-sm text-gray-300 mb-2 drop-shadow-sm">Love what we do? Share it!</p>
                    <ShareButton />
                </div>
            </div>
        </div>
    </section>
);


export default Header;