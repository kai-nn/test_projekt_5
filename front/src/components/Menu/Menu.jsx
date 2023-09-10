import React, { useEffect, useState } from 'react'
import cls from './Menu.module.scss'

const Menu = (props) => {

    const {coneProperty, setConeProperty, smoothPres, setSmoothPres} = props

    const [radius, setRadius] = useState(coneProperty.r)
    const [height, setHeight] = useState(coneProperty.h)
    const [segment, setSegment] = useState(coneProperty.N)

    const [timerLink, setTimerLink] = useState(0)

    // старт пересчета модели после изменения параметров
    useEffect(() => {
        clearTimeout(timerLink)
        setTimerLink(
            setTimeout(() => {
                setConeProperty(
                    {
                        h: height,
                        r: radius,
                        N: segment
                    }
                )
            }, 1000)
        )
    }, [radius, height, segment])


    const handler = (e) => {
        if(e.target.name === 'radius') setRadius(+e.target.value)
        if(e.target.name === 'height') setHeight(+e.target.value)
        if(e.target.name === 'segment') setSegment(+e.target.value)
        if(e.target.name === 'toggle') setSmoothPres(+e.target.value)
    }


    return (
        <div className={cls.Menu}>
            <label htmlFor="radius">Радиус: {radius}</label>
            <input name="radius" onChange={handler} id="radius" type={'range'} min={3} max={100} step={1} value={radius}/>

            <label htmlFor="height">Высота: {height}</label>
            <input name="height" onChange={handler} id="height" type={'range'} min={4} max={100} step={1} value={height}/>

            <label htmlFor="segment">Сегменты: {segment}</label>
            <input name="segment" onChange={handler} id="segment" type={'range'} min={3} max={200} step={1} value={segment}/>

            <label htmlFor="toggle">Гладкое представление</label>
            <input name="toggle" onChange={handler} id="toggle" type={'range'} min={0} max={1} step={1} value={smoothPres}/>
        </div>
    )
}

export default Menu