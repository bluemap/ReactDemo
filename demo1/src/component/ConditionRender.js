import React from 'react'

class UserInfoCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state={isLogined:false}
    }
    loginIn = ()=>{
        this.setState({isLogined:true});
    }
    loginout = ()=>{
        this.setState({isLogined:false});
    }

    render(){
        let tempView;
        if(this.state.isLogined){
            tempView = <LogoutView onClick={this.loginout}/>;
        }
        else {
            tempView = <LoginView onClick={this.loginIn}/>;
        }

        return (<div>
            {tempView}
        </div>);
    }
}

function LoginView(props) {
    return (
    <button onClick={props.onClick}>Click to Login</button>
    );
}

function LogoutView (props) {
    return (
        <button onClick={props.onClick}>Click to Logout</button>
    );
}

export default UserInfoCondition;