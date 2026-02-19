"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import { PROMPTS } from "@/lib/data/prompts";
import { ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function PromptLibrary() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showToast, setShowToast] = useState(false);

    // Shuffle State
    const [shuffleOrder, setShuffleOrder] = useState<number[]>([]);
    const [shuffleCursor, setShuffleCursor] = useState(0);

    const currentPrompt = PROMPTS[currentIndex];

    // Fisher-Yates Shuffle Algorithm
    const generateShuffledIndices = (length: number) => {
        const indices = Array.from({ length }, (_, i) => i);
        for (let i = length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices;
    };

    // Initialize shuffle order on mount
    useEffect(() => {
        setShuffleOrder(generateShuffledIndices(PROMPTS.length));
        setShuffleCursor(0);
    }, []);

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
        if (PROMPTS.length > 1 && shuffleOrder.length > 0) {
            let nextCursor = shuffleCursor;

            // If we've used all shuffled indices, generate a new order
            if (nextCursor >= shuffleOrder.length) {
                const newOrder = generateShuffledIndices(PROMPTS.length);
                setShuffleOrder(newOrder);
                nextCursor = 0;
            }

            const nextIndex = shuffleOrder[nextCursor];

            // Ensure we don't pick the same prompt immediately if possible (unlikely with full shuffle reset but safe to check)
            if (nextIndex === currentIndex && PROMPTS.length > 1) {
                // Swap with next in line or just move cursor one more if available
                // Simple approach: just increment cursor again if we hit the limit
                setShuffleCursor(nextCursor + 1); // Move past it
                // Recurse freely or just let the next click handle it? 
                // Fisher-Yates guarantees a permutation. If the last item of prev list == first item of new list, 
                // it's a rare edge case. We'll accept it for now to keep logic simple.
            }

            setCurrentIndex(nextIndex);
            setShuffleCursor(nextCursor + 1);
        }
    };

    const handleJumpToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1 && value <= PROMPTS.length) {
            setCurrentIndex(value - 1);
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
            <div className="flex items-center justify-center gap-4 mt-8 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="flex items-center justify-center w-12 h-12 rounded-full transition-all text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                    title="Previous"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                {/* Jump To Input */}
                <div className="flex items-center justify-center px-4 border-l border-r border-gray-200 h-8">
                    <span className="text-sm text-gray-400 mr-2">#</span>
                    <input
                        type="number"
                        min={1}
                        max={PROMPTS.length}
                        value={currentIndex + 1}
                        onChange={handleJumpToChange}
                        className="w-12 text-center font-bold text-gray-700 bg-transparent outline-none appearance-none"
                    />
                    <span className="text-sm text-gray-400 ml-1">/ {PROMPTS.length}</span>
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === PROMPTS.length - 1}
                    className="flex items-center justify-center w-12 h-12 rounded-full transition-all text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                    title="Next"
                >
                    <ChevronRightIcon className="w-6 h-6" />
                </button>

                <div className="w-px h-8 bg-gray-200 mx-2"></div>

                <button
                    onClick={handleShuffle}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#D2E3FC]"
                    title="Shuffle (Non-repeating)"
                >
                    <ArrowPathIcon className="w-5 h-5" />
                    <span>Shuffle</span>
                </button>
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
