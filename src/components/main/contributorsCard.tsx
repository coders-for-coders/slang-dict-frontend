import React from 'react';


interface Contributor {
    id: number;
    name: string;
    contributions: number;
}

interface TopContributorsProps {
    contributors: Contributor[];
}

const TopContributors: React.FC<TopContributorsProps> = ({ contributors }) => {
    return (
        <div className="md:col-span-3">
            <div className="p-4 rounded-xl shadow-md border border-gray-700/50 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-4 text-center text-white/90 border-b border-amber-50/5 pb-2">
                    Top Contributors 🏆
                </h3>
                <div className="space-y-3 cursor-pointer">
                    {contributors.map((contributor, index) => (
                        <div
                            key={contributor.id}
                            className="flex items-center p-2 hover:bg-gray-700/30 rounded-lg transition-colors duration-150"
                        >
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-700/50 rounded-full mr-3 flex items-center justify-center text-xs text-emerald-400 border border-emerald-900/30">
                                {index + 1}
                            </div>
                            <div className="flex-grow">
                                <div className="font-medium text-gray-200/90">{contributor.name}</div>
                                <div className="text-xs text-emerald-400/70">
                                    {contributor.contributions} contributions
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopContributors;