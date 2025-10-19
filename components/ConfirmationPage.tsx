import React from 'react';
import { ShareButton } from './ShareButton';

// Fix: Add explicit types for props to resolve type inference issues, which also fixes issues in other components using CheckboxCard.
// Fix: Made children optional to resolve "Property 'children' is missing" error.
// Fix: Refactored to use a props interface and React.FC to correctly handle React's special props like 'key', resolving a TypeScript error in consuming components.
interface CheckboxCardProps {
    id: string;
    name: string;
    value: string;
    children?: React.ReactNode;
    description: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxCard: React.FC<CheckboxCardProps> = ({ id, name, value, children, description, checked, onChange }) => {
    return (
        <label htmlFor={id} className="relative h-full cursor-pointer">
            <input 
                type="checkbox" 
                id={id} 
                name={name} 
                value={value}
                checked={checked}
                onChange={onChange}
                className="sr-only" // Visually hidden but accessible
            />
            <div 
                className={`flex flex-col justify-between p-4 w-full h-full text-gray-600 bg-white border-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${checked ? 'border-[#464845] text-[#464845] ring-2 ring-[#c1c1c1]' : 'border-gray-200'}`}
            >                        
                 <div className="flex items-start justify-between w-full">
                    <div className="text-sm font-medium pr-2">{children}</div>
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 shrink-0 ${checked ? 'border-[#464845] bg-[#edefea]' : 'border-gray-300'}`}>
                        {checked && (
                            <svg className="h-5 w-5 text-[#464845]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                </div>
                {description && <p className="text-xs text-gray-500 mt-2 text-left w-full font-normal">{description}</p>}
            </div>
        </label>
    );
};

// Fix: Add explicit types for props to resolve type inference issues.
// Fix: Made children optional to resolve "Property 'children' is missing" error.
const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children?: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#edefea] text-[#464845] mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

export const Features: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Why Choose MyEvent?</h2>
                <p className="mt-4 text-lg text-gray-600">Everything you need to create a memorable event page.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard title="Custom Designs" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>}>
                    Your event is unique. Your webpage should be too. Get a bespoke design that perfectly matches your vibe.
                </FeatureCard>
                <FeatureCard title="Interactive Elements" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                    Engage your guests with countdowns, photo galleries, guest shoutouts, interactive RSVPs, and more.
                </FeatureCard>
                <FeatureCard title="Fast & Simple" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}>
                    Just fill out our creative brief, and we'll handle the rest. Your stunning event page will be live in no time.
                </FeatureCard>
            </div>
        </div>
    </section>
);

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; avatar: string; }> = ({ quote, author, role, avatar }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <p className="text-gray-700 italic">"{quote}"</p>
        <div className="flex items-center mt-6">
            <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt={author} />
            <div>
                <p className="font-bold text-gray-900">{author}</p>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </div>
);

export const Testimonials: React.FC = () => (
    <section className="py-20 bg-[#edefea]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Loved by Event Planners & Hosts</h2>
                <p className="mt-4 text-lg text-gray-600">See what our clients are saying about their custom event pages.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard 
                    quote="The team at MyEvent captured the essence of our wedding perfectly. The website was magical and so easy for our guests to use."
                    author="Kemi Adetiba"
                    role="Bride"
                    avatar="https://randomuser.me/api/portraits/women/44.jpg"
                />
                <TestimonialCard 
                    quote="A fantastic service! The interactive RSVP feature was a huge hit for our corporate retreat. Super professional and delivered on time."
                    author="John Obi"
                    role="Event Coordinator"
                    avatar="https://randomuser.me/api/portraits/men/32.jpg"
                />
                <TestimonialCard 
                    quote="I wanted something different for my 30th birthday, and they delivered! The neon Gen-Z theme was exactly what I envisioned."
                    author="Aisha Bello"
                    role="Birthday Host"
                    avatar="https://randomuser.me/api/portraits/women/33.jpg"
                />
            </div>
        </div>
    </section>
);

export const ConfirmationPage: React.FC = () => {
    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl text-center p-8 sm:p-12">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                        <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Request Sent Successfully!</h2>
                    <p className="mt-4 text-gray-600">
                        Thank you for sharing your vision with us. We've received your creative brief and our team will get back to you with the next steps within 24 hours.
                    </p>
                    <div className="mt-8 border-t pt-8">
                        <h3 className="text-lg font-semibold text-gray-800">Share the Excitement!</h3>
                        <p className="mt-2 text-sm text-gray-500">Know someone else planning an event? Let them know about MyEvent.i.ng!</p>
                        <div className="mt-6">
                            <ShareButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};