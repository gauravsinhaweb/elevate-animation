import { AnimatePresence, motion } from "framer-motion";
import IconDisplay from "../ui/IconDisplay";
import TitleReveal from "../ui/TitleReveal";
import LogoAnimation from "../ui/LogoAnimation";
import ControlButton from "../ui/ControlButton";
import { useShowcaseAnimation } from "../hooks/useShowcaseAnimation";

const AnimatedShowcase = () => {

    const {
        animationTrigger,
        showElevateText,
        elevateContent,
        fadeOut,
        triggerAnimation
    } = useShowcaseAnimation();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={animationTrigger}
                    className="flex flex-col items-center justify-center"
                    animate={{ y: elevateContent ? -90 : 0, opacity: fadeOut ? 0 : 1 }}
                    transition={{
                        y: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 2.0, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                >
                    <IconDisplay />
                    <LogoAnimation animationTrigger={animationTrigger} />
                    <TitleReveal show={showElevateText} />
                </motion.div>
            </AnimatePresence>

            <ControlButton onClick={triggerAnimation} />
        </div>
    );
};

export default AnimatedShowcase; 