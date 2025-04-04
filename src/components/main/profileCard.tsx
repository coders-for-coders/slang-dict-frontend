import React from 'react';



interface ProfileData {
    name?: string;
    username?: string;
    bio?: string;
    contributions?: number;
    joined?: string;
    avatar: string;
}

const ProfileCard: React.FC<ProfileData> = ({ name, username, bio, contributions, joined, avatar }) => {
    return (
        <div className="md:col-span-3">
            <div className="p-4 rounded-xl shadow-md border border-gray-700/50 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-700/80 rounded-full mb-4 overflow-hidden border border-emerald-900/30">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-3xl">👽</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white/90">{name}</h2>
                <p className="text-emerald-400/80">{username}</p>
                <div className="w-full border-t border-amber-50/5 mt-4 pt-4">
                  <p className="text-sm text-gray-300/90">{bio}</p>
                </div>
                <div className="w-full border-t border-amber-50/5 mt-4 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400/80">Contributions:</span>
                    <span className="font-medium text-emerald-400/90">{contributions}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-400/80">Joined:</span>
                    <span className="font-medium text-gray-200/90">{joined}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ProfileCard;
