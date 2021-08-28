import React, { useState, useEffect } from 'react'


/**
 * function components -> react hooks useState
 * class components -> state
 */

const ClockV3 = () => {
    // declare states in components
    const [ currentTime, setCurrentTime ] = useState()

    // useEffect is a combination of all lifecycle in react components
    const cb = () => {
        console.log('react hooks useEffect callback')
        setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000)
    }

    useEffect(cb, [])

    return <h1>{currentTime}</h1>
}


export default ClockV3


