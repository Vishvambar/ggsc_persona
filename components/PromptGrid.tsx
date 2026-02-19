import { Prompt } from "@/lib/data/prompts";
import PromptCard from "./PromptCard";

interface PromptGridProps {
    prompts: Prompt[];
    onCopySuccess: () => void;
}

const PromptGrid = ({ prompts, onCopySuccess }: PromptGridProps) => {
    if (prompts.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                No prompts found matching your criteria.
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prompts.map((prompt) => (
                <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    onCopySuccess={onCopySuccess}
                />
            ))}
        </div>
    );
};

export default PromptGrid;
