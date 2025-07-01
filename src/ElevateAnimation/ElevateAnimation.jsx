import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import styles from './ElevateAnimation.module.css'

export default function ElevateAnimation() {
    const controls = useAnimation()

    useEffect(() => {
        controls.start('animate')
    }, [controls])

    // Two-stage outline: center curve, then full triangle
    const outlineVariants = {
        initial: { pathLength: 0 },
        curve: { pathLength: 0.18, transition: { duration: 0.25, delay: 0.0, ease: 'easeInOut' } },
        full: { pathLength: 1, transition: { duration: 0.45, delay: 0.25, ease: 'easeInOut' } }
    }

    // Diagonal fill reveal
    const fillClipVariants = {
        initial: { x: 0, y: 170, width: 0, height: 180, rotate: 45 },
        reveal: { x: -70, y: 100, width: 350, height: 350, rotate: 45, transition: { duration: 0.5, delay: 0.45, ease: 'easeInOut' } }
    }

    // Improved star movement/scale/rotation: centered x, higher y, scale up, slight rotation
    const starVariants = {
        initial: { scale: 0.3, x: 0, y: -60, rotate: -20, opacity: 0 },
        appear: { scale: 1.15, x: 0, y: 0, rotate: 0, opacity: 1, transition: { duration: 0.4, delay: 0.7, ease: 'easeOut' } },
        settle: { scale: 1, x: 0, y: 0, rotate: 0, opacity: 1, transition: { duration: 0.2, delay: 1.1, ease: 'easeOut' } }
    }

    // Text fade in
    const textVariants = {
        initial: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5, delay: 1.3 } }
    }

    // Fade out
    const fadeVariants = {
        initial: { opacity: 0 },
        fade: { opacity: [0, 0, 0, 1], transition: { times: [0, 0.8, 0.95, 1], duration: 0.8, delay: 3.2 } }
    }

    useEffect(() => {
        async function sequence() {
            await controls.start('curve')
            await controls.start('full')
            controls.start('reveal')
            await controls.start('appear')
            await controls.start('settle')
            await controls.start('show')
            await controls.start('fade')
        }
        sequence()
    }, [controls])

    return (
        <div className={styles.container}>
            <svg viewBox="0 0 200 300" width="700" height="700" className={styles.svg}>
                <defs>
                    <clipPath id="triangle-clip">
                        <motion.rect
                            variants={fillClipVariants}
                            initial="initial"
                            animate={controls}
                        />
                    </clipPath>
                </defs>
                <motion.path
                    className={styles.outlinedTriangle}
                    d="M100 170 Q100 170 200 170 L200 170 Q100 170 100 270 L100 270 Q100 170 0 170 L0 170 Q100 170 100 170 Z"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="3"
                    variants={outlineVariants}
                    initial="initial"
                    animate={controls}
                />
                <motion.path
                    className={styles.filledTriangle}
                    d="M100 170 Q100 170 200 170 L200 170 Q100 170 100 270 L100 270 Q100 170 0 170 L0 170 Q100 170 100 170 Z"
                    fill="white"
                    style={{ clipPath: 'url(#triangle-clip)' }}
                />
                <motion.path
                    className={styles.sparkle}
                    d="M100 50 Q100 100 150 100 Q100 100 100 150 Q100 100 50 100 Q100 100 100 50 Z"
                    fill="white"
                    variants={starVariants}
                    initial="initial"
                    animate={controls}
                    style={{ transformOrigin: '100px 100px' }}
                />
            </svg>
            <motion.div
                className={styles.text}
                variants={textVariants}
                initial="initial"
                animate={controls}
            >
                ELEVATE
            </motion.div>
            <motion.div
                className={styles.fade}
                variants={fadeVariants}
                initial="initial"
                animate={controls}
                style={{ position: 'absolute', inset: 0, background: 'black', pointerEvents: 'none', width: 700, height: 700 }}
            />
        </div>
    )
} 