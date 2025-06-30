import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import styles from './ElevateAnimation.module.css'

export default function ElevateAnimation() {
    const controls = useAnimation()

    useEffect(() => {
        controls.start('animate')
    }, [controls])

    return (
        <div className={styles.container}>
            <svg viewBox="0 0 200 300" width="700" height="700" className={styles.svg}>
                <motion.path
                    className={styles.sparkle}
                    d="M100 50 Q100 100 150 100 Q100 100 100 150 Q100 100 50 100 Q100 100 100 50 Z"
                    fill="white"
                    initial={{ scale: 0, y: -30, opacity: 0 }}
                    animate={controls}
                    variants={{
                        animate: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.2 } }
                    }}
                    style={{ transformOrigin: '100px 100px' }}
                />
                <motion.path
                    className={styles.outlinedTriangle}
                    d="M100 170 Q100 170 200 170 L200 170 Q100 170 100 270 L100 270 Q100 170 0 170 L0 170 Q100 170 100 170 Z"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={controls}
                    variants={{
                        animate: { pathLength: 1, transition: { duration: 0.7, delay: 0.0 } }
                    }}
                />
                <motion.path
                    className={styles.filledTriangle}
                    d="M100 170 Q100 170 200 170 L200 170 Q100 170 100 270 L100 270 Q100 170 0 170 L0 170 Q100 170 100 170 Z"
                    fill="white"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={controls}
                    variants={{
                        animate: { scaleY: 1, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }
                    }}
                    style={{ transformOrigin: '100px 170px' }}
                />
            </svg>
            <motion.div
                className={styles.text}
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                    animate: { opacity: 1, transition: { duration: 0.5, delay: 2.0 } }
                }}
            >
                ELEVATE
            </motion.div>
            <motion.div
                className={styles.fade}
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                    animate: { opacity: [0, 0, 0, 1], transition: { times: [0, 0.8, 0.95, 1], duration: 0.8, delay: 3.2 } }
                }}
                style={{ position: 'absolute', inset: 0, background: 'black', pointerEvents: 'none', width: 700, height: 700 }}
            />
        </div>
    )
} 