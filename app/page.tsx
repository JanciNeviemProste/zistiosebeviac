import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-2xl w-full text-center fade-in">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Zisti o sebe viac
          </h1>
          <div className="text-6xl mb-6">🤝</div>
          <p className="text-lg text-gray-700 mb-2">
            Objavte, ako najlepšie vyjadrujete, že vám na niekom záleží
          </p>
        </div>

        <div className="bg-accent/30 rounded-lg p-6 mb-8 text-left">
          <h2 className="font-semibold text-xl mb-3 text-primary">
            Ako test funguje?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">📝</span>
              <span>Odpovedáte na 30 otázok</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✨</span>
              <span>V každej otázke si vyberiete jednu z dvoch možností</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎯</span>
              <span>Na konci zistíte váš primárny spôsob vyjadrenia starostlivosti</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-3 text-gray-800">
            5 spôsobov vyjadrovania:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { icon: '💬', name: 'Slová povzbudenia' },
              { icon: '⏰', name: 'Spoločný čas' },
              { icon: '🎁', name: 'Darčeky' },
              { icon: '🤝', name: 'Pomoc' },
              { icon: '🤗', name: 'Fyzický kontakt' }
            ].map((lang, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm"
              >
                <div className="text-2xl mb-1">{lang.icon}</div>
                <div className="text-xs text-gray-600">{lang.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/test" className="block">
            <button className="btn-primary w-full text-lg">
              Začať test
            </button>
          </Link>
          <p className="text-sm text-gray-500">
            Trvanie: cca 5 minút
          </p>
        </div>
      </div>
    </main>
  );
}
