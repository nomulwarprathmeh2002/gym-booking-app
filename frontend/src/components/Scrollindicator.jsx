import { ChevronDown } from "lucide-react"; // make sure you've installed lucide-react
import React from "react";

const Scrollindicator = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <div
            onClick={handleScroll}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        >
            <p className="text-white text-sm font-medium mb-2 tracking-wide">
                Scroll to explore
            </p>

            {/* Circle border with arrow */}
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center animate-bounce hover:bg-white/20 transition-all duration-300">
                <ChevronDown className="text-white w-5 h-5" />
            </div>
        </div>
    );
};

export default Scrollindicator;
