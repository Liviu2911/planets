import { motion, AnimatePresence } from 'framer-motion' 

interface Props {
    img: string
}

export default function Img ({img}: Props) {
    const animations = {
        initial: {
            scale: 0.5,
            opacity: 0,
            x: 200,
            rotate: 50
        },
        visible: {
            scale: 1,
            rotate: 0,
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.25,
            }
        },
        exit: {
            scale: 0.4,
            opacity: 0,
            x: -350,
            rotate: -50,
            transition: {
                duration: 1.25
              }
        }
    }
    return (
        <motion.div 
            className="planet-img"
            variants={animations}
            initial='initial'
            animate='visible'
            exit='exit'
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                velocity: 2
            }}
            >
            <img src={img} />
        </motion.div>
    )
}