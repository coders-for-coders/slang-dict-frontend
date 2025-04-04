
import React from 'react';
import GaaliCard from '@/components/main/gaaliCard';

const gaaliData = [
  {
    id: 1,
    word: "bakchod",
    meaning: "A term used to describe someone who is annoying or irritating.",
    example: "Stop being such a bakchod!",
    category: "Casual",
    rating: "4.5",
    author: "Anonymous"
  },
  {
    id: 2,
    word: "chutiya",
    meaning: "A derogatory term often used to call someone foolish or stupid.",
    example: "Don't act like a chutiya, think before you speak.",
    category: "Offensive",
    rating: "3.8",
    author: "User123"
  },
  {
    id: 3,
    word: "bewakoof",
    meaning: "A word used to describe someone who is foolish or acting stupidly.",
    example: "Why are you being such a bewakoof today?",
    category: "Mild",
    rating: "3.2",
    author: "Hindi101"
  },
  {
    id: 4,
    word: "test",
    meaning: "This is a test entry to demonstrate the query parameter functionality.",
    example: "This is just a test example for demonstration.",
    category: "Test",
    rating: "5.0",
    author: "System"
  }
];

export async function generateMetadata({ searchParams: params }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await params
  const query = typeof searchParams.query === 'string' ? searchParams.query : undefined;

  const gaali = query
    ? gaaliData.find(g => g.word.toLowerCase() === query.toLowerCase())
    : null;

  return {
    title: gaali ? `${gaali.word} - Slang Dictionary` : 'Slang Dictionary',
    description: gaali ? gaali.meaning : 'Explore Hindi slang words and their meanings',
  }
}

export default async function Home({ searchParams: params }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await params
  const query = typeof searchParams.query === 'string' ? searchParams.query : undefined;

  const gaali = query
    ? gaaliData.find(g => g.word.toLowerCase() === query.toLowerCase())
    : null;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {query && !gaali && (
          <div className="text-center text-2xl text-gray-400 mt-10 p-6 border border-red-500/20 rounded-xl backdrop-blur-sm">
            No results found for "{query}"
          </div>
        )}

        {gaali && (
          <GaaliCard
            word={gaali.word}
            meaning={gaali.meaning}
            example={gaali.example}
            category={gaali.category}
            rating={gaali.rating}
            author={gaali.author}
          />
        )}

        {!query && (
          <div className="space-y-8">

            <div className="grid grid-cols-3 gap-2">
              {gaaliData.map(gaali => (
                <GaaliCard
                  key={gaali.id}
                  word={gaali.word}
                  meaning={gaali.meaning}
                  example={gaali.example}
                  category={gaali.category}
                  rating={gaali.rating}
                  author={gaali.author}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}