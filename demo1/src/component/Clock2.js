import React from 'react'

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(),timerID:0};
    }

    componentDidMount() {
        const timerID = setInterval(()=> this.tick(),1000);
        this.updateTimerID(timerID);
    }
  
    componentWillUnmount() {
        clearInterval(this.state.timerID);
    }

    tick() {
        const date = new Date();
        const state = Object.assign({},this.state,{date});
        this.setState(state);
        // this.setState({date});//只设置变更项也是OK的
    }
    updateTimerID(timerID) {
        // this.setState(Object.assign({},this.state,{timerID}));//tips:对象词法
        this.setState(Object.assign({},this.state,{timerID:timerID}));//tips:普通语法
        // this.setState({timerID})//只设置变更项也是OK的
    }

    render() {
        return(
            <div>
                <h1>这个是设计优化后的定时器</h1>
                <h2> 现在是北京时间：{this.state.date.toLocaleTimeString()} </h2>
            </div>
        );
    }
}

export default Clock2;