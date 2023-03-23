import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

interface Props {
    imgUrl: string,
    color: string,
    name: string,
    active: string
}

export default function PlanetContainer ({imgUrl, color, name, active}: Props) {
    const [hover, setHover] = useState("");
    useEffect(() => setHover(active), [active])

    const style = {
        border: `1px solid ${name === hover ? color : "rgba(255, 255, 255, 0.05)"}`,
        borderRadius: "50%",
        cursor: "pointer",
        transition: "all 0.3s"
    }

    return (
        <Link to={`/${name}`} className={`${name}-planet ${name === hover ? "active" : ""}`} style={style} onMouseOver={() => setHover(name)} onMouseOut={() => setHover('')}>
                <div className={name}>
                    <img src={imgUrl} alt={name} />
                </div>
        </Link>
    )
}