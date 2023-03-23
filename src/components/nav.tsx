import '../style/nav.scss'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../data.json'

interface Props {
    active:string,
    setActive: React.Dispatch<React.SetStateAction<string>>,
    setActivePage: React.Dispatch<React.SetStateAction<string>>
}

const animations = {
    entrance: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2.5,
            delay: 1.5
        }
    },
    exit: {
        opacity: 1
    }
}

export default function Nav ({active, setActive, setActivePage}: Props) {
    const location = useLocation();
    const [mydata, setData] = useState<{}[]>([]);

    useEffect(() => {
      setData(data["data"]);
    }, [])

    return (
        <AnimatePresence
        initial={true}
        onExitComplete={() => null}
        >
            <motion.nav
            variants={animations}
            initial='entrance'
            animate='visible'
            exit='exit'
            >
                <h1><Link to='/'>THE PLANETS</Link></h1>

                <ul className="menu">
                    {mydata.map((planet:any) => {
                        const name:string = planet['name'];
                        return <li key={name} 
                        onMouseOver={() => setActive(name)} 
                        onMouseOut={() => setActive('')} 
                        onClick={() => setActivePage(name)}
                        className={`${name} ${active === name || location.pathname === `/${name}` ? "active" : "leave"}`}>
                            <Link to={`/${name}`}>{name}</Link>
                        </li>
                    })}
                </ul>
            </motion.nav>
        </AnimatePresence>
    )
}