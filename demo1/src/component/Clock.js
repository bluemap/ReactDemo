import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(()=> this.tick(),1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date:new Date()});
    }

    render() {
        return(
            <div>
                <h1>下面是定时器</h1>
                <h2> 现在是北京时间：{this.state.date.toLocaleTimeString()} </h2>
            </div>
        );
    }
}

export default Clock;