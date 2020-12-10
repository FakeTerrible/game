import React from 'react';
import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';
function UserGreet(props){
    return (
        <h1>
            欢迎登陆
        </h1>
    )
}

function UserLogin(props){
    return (
        <div>
            <h1>请先登录</h1>
            <div>
                账号:<input type="text"></input>
                <br/>
                密码:<input type="text"></input> 
                <br/> 
                <button>提交</button>      
            </div>
        </div>
    )
}

class ParentCon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin:false
        }
    }
    render(){
        let element = null;
        if(this.state.isLogin){
            element = <UserGreet></UserGreet>
        }else{
            element = <UserLogin></UserLogin>
        }

        return (
            <div>
                {element}
            </div>
        )
    }
}

ReactDom.render(
    <ParentCon></ParentCon>,
    document.querySelector('#root')
)
reportWebVitals();