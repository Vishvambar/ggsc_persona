"use client";

import { useState } from "react";
import PromptCard from "./PromptCard";
import { PROMPTS } from "@/lib/data/prompts";
import { ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function PromptLibrary() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showToast, setShowToast] = useState(false);

    const currentPrompt = PROMPTS[currentIndex];

    // Navigation Handlers
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < PROMPTS.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleShuffle = () => {
        if (PROMPTS.length > 1) {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * PROMPTS.length);
            } while (newIndex === currentIndex); // Avoid picking the same prompt
            setCurrentIndex(newIndex);
        }
    };

    const handleCopySuccess = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div className="space-y-10 w-full flex flex-col items-center max-w-5xl mx-auto">

            {/* Single Prompt Display */}
            <div className="w-full">
                {currentPrompt ? (
                    <PromptCard
                        prompt={currentPrompt}
                        variant="large"
                        onCopySuccess={handleCopySuccess}
                    />
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        No prompts available.
                    </div>
                )}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                    Previous
                </button>

                <button
                    onClick={handleShuffle}
                    className="p-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#D2E3FC] transition-colors shadow-sm"
                    title="Shuffle"
                >
                    <ArrowPathIcon className="w-6 h-6" />
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === PROMPTS.length - 1}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all bg-[#1A73E8] text-white hover:bg-[#1557B0] disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Next
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Page Indicator */}
            <div className="text-gray-400 text-sm font-medium">
                {PROMPTS.length > 0 ? `${currentIndex + 1} of ${PROMPTS.length}` : "0 of 0"}
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1F1F1F] text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium animate-fade-in-up">
                    Prompt copied to clipboard
                </div>
            )}
        </div>
    );
}
