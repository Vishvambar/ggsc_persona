import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <div className="w-full max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-white text-[#1F1F1F] rounded-full py-4 pl-12 pr-4 shadow-sm outline-none transition-all ring-1 ring-transparent focus:ring-blue-500 focus:shadow-md placeholder:text-gray-400"
                placeholder="Search for prompts..."
            />
        </div>
    );
};

export default SearchBar;
