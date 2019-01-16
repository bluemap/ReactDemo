import React from 'react'

class TestEvent extends React.Component {

    constructor(props){
        super(props);
        this.state = {aSwitchOn:true,bSwitchOn:true};
        this.handleClickA = this.handleClickA.bind(this);//绑定函数内部this指针,箭头函数handleClickB会自动绑定this
    }

    handleClickA() {
        this.setState(prevState => ({aSwitchOn:!prevState.aSwitchOn}));//tips:不太清楚prevState是谁负责传递的，为什么声明后就能拿到
    }

    handleClickB = () => {
        this.setState(prevState => ({bSwitchOn:!prevState.bSwitchOn}));
    }

    render() {
        return (<div>
            <button onClick={this.handleClickA}>{this.state.aSwitchOn?"ON":"OFF"}</button>
            {/* <button onClick={(e)=>handleClickA(e)}>{this.state.aSwitchOn?"ON":"OFF"}</button> //tips:另一种写法 */}
            {/* <button onClick={this.handleClickA.bind(this)}>{this.state.aSwitchOn?"ON":"OFF"}</button>//tips:另一种写法 */}
            <button onClick={this.handleClickB}>{this.state.bSwitchOn?"开启":"关闭"}</button>
        </div>)
    };
}

export default TestEvent;