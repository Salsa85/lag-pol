'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ClientSignupSectionProps {
  preselectedCourse?: string;
}

export default function ClientSignupSection({ preselectedCourse = "" }: ClientSignupSectionProps) {
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
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      alert('Je moet akkoord gaan met de algemene voorwaarden en privacyverklaring.');
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
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-section" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-500 relative overflow-hidden">
      {/* DarkVeil background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-scrum-500/20 via-transparent to-primary-500/20 blur-3xl"></div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Aanmelden voor training</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Vul het formulier in en we nemen zo snel mogelijk contact met je op.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl shadow-sm">
              <p className="text-green-800 font-semibold text-center">
                ✅ Aanmelding succesvol verzonden! We nemen zo snel mogelijk contact met je op.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-xl shadow-sm">
              <p className="text-red-800 font-semibold text-center">
                ❌ Er is een fout opgetreden. Probeer het opnieuw of neem direct contact op via 088-5326720.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="province" className="block text-sm font-medium text-white mb-2">
                  Provincie
                </label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                >
                  <option value="">Selecteer provincie</option>
                  <option value="Drenthe">Drenthe</option>
                  <option value="Flevoland">Flevoland</option>
                  <option value="Friesland">Friesland</option>
                  <option value="Gelderland">Gelderland</option>
                  <option value="Groningen">Groningen</option>
                  <option value="Limburg">Limburg</option>
                  <option value="Noord-Brabant">Noord-Brabant</option>
                  <option value="Noord-Holland">Noord-Holland</option>
                  <option value="Overijssel">Overijssel</option>
                  <option value="Utrecht">Utrecht</option>
                  <option value="Zeeland">Zeeland</option>
                  <option value="Zuid-Holland">Zuid-Holland</option>
                </select>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-white mb-2">
                  Training *
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                >
                  <option value="">Selecteer training</option>
                  <option value="Scrum Master Basis / Beginner">Scrum Master Basis</option>
                  <option value="Scrum Master Vervolg / Gevorderd">Scrum Master Vervolg</option>
                  <option value="Product Owner Basis / Beginner">Product Owner Basis</option>
                  <option value="Product Owner Gevorderd">Product Owner Gevorderd</option>
                  <option value="Agile Coach Opleiding">Agile Coach Opleiding</option>
                  <option value="Agile Leiderschap Opleiding">Agile Leiderschap Opleiding</option>
                  <option value="Leading with Obeya">Leading with Obeya</option>
                  <option value="Facilitator in Obeya">Facilitator in Obeya</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="costCenter" className="block text-sm font-medium text-white mb-2">
                Kostenplaats
              </label>
              <input
                type="text"
                id="costCenter"
                name="costCenter"
                value={formData.costCenter}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                placeholder="Vertel ons meer over je wensen of vragen..."
              />
            </div>

            <div className="space-y-2 mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="termsAccepted" className="ml-2 block text-sm text-white">
                  Ik ga akkoord met de <Link href="/algemene-voorwaarden" className="text-primary-300 hover:underline">algemene voorwaarden</Link> *
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleInputChange}
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="privacyAccepted" className="ml-2 block text-sm text-white">
                  Ik ga akkoord met de <Link href="/privacyverklaring" className="text-primary-300 hover:underline">privacyverklaring</Link> *
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Verzenden...' : 'Aanmelden voor training'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
