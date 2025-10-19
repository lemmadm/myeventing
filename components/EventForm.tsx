import React, { useState, useEffect } from 'react';
import { CheckboxCard } from './ConfirmationPage';

interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
}
const FormInput: React.FC<FormInputProps> = ({ label, name, type = 'text', required = false, placeholder = '', value, onChange, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#c1c1c1] focus:border-[#464845]'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

interface FormTextareaProps {
    label: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    rows?: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string | null;
}
const FormTextarea: React.FC<FormTextareaProps> = ({ label, name, required = false, placeholder, rows = 3, value, onChange, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      id={name}
      rows={rows}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#c1c1c1] focus:border-[#464845]'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    ></textarea>
    {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

interface FormFileInputProps {
    label: string;
    name:string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
    accept: string;
    fileName: string;
}
const FormFileInput: React.FC<FormFileInputProps> = ({ label, name, required = false, onChange, error, accept, fileName }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
       <p className="text-xs text-gray-500 mb-2">Upload a mood board, logo, or color palette (JPG, PNG).</p>
      <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${error ? 'border-red-400' : 'border-gray-300'} border-dashed rounded-md`}>
        <div className="space-y-1 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label htmlFor={name} className="relative cursor-pointer bg-white rounded-md font-medium text-[#464845] hover:text-[#3a3c39] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#c1c1c1]">
              <span>Upload a file</span>
              <input id={name} name={name} type="file" className="sr-only" onChange={onChange} accept={accept} required={required} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          {fileName ? (
             <p className="text-xs text-green-600 font-semibold">{fileName}</p>
          ) : (
             <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          )}
        </div>
      </div>
      {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
);

interface BannerImageUploadProps {
    label: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
    previewSrc: string | null;
}
const BannerImageUpload: React.FC<BannerImageUploadProps> = ({ label, name, onChange, error, previewSrc }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className={`mt-1 w-full h-48 rounded-md flex items-center justify-center text-center border-2 ${error ? 'border-red-400' : 'border-gray-300'} border-dashed relative overflow-hidden`}>
            {previewSrc ? (
                <img src={previewSrc} alt="Banner preview" className="w-full h-full object-cover" />
            ) : (
                <div className="space-y-1">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <p className="text-xs text-gray-500">PNG or JPG, up to 5MB</p>
                </div>
            )}
            <label htmlFor={name} className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-25 transition-colors flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold opacity-0 hover:opacity-100 transition-opacity">
                    {previewSrc ? 'Change Banner' : 'Upload Banner'}
                </span>
                <input id={name} name={name} type="file" className="sr-only" onChange={onChange} accept="image/png, image/jpeg" />
            </label>
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
);

// Fix: Define interfaces for form data and errors to provide strong types for state hooks.
interface FormDataState {
    'event-name-vibe': string;
    'event-date': string;
    'event-time': string;
    'venue-info': string;
    'event-banner': File | null;
    'brand-guide': File | null;
    'custom-link': string;
    'story-concept': string;
    'features': string[];
}

interface FormErrors {
    [key: string]: string | null | undefined;
}

export const RequestForm: React.FC<{ onFormSubmit: () => void }> = ({ onFormSubmit }) => {
    const creativeFeatures = [
        { id: 'feature-video', label: 'Embed Video/Music', description: 'Integrate a YouTube/Vimeo video or a Spotify/Apple Music playlist.' },
        { id: 'feature-shoutout', label: 'Guest Shoutout Section', description: 'A dedicated space for guests to leave messages or video tributes.' },
        { id: 'feature-countdown', label: 'Live Countdown', description: 'Build anticipation with a dynamic timer counting down to your event.' },
        { id: 'feature-rsvp', label: 'Interactive RSVP/Quiz', description: 'Engage guests with custom questions, meal choices, or a fun quiz.' },
        { id: 'feature-photos', label: 'Memory Lane Photo Slide', description: 'A beautiful, animated slideshow of your favorite photos.' },
        { id: 'feature-guestbook', label: 'Digital Guestbook & Wishes', description: 'Allow guests to leave heartfelt messages and well wishes directly on the page.' },
        { id: 'feature-asoebi', label: 'Aso-Ebi & Dress Code Gallery', description: "Showcase your event's official fabrics and dress code with a beautiful gallery." },
        { id: 'feature-registry', label: 'Gift Registry / Gifting Info', description: 'Seamlessly integrate your gift registry or share cash gift information in style.' },
        { id: 'feature-livestream', label: 'Live Stream Integration', description: 'Embed a live video stream, allowing guests to join your celebration virtually.' },
        { id: 'feature-vendors', label: 'Vendor Credits & Shoutouts', description: 'A dedicated section to acknowledge the amazing vendors behind your event.' },
        { id: 'feature-photobooth', label: 'Virtual Photo Booth', description: 'Guests can take and upload photos with custom event-themed frames and stickers.' },
        { id: 'feature-map', label: 'Customizable Event Map', description: 'An interactive map of your venue, highlighting key areas like parking, restrooms, and activity zones.' },
        { id: 'feature-polls', label: 'Live Polls & Q&A', description: 'Engage your audience during the event with real-time polls, surveys, and Q&A sessions.' },
    ];
    
    const COST_PER_FEATURE = 2500;

    // Fix: Use the FormDataState interface to type the formData state.
    const [formData, setFormData] = useState<FormDataState>({
        'event-name-vibe': '',
        'event-date': '',
        'event-time': '',
        'venue-info': '',
        'event-banner': null,
        'brand-guide': null,
        'custom-link': '',
        'story-concept': '',
        'features': [],
    });
    // Fix: Use the FormErrors interface to type the errors state.
    const [errors, setErrors] = useState<FormErrors>({});
    const [totalCost, setTotalCost] = useState(0);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [draftExists, setDraftExists] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('eventFormDraft')) {
            setDraftExists(true);
        }
    }, []);

    useEffect(() => {
        setTotalCost(formData.features.length * COST_PER_FEATURE);
    }, [formData.features]);

    const validate = () => {
        const newErrors: FormErrors = {};
        if (!formData['event-name-vibe']) newErrors['event-name-vibe'] = 'Event Name & Vibe is required.';
        if (!formData['event-date']) newErrors['event-date'] = 'Event Date is required.';
        if (!formData['event-time']) newErrors['event-time'] = 'Event Time is required.';
        if (!formData['venue-info']) newErrors['venue-info'] = 'Venue Info is required.';
        if (!formData['brand-guide']) newErrors['brand-guide'] = 'A Brand Guide file is required.';
        if (!formData['story-concept']) newErrors['story-concept'] = 'The story/concept is required.';
        if (formData.features.length === 0) newErrors['features'] = 'Please select at least one creative feature.';


        if (formData['event-date']) {
            const today = new Date();
            const eventDate = new Date(formData['event-date']);
            today.setHours(0, 0, 0, 0);
            if (eventDate < today) {
                newErrors['event-date'] = 'Event date cannot be in the past.';
            }
        }

        if (formData['custom-link']) {
            const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
            if (!urlRegex.test(formData['custom-link'])) {
                newErrors['custom-link'] = 'Please enter a valid URL.';
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'file') {
            const files = (e.target as HTMLInputElement).files;
            setFormData(prev => ({ ...prev, [name]: files && files.length > 0 ? files[0] : null }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        const file = files && files.length > 0 ? files[0] : null;

        setErrors(prev => ({ ...prev, [name]: null }));
        setBannerPreview(null);
        setFormData(prev => ({ ...prev, [name]: null }));

        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.type)) {
            setErrors(prev => ({ ...prev, [name]: 'Invalid file type. Please upload a JPG or PNG.' }));
            return;
        }

        if (file.size > maxSize) {
            setErrors(prev => ({ ...prev, [name]: 'File is too large. Maximum size is 5MB.' }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: file }));

        const reader = new FileReader();
        reader.onloadend = () => {
            setBannerPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };
    
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        const featureId = id;

        setFormData(prev => {
            const currentFeatures = prev.features;
            if (checked) {
                return { ...prev, features: [...currentFeatures, featureId] };
            } else {
                return { ...prev, features: currentFeatures.filter(fid => fid !== featureId) };
            }
        });

        if (errors.features) {
            setErrors(prev => ({ ...prev, features: null }));
        }
    };

    const handleSaveDraft = () => {
        const draftData = {
            ...formData,
            'event-banner': formData['event-banner'] ? { name: formData['event-banner'].name } : null,
            'brand-guide': formData['brand-guide'] ? { name: formData['brand-guide'].name } : null,
            bannerPreview,
        };
        localStorage.setItem('eventFormDraft', JSON.stringify(draftData));
        setDraftExists(true);
        alert('Draft saved! You can close this page and your progress will be here when you return.');
    };

    const handleLoadDraft = () => {
        const draftJSON = localStorage.getItem('eventFormDraft');
        if (draftJSON) {
            const draft = JSON.parse(draftJSON);
            // We can't restore file inputs, so we inform the user.
            const restorableData = {
                ...draft,
                'event-banner': null,
                'brand-guide': null,
            };
            setFormData(restorableData);
            setBannerPreview(draft.bannerPreview || null);
            alert('Draft loaded! Please re-select your banner and brand guide files if you had them.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const form = e.target as HTMLFormElement;
            const formDataToSubmit = new FormData(form);
            
            formData.features.forEach(feature => {
                formDataToSubmit.append('features[]', feature);
            });
            
            if (formData['event-banner']) {
                formDataToSubmit.set('event-banner', formData['event-banner']);
            }
            if (formData['brand-guide']) {
                formDataToSubmit.set('brand-guide', formData['brand-guide']);
            }

            try {
                const response = await fetch('/', {
                    method: 'POST',
                    body: formDataToSubmit,
                });

                if (response.ok) {
                    console.log('Form submitted successfully to Netlify');
                    localStorage.removeItem('eventFormDraft');
                    onFormSubmit();
                } else {
                    console.error('Form submission failed');
                    alert('There was an error submitting your request. Please try again.');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting your request. Please try again.');
            }
        } else {
            console.log('Form has errors.', errors);
        }
    };

    return (
        <section className="py-12 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                    <div className="text-center mb-8">
                        <div className="flex justify-center items-center space-x-3 mb-4">
                            <img src="/images/fav.png" alt="MyEvent Logo" className="w-8 h-8" />
                            <h1 className="text-2xl font-bold text-gray-900">
                                MyEvent<span className="text-[#464845]">.i.ng</span>
                            </h1>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Create Your Event Page</h2>
                        <p className="mt-2 text-gray-500">Tell us your vision. We'll handle the magic.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate name="event-request" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" encType="multipart/form-data">
                        <input type="hidden" name="form-name" value="event-request" />
                        <p style={{ display: 'none' }}>
                            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <div className="space-y-8">
                            {/* Section 1: Event Details */}
                            <div className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Event Details</h3>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <FormInput label="Event Name & Vibe" name="event-name-vibe" value={formData['event-name-vibe']} onChange={handleChange} error={errors['event-name-vibe']} required placeholder="e.g., Kemi & Tunde's Vintage Wedding" />
                                    <div/>
                                    <FormInput label="Event Date" name="event-date" type="date" value={formData['event-date']} onChange={handleChange} error={errors['event-date']} required />
                                    <FormInput label="Event Time" name="event-time" type="time" value={formData['event-time']} onChange={handleChange} error={errors['event-time']} required />
                                    <div className="sm:col-span-2">
                                        <FormTextarea label="Venue & Address" name="venue-info" value={formData['venue-info']} onChange={handleChange} error={errors['venue-info']} required placeholder="Include full address, landmarks, and any special instructions." />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Section 2: Creative Vision */}
                            <div className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Creative Vision</h3>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <BannerImageUpload label="Event Banner" name="event-banner" onChange={handleBannerChange} error={errors['event-banner']} previewSrc={bannerPreview} />
                                    <FormFileInput label="Brand Guide / Inspiration" name="brand-guide" required onChange={handleChange} error={errors['brand-guide']} accept=".pdf,.jpg,.jpeg,.png" fileName={formData['brand-guide']?.name || ''} />
                                    <div className="sm:col-span-2">
                                        <FormInput label="Preferred Custom Link (Optional)" name="custom-link" value={formData['custom-link']} onChange={handleChange} error={errors['custom-link']} placeholder="e.g., MyEvent.i.ng/KemiAndTunde2024" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <FormTextarea label="Your Story / Event Concept" name="story-concept" value={formData['story-concept']} onChange={handleChange} error={errors['story-concept']} required placeholder="Tell us about the couple, the celebrant, or the event's theme. What's the story you want to tell?" rows={5}/>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Creative Features */}
                            <div className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Creative Features</h3>
                                 <p className="text-sm text-gray-600 mb-4">Select the features you'd like to add. Each feature costs an additional ₦{COST_PER_FEATURE.toLocaleString()}.</p>
                                {errors.features && <p className="mb-4 text-sm text-red-500">{errors.features}</p>}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {creativeFeatures.map(feature => (
                                        <CheckboxCard
                                            key={feature.id}
                                            id={feature.id}
                                            name="features"
                                            value={feature.id}
                                            description={feature.description}
                                            checked={formData.features.includes(feature.id)}
                                            onChange={handleCheckboxChange}
                                        >
                                            {feature.label}
                                        </CheckboxCard>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Total Cost & Submission */}
                        <div className="mt-10 pt-6 border-t border-gray-200">
                             <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="text-center sm:text-left">
                                     <h4 className="text-xl font-bold text-gray-800">
                                         Estimated Cost: <span className="text-[#464845]">₦{totalCost.toLocaleString()}</span>
                                     </h4>
                                     <p className="text-sm text-gray-500">Base fee + selected features. Final quote upon review.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {draftExists && <button type="button" onClick={handleLoadDraft} className="text-sm font-medium text-[#464845] hover:underline">Load Draft</button>}
                                    <button type="button" onClick={handleSaveDraft} className="bg-gray-100 text-[#464845] font-bold text-md px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">Save Draft</button>
                                    <button type="submit" className="bg-[#464845] text-white font-bold text-md px-6 py-3 rounded-full hover:bg-[#3a3c39] transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#c1c1c1]/50">
                                        Submit Request
                                    </button>
                                </div>
                             </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};