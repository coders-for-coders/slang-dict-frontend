"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaGoogle, FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
                className="bg-black rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border border-emerald-700/30 transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="relative px-6 pt-6 pb-3 border-b border-gray-700/50">
                    <h3 className="text-xl font-bold text-white text-center">Join to Contribute</h3>
                    <button
                        onClick={onClose}
                        className="absolute cursor-pointer top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        title="Close"
                    >
                        <FiX size={20} />
                    </button>
                    <p className="text-gray-400 text-sm mt-1 text-center">
                        Sign in to continue to Slang Dictionary
                    </p>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <div className="space-y-4">
                        {/* Google Login */}
                        <button className="flex cursor-pointer items-center justify-center w-full gap-3 bg-white/10 hover:bg-white/15 text-white px-4 py-3 rounded-lg transition-all border border-white/5 group">
                            <FaGoogle className="text-red-500 group-hover:scale-110 transition-transform" size={20} />
                            <span>Continue with Google</span>
                        </button>

                        {/* Discord Login */}
                        <button className="flex cursor-pointer items-center justify-center w-full gap-3 bg-indigo-900/30 hover:bg-indigo-900/40 text-white px-4 py-3 rounded-lg transition-all border border-indigo-700/20 group">
                            <FaDiscord className="text-indigo-400 group-hover:scale-110 transition-transform" size={20} />
                            <span>Continue with Discord</span>
                        </button>

                        {/* GitHub Login */}
                        <button className="flex cursor-pointer items-center justify-center w-full gap-3 bg-gray-700/50 hover:bg-gray-700/70 text-white px-4 py-3 rounded-lg transition-all border border-gray-600/30 group">
                            <FiGithub className="text-white group-hover:scale-110 transition-transform" size={20} />
                            <span>Continue with GitHub</span>
                        </button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        By signing in, you agree to our
                        <a href="#" className="text-emerald-400 hover:text-emerald-300 ml-1">
                            Terms of Service
                        </a>
                        <span className="mx-1">and</span>
                        <a href="#" className="text-emerald-400 hover:text-emerald-300">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the LoginModal component
export default LoginModal;