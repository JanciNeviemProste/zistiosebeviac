'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/questions';
import { TestResults, LoveLanguage } from '@/lib/types';
import { Gender, applyGender } from '@/lib/genderUtils';

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<LoveLanguage[]>([]);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [userGender, setUserGender] = useState<Gender | null>(null);

  // Load gender from localStorage
  useEffect(() => {
    const savedGender = localStorage.getItem('userGender') as Gender | null;
    if (!savedGender) {
      router.push('/');
      return;
    }
    setUserGender(savedGender);
  }, [router]);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Apply gender to question texts
  const questionTextA = userGender ? applyGender(question.optionA.text, userGender) : question.optionA.text;
  const questionTextB = userGender ? applyGender(question.optionB.text, userGender) : question.optionB.text;

  useEffect(() => {
    if (selectedOption) {
      const timer = setTimeout(() => {
        handleNext();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedOption]);

  const handleOptionSelect = (option: 'A' | 'B') => {
    setSelectedOption(option);
    const language = option === 'A' ? question.optionA.language : question.optionB.language;
    setAnswers([...answers, language]);
  };

  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Calculate results from all answers (answers already includes the last answer)
      const results: TestResults = {
        A: answers.filter(a => a === 'A').length,
        B: answers.filter(a => a === 'B').length,
        C: answers.filter(a => a === 'C').length,
        D: answers.filter(a => a === 'D').length,
        E: answers.filter(a => a === 'E').length,
      };
      localStorage.setItem('loveLanguageResults', JSON.stringify(results));

      // Send results to email (fire and forget - don't wait for response)
      try {
        fetch('/api/send-results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ results, gender: userGender }),
        }).catch(err => console.error('Failed to send email:', err));
      } catch (error) {
        console.error('Error sending results:', error);
      }

      router.push('/results');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedOption(null);
    }
  };

  // Show loading while gender is being loaded
  if (!userGender) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Načítavam test...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-3xl w-full fade-in">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-semibold text-gray-600">
              Otázka {currentQuestion + 1} z {questions.length}
            </h2>
            <span className="text-sm text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
            Ktorý výrok vás lepšie vystihuje?
          </h1>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionSelect('A')}
              className={`option-card w-full p-6 rounded-xl text-left ${
                selectedOption === 'A' ? 'selected' : ''
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">A</span>
                </div>
                <p className="text-gray-800 flex-1">
                  {questionTextA}
                </p>
              </div>
            </button>

            <button
              onClick={() => handleOptionSelect('B')}
              className={`option-card w-full p-6 rounded-xl text-left ${
                selectedOption === 'B' ? 'selected' : ''
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">B</span>
                </div>
                <p className="text-gray-800 flex-1">
                  {questionTextB}
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="btn-secondary w-full md:w-auto"
          >
            ← Späť
          </button>
        )}
      </div>
    </main>
  );
}
