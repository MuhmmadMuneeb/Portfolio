import { div } from 'framer-motion/client';
import React from 'react';

const Sun = () => {
    return (
        <div>

            {/* The Sun */}
            <div className="relative z-20 w-16 h-16 rounded-full 
        bg-[radial-gradient(circle_at_30%_30%,#fff9e6_0%,#ffcc80_40%,#ff8a65_100%)]
        shadow-[0_0_40px_10px_rgba(255,183,77,0.4),0_0_90px_30px_rgba(255,138,101,0.2)]
        transition-transform duration-500 hover:scale-110 cursor-pointer"
            />
        </div>

    );
};

export default Sun;