import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../style/home.scss'
import sun from '../assets/Images/sun.png'
import Main from './planets'

interface Props {
    vis: boolean,
    active: string
}

export default function Home ({vis, active}: Props)  {
    return (
        <>
        <AnimatePresence
        initial={true}
        onExitComplete={() => null}
        >
            {vis && <Main active={active} />}
        </AnimatePresence>
        </>
    )
}