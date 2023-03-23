import { useState, useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion' 
import Img from './img'
import mydata from '../data.json'
import '../style/planet.scss'

import mercury from '../assets/Images/planet-mercury.svg';
import venus from '../assets/Images/planet-venus.svg';
import earth from '../assets/Images/planet-earth.svg';
import mars from '../assets/Images/planet-mars.svg';
import jupiter from '../assets/Images/planet-jupiter.svg';
import saturn from '../assets/Images/planet-saturn.svg';
import uranus from '../assets/Images/planet-uranus.svg';
import neptune from '../assets/Images/planet-neptune.svg';

import mercuryInternal from '../assets/Images/planet-mercury-internal.svg';
import venusInternal from '../assets/Images/planet-venus-internal.svg';
import earthInternal from '../assets/Images/planet-earth-internal.svg';
import marsInternal from '../assets/Images/planet-mars-internal.svg';
import jupiterInternal from '../assets/Images/planet-jupiter-internal.svg';
import saturnInternal from '../assets/Images/planet-saturn-internal.svg';
import uranusInternal from '../assets/Images/planet-uranus-internal.svg';
import neptuneInternal from '../assets/Images/planet-neptune-internal.svg';

import mercuryGeology from '../assets/Images/planet-mercury-geology.svg';
import venusGeology from '../assets/Images/planet-venus-geology.svg';
import earthGeology from '../assets/Images/planet-earth-geology.svg';
import marsGeology from '../assets/Images/planet-mars-geology.svg';
import jupiterGeology from '../assets/Images/planet-jupiter-geology.svg';
import saturnGeology from '../assets/Images/planet-saturn-geology.svg';
import uranusGeology from '../assets/Images/planet-uranus-geology.svg';
import neptuneGeology from '../assets/Images/planet-neptune-geology.svg';

type Planet = {
    'name': string,
    'overview': string,
    'internalStructure': string,
    'geology': string,
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
    activePage: string
}

export default function Planet ({activePage}: Props) {
    const { name } = useParams();
    const [data, setData] = useState<Data>();
    const [planet, setPlanet] = useState<Planet>();
    const [active, setActive] = useState('overview');
    const [img, setImg] = useState('');
    const [visible, setVisible] = useState(true);

    useEffect(() => setData(mydata), []);
    useEffect(() => {
        setImg(getImg(active));
        data?.data.map((item:Planet) => {
            if (item.name === name)
                setPlanet(item);
        })
    }, [name])

    useEffect(() => {
        visible ? setVisible(false) : setVisible(true);
        setTimeout(() => {
            setVisible(true);            
        }, 1300);
    }, [useLocation().pathname]);

    const getImg = (type:string):string => {
        if (type === 'overview') {
            return name === 'Mercury' ? mercury
            : name === 'Venus' ? venus
            : name === 'Earth' ? earth
            : name === 'Mars' ? mars
            : name === 'Jupiter' ? jupiter
            : name === 'Saturn' ? saturn
            : name === 'Uranus' ? uranus
            : neptune
        } else if (type === 'internal-structure') {
            return name === 'Mercury' ? mercuryInternal
            : name === 'Venus' ? venusInternal
            : name === 'Earth' ? earthInternal
            : name === 'Mars' ? marsInternal
            : name === 'Jupiter' ? jupiterInternal
            : name === 'Saturn' ? saturnInternal
            : name === 'Uranus' ? uranusInternal
            : neptuneInternal
        }
        return "";
    } 

    return (
        <>
            <AnimatePresence initial={false} onExitComplete={() => null}>
                {visible && <Img img={img} />}
            </AnimatePresence>
        </>
    )
}