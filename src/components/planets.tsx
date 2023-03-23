import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import sun from '../assets/Images/sun.png';
import mercury from '../assets/Images/planet-mercury.svg';
import venus from '../assets/Images/planet-venus.svg';
import earth from '../assets/Images/planet-earth.svg';
import mars from '../assets/Images/planet-mars.svg';
import jupiter from '../assets/Images/planet-jupiter.svg';
import saturn from '../assets/Images/planet-saturn.svg';
import uranus from '../assets/Images/planet-uranus.svg';
import neptune from '../assets/Images/planet-neptune.svg';
import PlanetContainer from './planetContainer';

import mydata from '../data.json';

const animations = {
    entrance: {
        scale: 3,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 3,
            delay: 1,
        }
    },
    exit: {
        transition: {
            duration: 0.5
        },
        opacity: 0,
        rotate: -10
    }
}

type Planet = {
    'name': string,
    "overview": string,
    "internalStructure": string,
    "geology": string,
    'rotationTime': string,
    'revolutionTime': string,
    'radius': string,
    'avgTemp': string,
    'color': string
}

type Data = {
    data: Planet[],
}

interface Props {
    active: string
}

export default function Main ({active}: Props) {
    const [data, setData] = useState<Data>();
    useEffect(() => setData(mydata), []);

    const getImgUrl = (name:string):string => {
        return name === 'Mercury' ? mercury
        :name === 'Venus' ? venus
        :name === 'Earth' ? earth
        :name === 'Mars' ? mars
        :name === 'Jupiter' ? jupiter
        :name === 'Saturn' ? saturn
        :name === 'Uranus' ? uranus
        : neptune;
    }

    return (
        <motion.main
            variants={animations}
            initial='entrance'
            animate="visible"
            exit="exit"
        >
            <div className="sun">
                <img src={sun} alt="sun" />
                <div className="shadow"></div>
            </div>    
            {data?.data.map((planet:Planet) => {
            return <PlanetContainer key={planet.color} name={planet.name} color={planet.color} imgUrl={getImgUrl(planet.name)} active={active} />
            })}
        </motion.main>
    )
}