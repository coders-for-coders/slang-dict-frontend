import React from "react";
import { auth } from "@/auth";
import GaaliCard from "@/components/main/gaaliCard";
import ProfileCard from "@/components/main/profileCard";
import TopContributors from "@/components/main/contributorsCard";
import Pagination from "@/components/main/pagination";

const ITEMS_PER_PAGE = 3;
// Mock data
type Gaali = {
  id: number;
  word: string;
  meaning: string;
  example: string;
  category: string;
  rating: string;
  author: string;
};

const gaaliData: Gaali[] = [
  {
    id: 1,
    word: "bakchod",
    meaning: "A term used to describe someone who is annoying or irritating.",
    example: "Stop being such a bakchod!",
    category: "Casual",
    rating: "4.5",
    author: "Anonymous",
  },
  {
    id: 2,
    word: "chutiya",
    meaning: "A derogatory term often used to call someone foolish or stupid.",
    example: "Don't act like a chutiya, think before you speak.",
    category: "Offensive",
    rating: "3.8",
    author: "User123",
  },
  {
    id: 3,
    word: "bewakoof",
    meaning: "A word used to describe someone who is foolish or acting stupidly.",
    example: "Why are you being such a bewakoof today?",
    category: "Mild",
    rating: "3.2",
    author: "Hindi101",
  },
  {
    id: 4,
    word: "test",
    meaning: "This is a test entry to demonstrate the query parameter functionality.",
    example: "This is just a test example for demonstration.",
    category: "Test",
    rating: "5.0",
    author: "System",
  },
  {
    id: 5,
    word: "test",
    meaning: "This is a test entry to demonstrate the query parameter functionality.",
    example: "This is just a test example for demonstration.",
    category: "Test",
    rating: "5.0",
    author: "System",
  },
  {
    id: 6,
    word: "test",
    meaning: "This is a test entry to demonstrate the query parameter functionality.",
    example: "This is just a test example for demonstration.",
    category: "Test",
    rating: "5.0",
    author: "System",
  },
  {
    id: 7,
    word: "test",
    meaning: "This is a test entry to demonstrate the query parameter functionality.",
    example: "This is just a test example for demonstration.",
    category: "Test",
    rating: "5.0",
    author: "System",
  },
  {
    id: 8,
    word: "test",
    meaning: "This is a test entry to demonstrate the query parameter functionality.",
    example: "This is just a test example for demonstration.",
    category: "Test",
    rating: "5.0",
    author: "System",
  },
];

const topContributors = [
  { id: 1, name: "User123", contributions: 47 },
  { id: 2, name: "SlangMaster", contributions: 36 },
  { id: 3, name: "Hindi101", contributions: 29 },
  { id: 4, name: "WordWizard", contributions: 23 },
  { id: 5, name: "Anonymous", contributions: 18 },
];

export default async function Home({ searchParams }: { searchParams: { query?: string,page?: string } }) {
  const session = await auth(); // Use server-side session
  const params = await searchParams; // Get the search parameters from the URL
  const query = params.query;
  const page = parseInt(searchParams.page || "1", 10);


  const gaali = query
    ? gaaliData.find((g) => g.word.toLowerCase() === query.toLowerCase())
    : null;

  const paginatedData = !query
    ? gaaliData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    : [];

  const totalPages = Math.ceil(gaaliData.length / ITEMS_PER_PAGE);

  const defaultProfileData = {
    name: "Guest",
    username: "Not Signed In",
    bio: "Sign in to contribute and view your profile.",
    contributions: 0,
    joined: "N/A",
    avatar: "/default-avatar.png", 
  };

  // Profile data for authenticated users
  const userProfileData = session
    ? {
        name: session.user?.name || "User",
        username: session.user?.email || "user@example.com",
        bio: "Active contributor to the Slang Dictionary.",
        contributions: 10, 
        joined: "January 2023", 
        avatar: session.user?.image || "/default-avatar.png", 
      }
    : defaultProfileData;

  return (
    <div className="min-h-screen p-4 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column - User Profile */}
          <div className="md:col-span-3">
            {session ? (
              <ProfileCard {...userProfileData} />
            ) : (
              <div className="p-4 rounded-xl shadow-md border border-gray-700/50 backdrop-blur-sm text-center">
                <p className="text-gray-400">Please Log in to contribute slangs.</p>
              </div>
            )}
          </div>

          {/* Middle Column - Slang Cards */}
          <div className="md:col-span-6">
            {query && !gaali && (
              <div className="text-center text-2xl text-gray-400 mt-10 p-6 border border-red-500/20 rounded-xl backdrop-blur-sm bg-gray-800/60">
                No results found for "{query}"
              </div>
            )}

            {gaali && (
              <GaaliCard {...gaali}  />
            )}

            {!query && (
              <>
                <div className="space-y-4">
                  {paginatedData.map((gaali) => (
                    <GaaliCard key={gaali.id} {...gaali}  />
                  ))}
                </div>
                <Pagination currentPage={page} totalPages={totalPages} />
              </>
            )}
          </div>


          {/* Right Column - Top Contributors */}
          <TopContributors contributors={topContributors} />
        </div>
      </div>
    </div>
  );
}