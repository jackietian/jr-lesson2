// import React, { Component } from 'react'

// class Clock extends Component {
//     // lifecycle 1
//     constructor(props) {
//         super(props)
//         this.state = { time: new Date() }
//     }

//     updateTime() {
//         this.timer = setInterval(() => {
//             this.setState({time: new Date()})
//         }, 1000)
//     }

//     // lifecycle 3
//     componentDidMount() {
//         this.updateTime()
//     }

//     // last lifecycle
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     // lifecycle 2
//     render() {
//         return (<h1>Current time is { this.state.time.toLocaleTimeString()} </h1>)
//     }
// }

// export default Clock



// import React, { Component } from 'react'


// function Clock() {
//     return <h1>curent time</h1>
// }


// es6 basic class
/**
 * class component
 * #1. state
 * #2. lifecycle
 *  - constructor
 *  - render
 *  - componentDidMout
 *  - componentWillUnmount
 */
// class Clock extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             time: new Date()
//         }
//         console.log('lifecycle 1')
//         // when a component just born
//         // not recommended to update a state
//     }

//     updateTime() {
//         this.intervalId = setInterval(() => {
//             // this.state = {}, => NOT RIGHT
//             this.setState({
//                 time: new Date()
//             })
//         }, 1000)
//     }

//     componentDidMount() {
//         console.log('lifecycle 3')
//         // do an api call
//         // when a component DOM is ready
//         this.updateTime()
//     }

//     componentWillUnmount() {
//         console.log('lifecycle 4')
//         clearInterval(this.intervalId)
//     }

//     render() {
//         console.log('lifecycle 2')
//         const { time } = this.state
//         const { city } = this.props
//         return (
//             <h1>current time in {city} { time.toLocaleTimeString() }</h1>
//         )
//     }
// }

// export default Clock

// import React from 'react'

// // const Clock = () => <h1>current time { new Date().toLocaleTimeString()}</h1>

// class Clock extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             currentTime: ''
//         }
//         console.log('lifecycle-construtor')
//     }

//     componentDidMount() {
//         console.log('lifecycle-componentDidMount')
//         this.updateTime()
//     }

//     updateTime = () => {
//         console.log('updatetime')
//         this.timer = setInterval(() => {
//             this.setState({
//                 currentTime: new Date().toLocaleTimeString()
//             })
//         }, 1000)
//     }

//     componentWillUnmount() {
//         console.log('lifecycle-componentWillUnmount')
//         clearInterval(this.timer)
//     }

//     render() {
//         console.log('lifecycle-render')
//         return <h1>current time {this.state.currentTime}</h1>
//     }
// }

// export default Clock





import React from 'react'

//============= functional component
// normal function
// function Clock() {

// }

// arrow function
// const Clock = () => <h1>current time: { new Date().toLocaleTimeString()}</h1>

//============ class component
// diff between class component vs function component
// 1. state
// 2. lifecycle
class Clock extends React.Component {
    constructor() {
        // this
        super()
        // initialize a state
        this.state = {
            time: ''
        }
        console.log('lifecycle-constructor')
    }

    componentDidUpdate() {
        console.log('lifecycle-componentDidUpdate')
    }

    componentDidMount() {
        console.log('lifecycle-componentDidMount')
        this.updateTime()
    }

    updateTime = () => {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    componentWillUnmount() {
        console.log('lifecycle-componentWillUnMount')
        clearInterval(this.timer)
    }

    render() {
        console.log('lifecycle-render')
        const { city, func } = this.props
        console.log(this.props)
        return <h1>current time in {city}: { this.state.time }</h1>//jsx
    }
}

export default Clock


















