'use client';

import { useState } from 'react';

interface SignupSectionProps {
  preselectedCourse?: string;
}

const courses = [
  'Scrum Master Basis / Beginner',
  'Scrum Master Vervolg / Gevorderd',
  'Product Owner Basis / Beginner',
  'Product Owner Basis / Gevorderd',
  'Agile Coach',
  'Agile Leiderschap Opleiding',
  'Leading with Obeya',
  'Facilitator in Obeya'
];

const provinces = [
  'Drenthe',
  'Flevoland',
  'Friesland',
  'Gelderland',
  'Groningen',
  'Limburg',
  'Noord-Brabant',
  'Noord-Holland',
  'Overijssel',
  'Utrecht',
  'Zeeland',
  'Zuid-Holland'
];

export default function SignupSection({ preselectedCourse = '' }: SignupSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    province: '',
    course: preselectedCourse,
    costCenter: '',
    message: '',
    termsAccepted: false,
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    const newValue = target.type === 'checkbox' ? target.checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      alert('U moet akkoord gaan met de algemene voorwaarden en privacyverklaring om door te gaan.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          province: '',
          course: preselectedCourse,
          costCenter: '',
          message: '',
          termsAccepted: false,
          privacyAccepted: false
        });
      } else {
        setSubmitStatus('error');
        console.error('Submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-section" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-500 relative overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-scrum-500/10 via-transparent to-primary-500/10 blur-3xl"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-primary-100 rounded-lg mr-4 flex items-center justify-center">
            <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
          </div>
          <h2 className="text-4xl font-bold text-white">Aanmelden voor training</h2>
          <div className="w-12 h-1 bg-primary-500 rounded-full ml-4"></div>
        </div>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Interesse in deze training? Vul het formulier in en we nemen zo snel mogelijk contact met je op.
        </p>
        
        <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 max-w-2xl mx-auto">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-sm">
              <p className="text-scrum-800 font-semibold text-lg">🎉 BEDANKT VOOR UW AANMELDING! WE NEMEN ZO SNEL MOGELIJK CONTACT MET U OP.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl shadow-sm">
              <p className="text-red-800 font-semibold text-lg">❌ ER IS EEN FOUT OPGETREDEN. PROBEER HET OPNIEUW OF NEEM CONTACT OP VIA 088-5326720.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all"
                  placeholder="Uw volledige naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all"
                  placeholder="np12345@politie.nl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="province" className="block text-sm text-left font-semibold text-gray-700 mb-2">
                In welke provincie(s) zou je de training kunnen volgen
                <span className="ml-2 relative group">
                  <svg className="w-4 h-4 inline text-gray-400 hover:text-gray-600 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    (voorkeur - het is niet gegarandeerd dat het gaat lukken in de geselecteerde provincie)
                  </div>
                </span>
                </label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all"
                >
                  <option value="">Kies een optie</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                  Training
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all"
                >
                  <option value="">Kies een optie</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="costCenter" className="block text-sm font-semibold text-gray-700 mb-2">
                Besluitnummer studiefaciliteiten
              </label>
              <input
                type="text"
                id="costCenter"
                name="costCenter"
                value={formData.costCenter}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all"
                placeholder="Besluitnummer studiefaciliteiten"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Bericht (optioneel)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all resize-none"
                placeholder="Heeft u specifieke vragen of opmerkingen?"
              />
            </div>

            <div className="space-y-4 text-left">
              <label htmlFor="termsAccepted" className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="mt-1 h-5 w-5 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                />
                <span>
                  Ik ga akkoord met de <a href="/algemene-voorwaarden" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">algemene voorwaarden</a> *
                </span>
              </label>

              <label htmlFor="privacyAccepted" className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleInputChange}
                  className="mt-1 h-5 w-5 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                />
                <span>
                  Ik ga akkoord met de <a href="/privacyverklaring" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">privacyverklaring</a> *
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg"
            >
              {isSubmitting ? 'Bezig met verzenden...' : 'AANMELDEN VOOR DEZE TRAINING'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
