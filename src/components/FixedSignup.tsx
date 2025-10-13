'use client';

import { useState } from 'react';

interface FixedSignupProps {
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

export default function FixedSignup({ preselectedCourse = '' }: FixedSignupProps) {
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
    <section className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black shadow-2xl z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Aanmelden voor training</h2>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Contact:</span> 
            <span className="text-primary-600 font-semibold ml-1">088-5326720</span>
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-black shadow-lg rounded-lg">
            <p className="text-green-800 font-black text-lg">🎉 BEDANKT VOOR UW AANMELDING! WE NEMEN ZO SNEL MOGELIJK CONTACT MET U OP.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-black shadow-lg rounded-lg">
            <p className="text-red-800 font-black text-lg">❌ ER IS EEN FOUT OPGETREDEN. PROBEER HET OPNIEUW OF NEEM CONTACT OP VIA 088-5326720.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
              Naam *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all rounded-lg"
              placeholder="Uw volledige naam"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
              E-mailadres *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all rounded-lg"
              placeholder="uw.email@politie.nl"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-semibold text-gray-800 mb-2">
              Training
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all rounded-lg"
            >
              <option value="">Kies een optie</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white py-3 px-6 font-black text-lg focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg border-2 border-black rounded-lg"
            >
              {isSubmitting ? 'Bezig...' : '🚀 AANMELDEN'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
