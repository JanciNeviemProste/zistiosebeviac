'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TestResults, LoveLanguage } from '@/lib/types';
import { languageDescriptions, getDominantLanguage } from '@/lib/languageDescriptions';

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<TestResults | null>(null);
  const [dominantLanguage, setDominantLanguage] = useState<LoveLanguage | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('loveLanguageResults');
    if (savedResults) {
      const parsedResults: TestResults = JSON.parse(savedResults);
      setResults(parsedResults);
      setDominantLanguage(getDominantLanguage(parsedResults));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!results || !dominantLanguage) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Načítavam výsledky...</p>
        </div>
      </main>
    );
  }

  const dominantInfo = languageDescriptions[dominantLanguage];
  const sortedResults = (Object.entries(results) as [LoveLanguage, number][])
    .sort((a, b) => b[1] - a[1]);

  const maxScore = 30;

  return (
    <main className="min-h-screen flex items-center justify-center p-4 py-12">
      <div className="card max-w-4xl w-full fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Tvoje výsledky
          </h1>
          <p className="text-gray-600">
            Tvoj primárny jazyk lásky je:
          </p>
        </div>

        {/* Dominant Language */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 text-center border-2 border-primary/20">
          <div className="text-7xl mb-4">{dominantInfo.icon}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            {dominantInfo.name}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {dominantInfo.description}
          </p>
          <div className="mt-6">
            <span className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold">
              {results[dominantLanguage]} z {maxScore} bodov
            </span>
          </div>
        </div>

        {/* All Results */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Rozloženie všetkých jazykov lásky
          </h3>
          <div className="space-y-4">
            {sortedResults.map(([language, score]) => {
              const info = languageDescriptions[language];
              const percentage = (score / maxScore) * 100;

              return (
                <div key={language} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{info.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.name}</h4>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-primary">
                      {score}/{maxScore}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-accent/30 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-lg mb-2 text-primary">
            💡 Čo to pre teba znamená?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Tvoj primárny jazyk lásky ukazuje, ako sa cítiš najviac milovaný/á.
            Je však dôležité poznať aj jazyky lásky tvojho partnera/partnerky,
            aby ste sa mohli vzájomne lepšie rozumieť a podporovať. Každý človek
            má svoju vlastnú kombináciu jazykov lásky.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/test">
            <button className="btn-secondary w-full sm:w-auto">
              🔄 Zopakovať test
            </button>
          </Link>
          <Link href="/">
            <button className="btn-primary w-full sm:w-auto">
              🏠 Späť domov
            </button>
          </Link>
        </div>

        {/* Share Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Zdieľaj tento test so svojimi blízkymi a objavte spolu vaše jazyky lásky! 💕
          </p>
        </div>
      </div>
    </main>
  );
}
