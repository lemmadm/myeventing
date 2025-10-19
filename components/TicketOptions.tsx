import React, { useState } from 'react';

export const HowItWorks: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Get Your Custom Page in 3 Easy Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                 {/* Dashed line connector for larger screens */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5" style={{transform: 'translateY(-50%)'}}>
                    <svg width="100%" height="2"><line x1="0" y1="1" x2="100%" y2="1" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="8 8"/></svg>
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-full bg-[#c1c1c1] text-[#464845] text-2xl font-bold mb-4 border-4 border-white">1</div>
                    <h3 className="text-lg font-bold mb-2">Submit Your Vision</h3>
                    <p className="text-gray-600">Fill out our creative form with all your event details, vibes, and inspiration.</p>
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-full bg-[#c1c1c1] text-[#464845] text-2xl font-bold mb-4 border-4 border-white">2</div>
                    <h3 className="text-lg font-bold mb-2">We Weave Our Magic</h3>
                    <p className="text-gray-600">Our designers get to work, crafting a unique page based on your request.</p>
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-full bg-[#c1c1c1] text-[#464845] text-2xl font-bold mb-4 border-4 border-white">3</div>
                    <h3 className="text-lg font-bold mb-2">Launch & Share</h3>
                    <p className="text-gray-600">We deliver your page, ready to be shared with the world and wow your guests.</p>
                </div>
            </div>
        </div>
    </section>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-gray-800">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="p-4 text-gray-600 bg-gray-50">{answer}</p>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const faqData = [
        {
            question: "What exactly is MyEvent.i.ng?",
            answer: "We are a creative service that designs and builds stunning, custom, single-page websites for your events. Instead of using generic templates, you tell us your vision, and we craft a unique online experience for you and your guests. It's fast, personal, and affordable."
        },
        {
            question: "How does the pricing work?",
            answer: "We have a base price for the core event page setup. Additional interactive features like a photo gallery, custom RSVP form, or gift registry integration are available as add-ons. You can see the estimated cost for these features in the request form. The final quote is provided after we review your creative brief."
        },
        {
            question: "How long does it take to get my event page?",
            answer: "Our standard turnaround time is 3-5 business days after you submit your request and all necessary content (like photos and event details). We also offer an expedited service if you need your page sooner. Just let us know in the form!"
        },
        {
            question: "Can I request changes after my page is delivered?",
            answer: "Absolutely! We include one round of minor revisions in our service to ensure you're completely happy with the final result. This includes things like text changes, color tweaks, or swapping a photo. Major structural changes might incur an additional fee."
        },
        {
            question: "What kind of events do you create pages for?",
            answer: "We cater to all kinds of special occasions! Weddings are our most popular request, but we also create pages for birthdays (like the big 3-0 or 5-0), owambe parties, corporate events, anniversaries, baby showers, and more. If you can celebrate it, we can create a page for it!"
        }
    ];

    return (
        <section className="py-20 bg-[#edefea]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export const CTA: React.FC<{ onShowForm: () => void }> = ({ onShowForm }) => (
    <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Ready to Create Your Perfect Event Page?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Let's bring your vision to life. It’s fast, simple, and stunningly personal.
            </p>
            <div className="mt-8">
                <button
                    onClick={onShowForm}
                    className="bg-[#464845] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#3a3c39] transition-all duration-300 transform hover:scale-110 shadow-xl focus:outline-none focus:ring-4 focus:ring-[#c1c1c1]/50"
                >
                    Get Started Now
                </button>
            </div>
        </div>
    </section>
);

export const Footer: React.FC<{ onShowTerms: () => void }> = ({ onShowTerms }) => (
    <footer className="bg-[#464845] text-white">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center space-x-4">
                <p>&copy; {new Date().getFullYear()} MyEvent.i.ng. All rights reserved.</p>
                <span className="text-gray-500">|</span>
                <button onClick={onShowTerms} className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none">
                    Terms & Conditions
                </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">A Bespoke Event Page Experience</p>
        </div>
    </footer>
);