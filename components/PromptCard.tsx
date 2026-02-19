import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { Prompt } from "@/lib/data/prompts";

interface PromptCardProps {
    prompt: Prompt;
    onCopySuccess?: () => void;
    variant?: "default" | "large";
}

const PromptCard = ({ prompt, onCopySuccess, variant = "default" }: PromptCardProps) => {
    const isLarge = variant === "large";

    return (
        <div
            className={`
                bg-white rounded-3xl p-6 shadow-sm hover:shadow-md border border-transparent hover:border-gray-200 transition-all duration-300 relative group flex flex-col h-full
                ${isLarge ? "min-h-[400px] justify-center items-center text-center px-4 py-12" : "p-6"}
            `}
        >
            <div className={`mb-4 ${isLarge ? "mb-8 bg-transparent" : ""}`}>
                <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-2 bg-gray-100 px-2 py-1 rounded-md">
                    {prompt.category}
                </span>
                <h3
                    key={`title-${prompt.id}`}
                    className={`font-bold text-gray-900 leading-tight font-[family-name:var(--font-inter)] animate-fade-in ${isLarge ? "text-3xl mt-2" : "text-[18px]"}`}
                >
                    {prompt.title}
                </h3>
            </div>

            <p
                key={`content-${prompt.id}`}
                className={`text-[#444746] font-[family-name:var(--font-roboto)] animate-fade-in ${isLarge ? "text-2xl leading-relaxed max-w-4xl" : "text-[15px] leading-relaxed line-clamp-4 flex-grow"}`}
            >
                {prompt.content}
            </p>

            <div className={`mt-4 flex ${isLarge ? "absolute bottom-6 right-6" : "justify-end"}`}>
                <button
                    className={`rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors ${isLarge ? "p-4" : "p-2"}`}
                    title="Copy prompt"
                    onClick={() => {
                        navigator.clipboard.writeText(prompt.content);
                        if (onCopySuccess) onCopySuccess();
                    }}
                >
                    <ClipboardDocumentIcon className={isLarge ? "h-8 w-8" : "h-6 w-6"} />
                </button>
            </div>
        </div>
    );
};

export default PromptCard;
