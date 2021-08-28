import React, { Component } from 'react'

class ClockV4 extends Component {
    constructor(props) {
        console.log('lifecycle - constructor')
        super(props)
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }

        this.func = this.func.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            })
        }, 1000)
        console.log('lifecycle - componentDidMount')
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('lifecycle - componentWillUnMount')
    }

    render() {
        console.log('lifecycle - render')
        const { city } = this.props;
        const { currentTime } = this.state;
        return <h1>{city} - {currentTime}</h1>
    }
}

export default ClockV4