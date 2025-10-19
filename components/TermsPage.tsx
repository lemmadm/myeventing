import React from 'react';

export const TermsPage: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
    const terms = [
        { title: "Service Overview", content: "MyEvent.i.ng provides custom-designed event pages built by professionals and hosted on a subdomain of our platform. Pages are crafted based on details provided by the user and delivered within the agreed timeframe." },
        { title: "Project Commencement", content: "Work on your event page will not commence until a complete request form has been submitted and full payment (or agreed commitment fee) is received. No design or preview work will be initiated without a confirmed payment." },
        { title: "Hosting Duration & Link Expiry", content: "By default, your custom event page and subdomain link will be active for three (3) months from the date of publication. If you wish to extend the availability of your page beyond 3 months, you must request an extension in advance. Extension requests may attract additional fees, determined based on the complexity and hosting needs." },
        { title: "Post-Publication Edits", content: "After your event page is published, you are entitled to free edits or updates within 24 hours of the publishing time. After the 24-hour window, any correction or update will attract a ₦1,000 service fee per change. Any new feature additions (e.g., RSVP forms, countdowns, embedded videos) requested after publication will attract a ₦2,500 fee per feature." },
        { title: "Refund Policy", content: "Due to the nature of our service (custom digital design), payments are non-refundable once the project has commenced. If a request is cancelled before design work begins, a partial refund may be issued, minus processing fees." },
        { title: "Client Responsibility", content: "Clients are responsible for providing accurate and complete information regarding their event, ensuring content (text, images, links) provided do not violate any third-party rights or copyright laws, and reviewing the final page within the 24-hour window for necessary adjustments." },
        { title: "Intellectual Property", content: "All designs and event pages created by MyEvent.i.ng are the property of LemmaIoT Cloud Solution until full payment is received. After publication, the client has rights to use, share, and distribute their page link as intended." },
        { title: "Limitation of Liability", content: "LemmaIoT Cloud Solution is not liable for loss of event data or links due to client-side errors or misuse, any event miscommunication resulting from incorrect info submitted by the client, or temporary outages or hosting interruptions outside of our control." },
        { title: "Changes to Terms", content: "We reserve the right to update or modify these terms at any time. Continued use of the service after changes implies agreement to the revised terms." },
        { title: "Contact", content: "For questions, support, or billing issues, please contact: 📧 getmycf@gmail.com or 📞 +234 708 368 2007" }
    ];

    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Terms and Conditions</h2>
                        <p className="mt-2 text-gray-500">Welcome to MyEvent.i.ng, a product by LemmaIoT Cloud Solution.</p>
                        <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    
                    <div className="space-y-6 text-gray-700">
                        {terms.map((term, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-bold text-gray-800">{index + 1}. {term.title}</h3>
                                <p className="mt-1 text-base leading-relaxed">{term.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <button
                            onClick={onGoBack}
                            className="bg-[#464845] text-white font-bold text-md px-6 py-3 rounded-full hover:bg-[#3a3c39] transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#c1c1c1]/50"
                        >
                            &larr; Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
