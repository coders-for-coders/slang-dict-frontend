import React from 'react';

interface GaaliCardProps {
    word: string;
    meaning: string;
    example: string;
    category?: string;
    rating?: string;
    author: string;
}

const GaaliCard: React.FC<GaaliCardProps> = ({ word, meaning, example, category, rating, author }) => {
    return (
        <div className=" p-6 rounded-xl hover:shadow-lg hover:shadow-emerald-900/10 transition-all border border-amber-50/10 backdrop-blur-sm">
            <h1 className='capitalize border-l-2 w-fit rounded- px-3 py- font-bold mb-6 text-xl text-white/90 shadow-sm'>
                {word}
            </h1>
            <div className="space-y-5">
                <div className="group">
                    <h3 className="text-emerald-400/80 text-xs uppercase tracking-wider mb-2 font-medium">Meaning</h3>
                    <p className="text-gray-200/90 leading-relaxed group-hover:text-white transition-colors">{meaning}</p>
                </div>

                <div className="group">
                    <h3 className="text-emerald-400/80 text-xs uppercase tracking-wider mb-2 font-medium">Example</h3>
                    <p className="text-gray-300/80 italic leading-relaxed group-hover:text-white/90 transition-colors">"{example}"</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-amber-50/5">
                    <div className="flex gap-2">
                        {category && (
                            <span className="text-sm text-emerald-400/90 bg-emerald-900/30 px-1 py-0.5 rounded-full hover:bg-emerald-900/40 transition-colors">
                                {category}
                            </span>
                        )}
                        {rating && (
                            <span className="text-sm text-amber-400/90 bg-amber-900/30 px-2 py-0.5 rounded-full hover:bg-amber-900/40 transition-colors">
                                ★ {rating}/5
                            </span>
                        )}
                    </div>
                    <div className="text-sm text-gray-400/80 hover:text-gray-300 transition-colors flex items-center gap-2">
                        <div className="bg-red-600 ml-2 h-2 w-2 rounded-full"></div>{author}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GaaliCard;
