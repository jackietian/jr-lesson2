import React from 'react'
import { useEffect, useState } from "react"

const ClockV2 = () => {
    const [ currentDateTime, setCurrentDateTime ] = useState('')

    const cb = () => {
        console.log('useEffect callback')
        setInterval(() => {
            setCurrentDateTime(new Date().toLocaleTimeString())
        }, 1000)
    }
    useEffect(cb, [])
    return <h1>clock {currentDateTime}</h1>
}

export default ClockV2