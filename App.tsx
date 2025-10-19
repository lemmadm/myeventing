import React, { useState, useEffect, useRef } from 'react';
import { Header, Hero } from './components/Header';
import { RequestForm } from './components/EventForm';
import { HowItWorks, CTA, Footer, FAQ } from './components/TicketOptions';
import { Features, Testimonials, ConfirmationPage } from './components/ConfirmationPage';
import { TermsPage } from './components/TermsPage';

// Fix: Add explicit types for props to resolve type inference issues.
// Fix: Made children optional to resolve "Property 'children' is missing" error.
const AnimatedSection = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
};


const App: React.FC = () => {
  const [view, setView] = useState('home');

  const handleShowForm = () => {
    setView('form');
    window.scrollTo(0, 0); // Scroll to top when form appears
  };

  const handleFormSubmit = () => {
    setView('confirmation');
    window.scrollTo(0, 0);
  };
  
  const handleShowTerms = () => {
    setView('terms');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch(view) {
      case 'form':
        return (
          <AnimatedSection>
            <RequestForm onFormSubmit={handleFormSubmit} />
          </AnimatedSection>
        );
      case 'confirmation':
        return (
          <AnimatedSection>
             <ConfirmationPage />
           </AnimatedSection>
        );
      case 'terms':
        return (
          <AnimatedSection>
            <TermsPage onGoBack={handleGoHome} />
          </AnimatedSection>
        )
      case 'home':
      default:
        return (
          <>
            <Hero onShowForm={handleShowForm} />
            <AnimatedSection><Features /></AnimatedSection>
            <AnimatedSection><HowItWorks /></AnimatedSection>
            {/* <AnimatedSection><Testimonials /></AnimatedSection> */}
            <AnimatedSection><FAQ /></AnimatedSection>
            <AnimatedSection><CTA onShowForm={handleShowForm} /></AnimatedSection>
          </>
        );
    }
  }
  
  return (
    <div className="bg-[#edefea] font-sans text-[#464845]">
      <Header />
      <main>
        {renderContent()}
      </main>
      <AnimatedSection><Footer onShowTerms={handleShowTerms} /></AnimatedSection>
    </div>
  );
};

export default App;