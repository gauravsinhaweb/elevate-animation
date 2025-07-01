import { useState, useEffect } from "react";

export const useAnimationSequence = () => {
    const [animationTrigger, setAnimationTrigger] = useState(0);
    const [showElevateText, setShowElevateText] = useState(false);
    const [elevateContent, setElevateContent] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [timers, setTimers] = useState([]);

    const clearAllTimers = () => {
        timers.forEach(clearTimeout);
        setTimers([]);
    };

    const runAnimationSequence = () => {
        clearAllTimers();
        const newTimers = [];

        newTimers.push(
            setTimeout(() => setShowElevateText(true), 1000),
            setTimeout(() => setElevateContent(true), 1300),
            setTimeout(() => setFadeOut(true), 2800)
        );

        setTimers(newTimers);
    };

    const triggerAnimation = () => {
        setShowElevateText(false);
        setElevateContent(false);
        setFadeOut(false);
        setAnimationTrigger((prev) => prev + 1);
        runAnimationSequence();
    };

    useEffect(() => {
        runAnimationSequence();
        return clearAllTimers;
    }, []);

    return {
        animationTrigger,
        showElevateText,
        elevateContent,
        fadeOut,
        triggerAnimation
    };
};