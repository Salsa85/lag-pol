'use client';

import { useState } from 'react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export default function SignupModal({ isOpen, onClose, preselectedCourse = '' }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    province: '',
    course: preselectedCourse,
    costCenter: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          message: ''
        });
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Aanmelden voor training</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Interesse in een van onze trainingen? Vul het formulier in en we nemen zo snel mogelijk contact met je op.
          </p>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-black shadow-lg rounded-lg">
              <p className="text-green-800 font-black text-lg">🎉 BEDANKT VOOR UW AANMELDING! WE NEMEN ZO SNEL MOGELIJK CONTACT MET U OP.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-black shadow-lg rounded-lg">
              <p className="text-red-800 font-black text-lg">❌ ER IS EEN FOUT OPGETREDEN. PROBEER HET OPNIEUW OF NEEM CONTACT OP VIA 088-5326720.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-3">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all rounded-lg"
                  placeholder="Uw volledige naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-3">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all rounded-lg"
                  placeholder="uw.email@politie.nl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="province" className="block text-lg font-semibold text-gray-800 mb-3">
                  Provincie
                </label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all rounded-lg"
                >
                  <option value="">Kies een optie</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="course" className="block text-lg font-semibold text-gray-800 mb-3">
                  Training
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all rounded-lg"
                >
                  <option value="">Kies een optie</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="costCenter" className="block text-lg font-semibold text-gray-800 mb-3">
                Kostenplaats
              </label>
              <input
                type="text"
                id="costCenter"
                name="costCenter"
                value={formData.costCenter}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all rounded-lg"
                placeholder="Kostenplaats nummer"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-3">
                Bericht (optioneel)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all rounded-lg"
                placeholder="Heeft u specifieke vragen of opmerkingen?"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 px-8 font-semibold text-lg transition-all duration-200 rounded-lg"
              >
                Annuleren
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white py-4 px-8 font-black text-xl focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg border-2 border-black rounded-lg"
              >
                {isSubmitting ? 'Bezig met verzenden...' : '🚀 AANMELDEN VOOR TRAINING'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
