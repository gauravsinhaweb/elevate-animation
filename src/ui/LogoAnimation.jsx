import { motion } from "framer-motion";

const LogoAnimation = ({ animationTrigger }) => {
    const duration = 4.5;
    const svgFillDelay = duration * 0.01;
    const svgFillDuration = duration * 0.6;

    return (
        <svg
            width="225"
            height="120"
            viewBox="0 210 400 190"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-black"
        >
            <defs>
                <linearGradient id={`cloudGradient-${animationTrigger}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="black" stopOpacity="1" />
                    <stop offset="80%" stopColor="black" stopOpacity="1" />
                    <stop offset="95%" stopColor="black" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="black" stopOpacity="0" />
                </linearGradient>

                <clipPath id={`diagonalWipe-${animationTrigger}`}>
                    <motion.polygon
                        key={`clip-${animationTrigger}`}
                        initial={{ points: "184,400 184,400 0,216 0,216" }}
                        animate={{ points: "184,400 368,400 368,216 0,216" }}
                        transition={{
                            duration: svgFillDuration,
                            delay: svgFillDelay,
                            ease: [0.4, 0.0, 0.2, 1]
                        }}
                    />
                </clipPath>
            </defs>

            <path
                d="M183.111 400L183.095 397.641C181.833 298.274 100.619 217.508 0.619001 217.508L0.619001 215.827L367.285 215.827L367.285 217.508C266.496 217.508 184.792 299.212 184.792 400L183.111 400Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
            />

            <motion.rect
                key={`cloud-${animationTrigger}`}
                x="-20"
                width="440"
                height="500"
                fill={`url(#cloudGradient-${animationTrigger})`}
                initial={{ y: -50 }}
                animate={{ y: -500 }}
                transition={{
                    duration: duration * 0.4,
                    ease: [0.4, 0.0, 0.2, 1],
                    delay: 0
                }}
            />

            <path
                d="M183.111 400L183.095 397.641C181.833 298.274 100.619 217.508 0.619001 217.508L0.619001 215.827L367.285 215.827L367.285 217.508C266.496 217.508 184.792 299.212 184.792 400L183.111 400Z"
                fill="white"
                clipPath={`url(#diagonalWipe-${animationTrigger})`}
            />
        </svg>
    );
};

export default LogoAnimation; 