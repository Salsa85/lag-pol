import Link from 'next/link';

interface FooterProps {
  showTrainingLinks?: boolean;
}

export default function Footer({ showTrainingLinks = true }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Lean Agile Groep</h3>
            <p className="text-gray-100 mb-4">Praktijkgerichte Agile trainingen voor de politie.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-100 mb-2">📞 088-5326720</p>
            <p className="text-gray-100">info@leanagilegroep.nl</p>
          </div>
          {showTrainingLinks && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Trainingen</h3>
              <ul className="text-gray-100 space-y-2">
                <li><Link href="/scrum-master" className="hover:text-white">Scrum Master Basis</Link></li>
                <li><Link href="/scrum-master-vervolg" className="hover:text-white">Scrum Master Vervolg</Link></li>
                <li><Link href="/product-owner" className="hover:text-white">Product Owner</Link></li>
                <li><Link href="/agile-coach" className="hover:text-white">Agile Coach</Link></li>
                <li><Link href="/obeya" className="hover:text-white">Obeya</Link></li>
              </ul>
            </div>
          )}
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-200">
            Lean Agile Groep is onderdeel van Lean Six Sigma Groep ©2025
          </p>
        </div>
      </div>
    </footer>
  );
}
