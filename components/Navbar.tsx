import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-[#F0F4F9]/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/gemini-logo.webp"
                            alt="Gemini Spark Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-xl font-semibold text-[#1F1F1F] tracking-tight font-[family-name:var(--font-inter)]">
                            Google Gemini Students Club MIT ADT
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/mit.png"
                            alt="MIT ADT University Logo"
                            width={80}
                            height={80}
                            className="h-12 md:h-16 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
