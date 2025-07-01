import { motion } from "framer-motion";

const IconDisplay = () => (
    <motion.svg
        viewBox="0 0 170 170"
        className="w-24 h-24 mb-[2px] ml-[-1rem]"
        initial={{ opacity: 0, x: -80, scale: 0.2, rotate: -180 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
        transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
        }}
    >
        <path
            className="sparkle"
            d="M85 0 Q85 85 170 85 Q85 85 85 170 Q85 85 0 85 Q85 85 85 0 Z"
            fill="white"
        />
    </motion.svg>
);

export default IconDisplay; 